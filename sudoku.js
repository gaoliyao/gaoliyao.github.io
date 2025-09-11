/* Lightweight 6x6 Sudoku (LinkedIn-style) with timer and best-time tracking
 * Author: Cascade helper
 * All client-side, no external deps.
 */

(function () {
  const SIZE = 6; // 6x6 grid
  const SUB_R = 2, SUB_C = 3; // subgrid size 2x3

  // Elements
  let gridEl, keypadEl, timerEl, bestEl, resultBtn, notesToggleBtn, hintBtn, eraseBtn, undoBtn;

  // State
  let puzzle = []; // numbers 0..6
  let solution = [];
  let notesMode = false;
  let selected = { r: -1, c: -1 };
  let startTime = null;
  let timerInterval = null;
  let history = []; // for undo: {r,c,prev,val}

  function $(sel, root = document) { return root.querySelector(sel); }
  function $all(sel, root = document) { return Array.from(root.querySelectorAll(sel)); }

  function formatTime(sec) {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  }

  function bestKey() { return `sudoku6_best_time`; }

  function getBest() {
    const v = localStorage.getItem(bestKey());
    return v ? parseInt(v, 10) : null;
  }

  function setBest(seconds) {
    const best = getBest();
    if (best == null || seconds < best) {
      localStorage.setItem(bestKey(), String(seconds));
      return true;
    }
    return false;
  }

  // Sudoku generator: start from base Latin pattern, then shuffle bands/stacks and rows/cols; then remove cells at random.
  function basePattern(r, c) {
    // pattern ensuring subgrid structure
    return (SUB_C * (r % SUB_R) + Math.floor(r / SUB_R) + c) % SIZE; // 0..5
  }

  function shuffled(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function mkRange(n) { return [...Array(n).keys()]; }

  function generateSolution() {
    // Correct construction for 6x6 with 2x3 subgrids:
    // rows are arranged by shuffled row bands (SIZE/SUB_R bands), each with shuffled rows (SUB_R each)
    const rowBands = shuffled(mkRange(SIZE / SUB_R)); // 3 bands
    const rowBase = shuffled(mkRange(SUB_R)); // 0..1 within a band
    const rows = [].concat(...rowBands.map(g => rowBase.map(r => g * SUB_R + r))); // length 6

    // columns arranged by shuffled column stacks (SIZE/SUB_C stacks), each with shuffled cols (SUB_C each)
    const colStacks = shuffled(mkRange(SIZE / SUB_C)); // 2 stacks
    const colBase = shuffled(mkRange(SUB_C)); // 0..2 within a stack
    const cols = [].concat(...colStacks.map(g => colBase.map(c => g * SUB_C + c))); // length 6

    const nums = shuffled(mkRange(SIZE));

    const board = Array.from({ length: SIZE }, () => Array(SIZE).fill(0));
    for (let r = 0; r < SIZE; r++) {
      for (let c = 0; c < SIZE; c++) {
        board[r][c] = nums[basePattern(rows[r], cols[c])] + 1; // map 0..5 -> 1..6
      }
    }
    return board;
  }

  function cloneBoard(b) { return b.map(row => row.slice()); }

  function removeCells(board, clues = 20) {
    // 6x6 has 36 cells. clues default around 20 creates medium difficulty.
    const countToRemove = Math.max(0, 36 - clues);
    const coords = [];
    for (let r = 0; r < SIZE; r++) for (let c = 0; c < SIZE; c++) coords.push([r, c]);
    const order = shuffled(coords);
    const holes = new Set();
    for (let i = 0; i < countToRemove && i < order.length; i++) {
      const [r, c] = order[i];
      board[r][c] = 0;
      holes.add(`${r},${c}`);
    }
    return holes; // set of editable cells
  }

  function generatePuzzle() {
    solution = generateSolution();
    const puzzleBoard = cloneBoard(solution);
    const editable = removeCells(puzzleBoard, 20 + Math.floor(Math.random() * 7)); // 20-26 clues
    puzzle = puzzleBoard;
    return editable; // set of cells users can edit
  }

  function startTimerIfNeeded() {
    if (startTime) return;
    startTime = Date.now();
    timerInterval = setInterval(() => {
      const elapsed = Math.floor((Date.now() - startTime) / 1000);
      timerEl.textContent = `⏱ ${formatTime(elapsed)}`;
    }, 250);
  }

  function stopTimer() {
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = null;
  }

  function drawGrid(editable) {
    gridEl.innerHTML = '';
    for (let r = 0; r < SIZE; r++) {
      const row = document.createElement('div');
      row.className = 'sdk-row';
      for (let c = 0; c < SIZE; c++) {
        const cell = document.createElement('div');
        cell.className = 'sdk-cell';
        cell.dataset.r = r;
        cell.dataset.c = c;
        const val = puzzle[r][c];
        if (val !== 0) {
          cell.textContent = String(val);
          cell.classList.add('fixed');
        } else {
          cell.classList.add('editable');
        }
        if (r % SUB_R === 0) cell.classList.add('thick-top');
        if (c % SUB_C === 0) cell.classList.add('thick-left');
        if (r === SIZE - 1) cell.classList.add('thick-bottom');
        if (c === SIZE - 1) cell.classList.add('thick-right');
        cell.addEventListener('click', () => selectCell(r, c));
        row.appendChild(cell);
      }
      gridEl.appendChild(row);
    }
  }

  function selectCell(r, c) {
    selected = { r, c };
    $all('.sdk-cell').forEach(el => el.classList.remove('selected'));
    const el = cellAt(r, c);
    if (el) el.classList.add('selected');
  }

  function cellAt(r, c) { return $(`.sdk-cell[data-r="${r}"][data-c="${c}"]`); }

  function placeNumber(n) {
    const { r, c } = selected;
    if (r < 0 || c < 0) return;
    const cellEl = cellAt(r, c);
    if (!cellEl || !cellEl.classList.contains('editable')) return;

    startTimerIfNeeded();

    const prev = puzzle[r][c];
    if (notesMode) {
      cellEl.classList.add('notes');
      const existing = new Set(cellEl.textContent.split(' ').filter(x => x));
      if (existing.has(String(n))) existing.delete(String(n)); else existing.add(String(n));
      cellEl.textContent = Array.from(existing).sort().join(' ');
      return;
    }

    history.push({ r, c, prev, val: n, notes: cellEl.classList.contains('notes') ? cellEl.textContent : null });
    cellEl.classList.remove('notes');
    cellEl.textContent = String(n);
    puzzle[r][c] = n;
    checkConflicts(r, c);
    checkAndAnimateSubgrid(r, c);
  }

  function eraseCell() {
    const { r, c } = selected;
    if (r < 0 || c < 0) return;
    const cellEl = cellAt(r, c);
    if (!cellEl || !cellEl.classList.contains('editable')) return;

    startTimerIfNeeded();

    history.push({ r, c, prev: puzzle[r][c], val: 0, notes: cellEl.classList.contains('notes') ? cellEl.textContent : null });
    cellEl.classList.remove('notes');
    cellEl.textContent = '';
    puzzle[r][c] = 0;
    clearConflictHighlights();
    checkAndAnimateSubgrid(r, c, true);
  }

  function undo() {
    const last = history.pop();
    if (!last) return;
    const { r, c, prev, notes } = last;
    puzzle[r][c] = prev;
    const el = cellAt(r, c);
    el.textContent = prev ? String(prev) : '';
    if (notes) { el.classList.add('notes'); el.textContent = notes; }
    else el.classList.remove('notes');
    clearConflictHighlights();
    checkAndAnimateSubgrid(r, c);
  }

  function checkConflicts(r, c) {
    clearConflictHighlights();
    // Highlight conflicts in row/col/subgrid
    const n = puzzle[r][c];
    if (!n) return;

    const mark = (rr, cc) => {
      const el = cellAt(rr, cc);
      if (el) el.classList.add('conflict');
    };

    // row
    for (let cc = 0; cc < SIZE; cc++) if (cc !== c && puzzle[r][cc] === n) { mark(r, c); mark(r, cc); }
    // col
    for (let rr = 0; rr < SIZE; rr++) if (rr !== r && puzzle[rr][c] === n) { mark(r, c); mark(rr, c); }
    // subgrid
    const rs = Math.floor(r / SUB_R) * SUB_R;
    const cs = Math.floor(c / SUB_C) * SUB_C;
    for (let rr = rs; rr < rs + SUB_R; rr++) for (let cc = cs; cc < cs + SUB_C; cc++)
      if ((rr !== r || cc !== c) && puzzle[rr][cc] === n) { mark(r, c); mark(rr, cc); }
  }

  function clearConflictHighlights() {
    $all('.sdk-cell').forEach(el => el.classList.remove('conflict'));
  }

  function isSolved() {
    // quick equality check with solution
    for (let r = 0; r < SIZE; r++) {
      for (let c = 0; c < SIZE; c++) {
        if (puzzle[r][c] !== solution[r][c]) return false;
      }
    }
    return true;
  }

  function showResults() {
    if (!startTime) startTimerIfNeeded();
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    if (isSolved()) {
      stopTimer();
      const isBest = setBest(elapsed);
      const bestTxt = getBest();
      bestEl.textContent = bestTxt ? `Best: ${formatTime(bestTxt)}` : '';
      // GA: track solve
      try { if (typeof window.gtag === 'function') { window.gtag('event', 'sudoku_solved', { game: '6x6', seconds: elapsed, personal_best: isBest }); } } catch (e) {}
      alert(`Great job! Solved in ${formatTime(elapsed)}${isBest ? ' — Personal best! 🎉' : ''}`);
    } else {
      alert('Not solved yet — keep going!');
    }
  }

  function giveHint() {
    // fill the selected cell with the solution value
    const { r, c } = selected;
    if (r < 0 || c < 0) return;
    const el = cellAt(r, c);
    if (!el || !el.classList.contains('editable')) return;
    const val = solution[r][c];
    history.push({ r, c, prev: puzzle[r][c], val });
    puzzle[r][c] = val;
    el.textContent = String(val);
    el.classList.remove('notes');
    startTimerIfNeeded();
    clearConflictHighlights();
    checkAndAnimateSubgrid(r, c);
  }

  // When a 2x3 subgrid is completely and correctly filled, animate it
  function checkAndAnimateSubgrid(r, c, allowEmpty = false) {
    const rs = Math.floor(r / SUB_R) * SUB_R;
    const cs = Math.floor(c / SUB_C) * SUB_C;
    let allFilled = true;
    let allCorrect = true;
    const cells = [];
    for (let rr = rs; rr < rs + SUB_R; rr++) {
      for (let cc = cs; cc < cs + SUB_C; cc++) {
        cells.push(cellAt(rr, cc));
        const v = puzzle[rr][cc];
        if (v === 0) allFilled = false;
        if (v !== solution[rr][cc]) allCorrect = false;
      }
    }
    if (allFilled && allCorrect) {
      cells.forEach(el => { if (el) el.classList.add('sdk-finish-pop'); });
      // remove after animation
      setTimeout(() => cells.forEach(el => { if (el) el.classList.remove('sdk-finish-pop'); }), 600);
    }
  }

  function setupKeypad() {
    keypadEl.innerHTML = '';
    const mkBtn = (label, cls, onClick) => {
      const b = document.createElement('button');
      b.textContent = label;
      b.className = `sdk-btn ${cls || ''}`;
      b.addEventListener('click', onClick);
      return b;
    };

    for (let n = 1; n <= SIZE; n++) {
      keypadEl.appendChild(mkBtn(String(n), '', () => placeNumber(n)));
    }

    eraseBtn = mkBtn('Erase', 'secondary', eraseCell);
    undoBtn = mkBtn('Undo', 'secondary', undo);
    notesToggleBtn = mkBtn('Notes OFF', 'secondary', () => {
      notesMode = !notesMode;
      notesToggleBtn.textContent = notesMode ? 'Notes ON' : 'Notes OFF';
    });
    hintBtn = mkBtn('Hint', 'secondary', giveHint);

    keypadEl.appendChild(eraseBtn);
    keypadEl.appendChild(undoBtn);
    keypadEl.appendChild(notesToggleBtn);
    keypadEl.appendChild(hintBtn);
  }

  function refreshBest() {
    const best = getBest();
    bestEl.textContent = best != null ? `Best: ${formatTime(best)}` : '';
  }

  function newGame() {
    stopTimer();
    startTime = null;
    timerEl.textContent = '⏱ 0:00';
    history = [];
    const editable = generatePuzzle();
    drawGrid(editable);
    refreshBest();
    // GA: track new game
    try { if (typeof window.gtag === 'function') { window.gtag('event', 'sudoku_new_game', { game: '6x6' }); } } catch (e) {}
  }

  function handleKeyboard(e) {
    if (e.key >= '1' && e.key <= String(SIZE)) {
      placeNumber(parseInt(e.key, 10));
    } else if (e.key === 'Backspace' || e.key === 'Delete') {
      eraseCell();
    } else if (e.key.toLowerCase() === 'n') {
      notesMode = !notesMode;
      if (notesToggleBtn) notesToggleBtn.textContent = notesMode ? 'Notes ON' : 'Notes OFF';
    } else if (e.key.toLowerCase() === 'h') {
      giveHint();
    } else if (e.key.toLowerCase() === 'u') {
      undo();
    } else if (e.key === 'Enter') {
      showResults();
    }
  }

  // Mount
  document.addEventListener('DOMContentLoaded', () => {
    const root = $('#sudoku');
    if (!root) return; // not on this page

    gridEl = $('.sdk-grid', root);
    keypadEl = $('.sdk-keypad', root);
    timerEl = $('.sdk-timer', root);
    bestEl = $('.sdk-best', root);
    resultBtn = $('.sdk-submit', root);

    setupKeypad();
    newGame();

    resultBtn.addEventListener('click', showResults);
    document.addEventListener('keydown', handleKeyboard);

    // Clicking outside grid clears selection
    root.addEventListener('click', (e) => {
      if (e.target.classList.contains('sdk-cell')) return;
      if (e.target.closest('.sdk-cell')) return;
      selected = { r: -1, c: -1 };
      $all('.sdk-cell').forEach(el => el.classList.remove('selected'));
    });

    // New Game button
    const restart = $('.sdk-restart', root);
    if (restart) restart.addEventListener('click', newGame);
  });
})();
