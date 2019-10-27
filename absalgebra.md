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
There is an abstract method of constructing groups. We specify a set $K$ which we call 'generators'. We associate $K$ to another set, denoted $K^{-1}$. The elements of $K^{-1}$ are symbols $k^{-1}$ for every $k^{-1}\in K$. Note that these aren't inverses of elements of $K$, since there is no group (yet). But, the notation is supposed to be suggestive. We are on our way to constructing a group $G$ containing $K\cup K^{-1}$ and the inverse of k will be $k^{-1}$. Given a set $K$, we can define words in $K$.

$\textbf{Definition 11.6}$
A word in $K$ is an expression of the form $a_1...a_n$ where each $a_i\in K$. We will denote the empty word by $e$. 

## Group homomorphisms
$\textbf{Definition 12.1}$
Let $G$ and $H$ be groups. Let $e_G \in G$ and $e_h \in H$ denote the identity elements. 
1. A homomorphism from $G$ to $H$ is a function $f:G\rightarrow H$ such that: 
(a) $f(e_G)=e_H$. 
(b) For all $g, g'\in G$, $f(gg')=f(g)f(g')$.
2. An isomorphism from $G$ to $H$ is a homomorphism which is bijective. 

$\textbf{Lemma 12.2}$
*If $f:G\rightarrow H$ is an isomorphism, then so is $f^{-1}$*.

<!--- *Proof.*
First, note that $f_n(0)=0$.
Now, let $r,s\in \mathbb{Z}$. 
Then $f(r+s)$ is the remainder of $r+s$ when you divide by n. 
On the other hand, how do we compute $f(r)+f(s)$. 
1. We write$r=qn+r_1$, and $s=q'n+s_1$. $f(r)=r_1$, and $f(s)=s_1$. 
2. Now, we compute the sum by writing $r_1+s_1=q''n+t$. 

We have to show that $t=f(r+s)$.
To compute $f(r+s)$, we write $r+s=hn+t'$.  
--->
$\textbf{Theorem 12.4}$
*1. Any infinite cyclic group $G$ is isomorphic to $(\mathbb{Z}, +, 0)$*.
*2. Any finite cyclic group $G$ is isomorphic to $(\mathbb{Z_n}, +, 0)$*.

$\textbf{Lemma 12.5}$
*Let $f_n:\mathbb{Z}\rightarrow \mathbb{Z_n}$ denote the function which sends $k$ to the remainder of $k$ when you divide by $n$. Then $f_n$ is a homomorphism*.

*Proof of 12.4.1*
1. Since $G$ is cyclic, $G=\langle g \rangle$ for some $g \in G$. 
Then we can define a map $f:G\rightarrow \mathbb{Z}$ by $f(g^n)=n$.
(i) we need to show $f$ is well-defined. 
Suppose $g^n=g^m$. Then we need to show $f(g^n)=f(g^m)\Rightarrow n=m$.
But we saw that if $G$ is infinite, then the order of $g$ is infinite, and in this case, $g^n=g^m \iff n=m$.
(ii) we need to show that this is a homomorphism. 
Since $g^0=e$, we see that $f(e)=0 \Rightarrow f(e)=e$.
Let $a, b\in G$. Then there are integers $n$ and $m$ such that $a=g^n$, $b=g^m$. It follows that $f(ab)=f(g^mg^m)=f(g^{n+m})=m+n=f(a)+f(b)$. 
(iii) we need to show that $f$ is bijective. It is easy to obtain $f(g^n)=n\in \mathbb{Z}$. Also, if $f(g^m)=n$, since this is an infinite sequence, we must have $m=n$. Therefore, $f$ is bijective. 
Based on the points above, we can prove 1. 

$\textbf{Propsition 12.8}$
*Let $G\rightarrow H$ be a homomorphism of groups.*
*1. For any $g\in G$, if $|g|=n$, then $|f(g)|$ divides $n$.*
*2. If $f$ is an isomorphism, then $|g|=|f(g)|.$*
*3. If $f$ is an isomorphism, and $K\subset G$ is a subgroup, then $f(K)$ is a subgroup. Here, $f(K):=\{f(k)|k\in K\}$.*

## Equivalence relations and cosets
Question to consider: 
Let $G$ be a finite group, and $g\in G$. Does the order of $g$ divide the order of $G$? 

$\textbf{Definition 13.1}$
Let $K$ be a set. An equivalence relation on $K$ is a subset $R\subset K\times K$ such that: 

1. (Reflexive) For all $k\in K$, $(k,k)\in R$.
2. (Symmetric) If $(k,l)\in R$, then $(l,k) \in R$.
3. (Transitive) If $(k,l), (l,m)\in R$, then $(k,m)\in R$.

If $a \in K$, then the equivariance class of $a$m denoted $[a]$, is the following set: 
$$[a]:=\{k\in K|(k,a)\in R\}$$

$\textbf{Lemma 13.2}$
*Let $R$ be an equivalence relation on a set $K$.*
1. *If $a \sim b$, then $a=b$. Otherwise, $[a]\cap [b]$*
2. *$K$ is the disjoint union of its equvalences classes.*
3. *If $K$ is finite, then the number of distinct equivalence classes is finite.*

*Proof.*
(1) 
Suppose $a\sim b$. Then by definition $(b,a)\in R$, and therefore $(a,b)\in R$. 
If $c\in [a]$, then $(c,a)\in R$. It follows, by transitivity, $(c,b)\in R$. Therefore, $c\in [b]$ and it follows that $[a]\subset [b]$.
Similarly, $[b]\subset [a]$. 
Therefore, $[a]=[b]$.
On the other hand, if $c\in [a]\cap [b]$, then $(c,a),(c,b)\in R$. This implies that $(b,a)\in R$ and therefore $a\sim b$. In particular, either $[a]=[b]$ or $[a]\cap [b]=\emptyset$. 

$\textbf{Definition 13.4}$
Let $H\subset G$ denote a subset of $G$ and $a\in G$. 
1. We define $aH:=\{g\in G|g=ah for some h \in H\}$.
2. We define $Ha:=\{g\in G|g=ha for some h \in H\}$.

When $H$ is a subgroup, we say that $aH$ is the left coset of $H$ in $G$ containing $a$. Note that in this case $a\in aH$. We say that $a$ is a coset representative of $aH$. Similar remarks apply to $Ha$. In that case, we say that $Ha$ is the right coset of $H$ in $G$ containing a. The following Lemma shows that this notion gives rise to an equivalence relation on $G$. 

$\textbf{Proposition 13.5}$
*Let $H\subset G$ denote a subgroup.*
1. We say that $a$ is right equivalent to $b$, denoted $a\equiv_r b$, if $ab^{-1}\in H$. Then $\equiv_r$ is an equivalence relation on $G$. The equivalence class of $a$ is precisely the set $Ha$. 
2. We say that $a$ is left equivalent to $b$, denoted $a\equiv_l b$, if $b^{-1}a\in H$. Then $\equiv_l$ is an equivalence relation on $G$. The equivalence class of $a$ is precisely the set $aH$. 

## Lagrange’s Theorem and applications
$\textbf{Collary 14.1}$





These notes are adapted version of Prof. Deepam Patel's lecture on MA 45300, Abstract Algebra. 
[https://www.math.purdue.edu/~patel471/lectures.pdf](https://www.math.purdue.edu/~patel471/lectures.pdf)
> Written with [StackEdit](https://stackedit.io/).
