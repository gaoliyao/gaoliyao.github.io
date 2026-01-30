# Academic Personal Website Template

A clean, responsive academic personal website template built with HTML and CSS. Perfect for researchers, PhD students, and academics who want a professional online presence.

## Features

- **Clean Academic Design**: Professional layout with serif fonts for headings and clean typography
- **Responsive**: Works on desktop, tablet, and mobile devices
- **Easy to Customize**: Simple HTML structure with CSS variables for theming
- **Multiple Pages**: Home, Publications, Notes, and Research pages included
- **News Section**: Highlight recent achievements with optional "New" badges
- **Publication List**: Showcase your papers with images and links
- **Social Links**: GitHub, Google Scholar, and more

## Quick Start

### 1. Fork or Clone

```bash
git clone https://github.com/gaoliyao/gaoliyao.github.io.git
cd gaoliyao.github.io
```

Or click "Fork" on GitHub to create your own copy.

### 2. Rename Repository

For GitHub Pages, rename your repository to `yourusername.github.io`

### 3. Customize Your Information

Edit `index.html`:

```html
<!-- Change your name -->
<title>Your Name</title>
...
<h1>Your Name</h1>

<!-- Update your photo (place image in imgs/ folder) -->
<img src="imgs/YourPhoto.jpeg" alt="photo" width="175px" height="210px" class="profile-image" />

<!-- Update your affiliation -->
<p>Ph.D. student<br />
Your Department<br />
Your University</p>

<!-- Update social links -->
<div class="social-links">
    <a href="https://github.com/yourusername" target="_blank">GitHub</a>
    <a href="https://scholar.google.com/citations?user=XXXXX" target="_blank">Google Scholar</a>
</div>
```

### 4. Update Content

- **About Me**: Edit the paragraph in `index.html`
- **News**: Add/remove items in the `.news-section` div
- **Publications**: Edit `publication.html` and the selected publications in `index.html`
- **Notes**: Edit `notes.html` with your course notes or resources
- **Research**: Edit `research.html` with your research interests

### 5. Deploy

Push to GitHub and enable GitHub Pages in repository settings:
1. Go to Settings > Pages
2. Select "Deploy from a branch"
3. Choose `main` (or `master`) branch
4. Your site will be live at `https://yourusername.github.io`

## File Structure

```
├── index.html          # Home page
├── publication.html    # Full publication list
├── notes.html          # Course notes and resources
├── research.html       # Research interests
├── styles.css          # Main stylesheet (customize colors here)
├── jemdoc.css          # Base layout styles
├── imgs/               # Images folder
│   ├── YourPhoto.jpeg
│   └── paper_figures/
└── README.md
```

## Customization

### Colors

Edit CSS variables in `styles.css`:

```css
:root {
    --color-primary: #1a365d;       /* Deep navy - headings, links */
    --color-secondary: #744210;     /* Warm brown - badges */
    --color-text: #2d3748;          /* Main text color */
    --color-text-light: #4a5568;    /* Secondary text */
    --color-border: #e2e8f0;        /* Borders */
    --color-bg: #fffffe;            /* Content background */
    --color-bg-subtle: #f7f6f3;     /* Page background */
    --color-accent: #8b5a2b;        /* Hover accent */
}
```

### Adding a News Item

```html
<div class="news-item">
    <span class="news-date">[Month Year]</span>
    Your news text here! <a href="https://link.com">[Link]</a>
    <span class="badge">New</span>  <!-- Optional: remove for older items -->
</div>
```

### Adding a Publication

In `publication.html`:
```html
<li class="publication-item">
    <a href="https://paper-link.com">Paper Title</a>
    <span class="badge">Featured</span>  <!-- Optional -->
    <div class="publication-authors">Author 1, Author 2, Author 3.</div>
    <div class="publication-venue">Conference/Journal Name</div>
</li>
```

With image (in `index.html` selected publications):
```html
<div class="publication-item">
    <table class="imgtable"><tr><td>
    <img src="imgs/paper_figure.png" alt="description" width="444px" height="200px" />&nbsp;</td>
    <td align="left"><p><a href="https://paper-link.com">Paper Title</a><br />
    Author 1, Author 2, Author 3. <br />
    Journal/Conference Name.</p>
    </td></tr></table>
</div>
```

### Adding Navigation Pages

1. Create a new HTML file (e.g., `teaching.html`)
2. Copy the structure from an existing page
3. Add menu item to all pages:
```html
<div class="menu-item"><a href="teaching.html">Teaching</a></div>
```

## Google Analytics (Optional)

Replace the Google Analytics ID in `index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID"></script>
```

Or remove the entire Google Analytics script block if not needed.

## License

Feel free to use this template for your personal academic website. Attribution appreciated but not required.

## Credits

Based on the [jemdoc](http://jemdoc.jaboc.net/) template style with modern CSS enhancements.
