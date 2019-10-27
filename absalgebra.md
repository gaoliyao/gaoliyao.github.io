## Cyclic Groups and Order of Elements in $S_n$
$\textbf{Theorem 10.1 (Foundamental Theorem of Cyclic groups)}$
*1. Every subgroup of a cyclic group G is cyclic.*
*2. If $G=\langle g\rangle$ with $|G|=n$, then the order of any subgroup divides $n$.*
*3. If $G=\langle g\rangle$ with $|G|=n$, then there is a unique subgroup of order $d$ for every $d$ dividing $n$.*

Example: $\mathbb{Z}_4$ has unique cyclic subgroups of orders 1, 2, 4. 

*Proof*: 
Suppose $G=\langle g\rangle$ is cyclic and let $H \subset G$ be a subgroup. 
Then $e\in H$. 
If $H=\{e\}$, then it is clearly cyclic. 
Otherwise, there is a $h\in H$ s.t. $h\neq e$. 

Suppose $h=g^k$, $k\neq 0$. Consider $H_+=\{k\in \mathbb{Z}|g^k\in H for\:some\:k>0\}$. Note that $H_+\neq\emptyset$. 

By Well-Ordering Principle, $H_+$ has a least element say $b$. Then $\langle g^b\rangle \subset H$. 
On the other hand, we can use the division algorithm to see $H \subset \langle g^b\rangle$. 

For the second part, if $G=\langle g\rangle$, then by the first part any subgroup $H=\langle g^k\rangle$ for some $k>0$. Therefore, $|H|=n/gcd(n, k)$. 

$\textbf{Cycle Notation}$
$$\begin{bmatrix}  
1 & 2 & 3 & 4 & 5 & 6 \\  
2 & 4 & 5 & 1 & 6 & 3  
\end{bmatrix}$$
This could be represented by $(124)(356)$ using cycle notation. 

$\textbf{Definition 10.5}$
An $m$-cycle, denoted $(a_1...a_m)$, is a sequence of distinct integers $1\leq a_i \leq n$ with $a\leq i \leq m$. We say m is the length of the cycle. 

We can associate a unique permutation $\alpha \in S_n$ to the cycle $(a_1...a_m)$. We can further define a multiplication of the corresponding permutations. If $\alpha$ abd $\beta$ are two cycles, then we can define a permutation by setting $\alpha\beta$. We first apply $\beta$ and then apply $\alpha$. 

$\textbf{Definition 10.6}$
We say two cycles are disjoint if they have no elements in common. 

$\textbf{Theorem 10.8}$
*1. Every permutation $\alpha \in S_n$ can be written as a cycle or a product of disjoint cycles.*
*2. Let $\alpha,\beta \in S_n$ be two disjoint cycles. Then $\alpha\beta=\beta\alpha$.*
*3. The order of a cycle is its length.*
*4. The order of a permutation written as a product of disjoint cycles is the best common multiple of the length of the cycles.*

*Proof of (4).*
Let $\alpha_1, ..., \alpha_r$ be disjoint cycles, and $m_i=|\alpha_i|$. Let $m=lcm(m_1, ..., m_r)$, and $N=|\alpha_1...\alpha_r|$. 

## More on the Symmetric group (Transpositions)
$\textbf{Definition 11.1}$
A cycle of length 2 is called a transposition. 

$\textbf{Theorem 11.2}$
*Every permutation in $S_n$ for $n>1$ can be written as a product of transpositions.*
*Proof.* 
$(a_1a_2...a_k)=(a_1,a_k)(a_1,a_{k-1})...(a_1,a_2).$

$\textbf{Theorem 11.4}$
*Let $\sigma\in S_n$. Then the number of cycles apperaing in any decomposition of $\sigma$ into a product of transpositions is either even or odd.*

$\textbf{Theorem 11.5}$
*Let $A_n \subset S_n$ denote the subset of even permutations. Then $A_n$ is a subgroup of $S_n$*.

*Proof.*
(1) Identity is even. 
(2) If $\beta$ is a transposition, then $\beta^{-1}=\beta$. 
It follows that the inverse of an even permutation is also even. 
(3) Product of even permutations is also even. 

$\textbf{Presentations of Groups}$
There is an abstract method of constructing groups. We specify a set $K$ which we call 'generators'. We associate $K$ to another set, denoted $K^{-1}$. The elements of $K^{-1}$ are symbols $k^{-1}$ for every $k^{-1}\in K$. Note that these aren't inverses of elements of $K$, since there is no group (yet). But, the notation is supposed to be suggestive. We are on our way to constructing a group $G$ containing $K\bigcup K^{-1}$ and the inverse of k will be $k^{-1}$. Given a set $K$, we can define words in $K$.

$\textbf{Definition 11.6}$
A word in $K$ is an expression of the form $a_1...a_n$ where each $a_i\in K$. We will denote the empty word by $e$. 

## Group homomorphisms
$\textbf{Definition 12.1}$
Let $G$ and $H$ be groups. Let $e_G \in G$ and $e_h \in H$ denote the identity elements. 
1. A homomorphism from $G$ to $H$ is a function $f:G\rightarrow H$ such that: 
(a) $f(e_G)=e_H$. 
(b) For all $g, g'\in G$, $f(gg')=f(g)f(g')$.
2. An isomorphism from $G$ to $H$ is a homomorphism which is bijective. 

These notes are adapted version of Prof. Deepam Patel's lecture on MA 45300, Abstract Algebra. 
[https://www.math.purdue.edu/~patel471/lectures.pdf](https://www.math.purdue.edu/~patel471/lectures.pdf)
> Written with [StackEdit](https://stackedit.io/).
