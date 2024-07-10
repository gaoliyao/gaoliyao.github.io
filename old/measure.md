
{% include lib/mathjax.html %}

{% include head.html %}

### Basics of sets and sigma-algebra

##### Recall the definition of $\sigma(\mathcal{C})$, we have: 

$$\sigma(\mathcal{C})=\cap\{\mathcal{F}_\alpha: \mathcal{F}_\alpha \text{is a } \sigma \text{-field of subsets of }  \Omega \text{ for which } \mathcal{C}\in \mathcal{F}_\alpha\}$$

##### Recall the definition of a field, a collection $\mathcal{A}$ is a field if it is closed under complements and unions. 

##### Recall the definition of a $\sigma$-field, for a set $X$, a $\sigma$-field $\mathcal{A}$ is a nonempty collection of subsets such that the following hold: 

- $X \in \mathcal{A}$
-  If $A\in \mathcal{A}$, then $A^c\in \mathcal{A}$. 
- If $A_n$ is a sequence of elements in $\mathcal{A}$, then $\cup_1^\infty A_i\in \mathcal{A}$. 

##### Recall again for the definition of monotone class: 

$\mathcal{A}$ is called a monotone class provided it contains $\cup_1^\infty A_i$ for all increasing sequence $A_n$ in $\mathcal{A}$ and contains $\cap_1^\infty B_n$ for all decreasing sequences $B_n$ in $\mathcal{A}$. 

##### Introducing lemma: 

**A collection $\mathcal{A}$ of subsets of  is a $\sigma$-field if and only if it is both a field and a monotone class.**

*Proof:*

($\Rightarrow$)

Check for property 1, $X\in \mathcal{A}$ since $\mathcal{A}$ is a $\sigma$-field. 

Check for property 2, $A^c \in \mathcal{A}$ since $\mathcal{A}$ is a $\sigma$-field. 

Check for property 3, $\cup_1^kA_i \subseteq \cup_1^\infty A_i \in \mathcal{A}$. Therefore, $\cup_1^kA_i \in \mathcal{A}$. 

($\Rightarrow$) has been proved by definition. 

($\Leftarrow$)

Check for property 1, $X\in \mathcal{A}$ since $\mathcal{A}$ is a field. 

Check for property 2, $A^c\in \mathcal{A}$ since $\mathcal{A}$ is a field. 

Check for property 3. $\cup_1^kA_i\in \mathcal{A}$ since $\mathcal{A}$ is a field. Further, since $\mathcal{A}$ is a monotone class: 

$$\cup_1^\infty A_i = \cup_1^\infty (\cup_1^k A_i) \equiv \cup_1^\infty B_j$$. 

Since $B_j$ is an increasing sequence, $\cup_1^\infty B_j \in \mathcal{A}$. 

 ($\Leftarrow$) has been proved. 

**Exercise 1.1 (Generators)**

Let $\mathcal{C}_1$ and $\mathcal{C}_2$ denote two collections of subsets of the
set $\Omega$. If $\mathcal{C}_2 \subset \sigma(\mathcal{C}_1)$ and $\mathcal{C}_1 \subset \sigma(\mathcal{C}_2)$, then $\sigma(\mathcal{C}_1)=\sigma(\mathcal{C}_2)$. Prove this fact. 

*Proof:*

Since $\mathcal{C}_2 \subset \sigma(\mathcal{C}_1)$, we can know $\sigma(\mathcal{C_2})\subseteq \sigma(\mathcal{C_1})$. 

On the other hand, since $\mathcal{C}_1 \subset \sigma(\mathcal{C}_2)$, we can also understand $\sigma(\mathcal{C_1})\subseteq \sigma(\mathcal{C_2})$. 

We can know $\sigma(\mathcal{C_2}) = \sigma(\mathcal{C_1})$. 





**Exercise 1.2**
- Now $\mu(\liminf A_n)\leq \liminf \mu(A_n)$
- Also, $\liminf \mu(A_n)\leq \mu(\liminf A_n)$ holds if $\mu(\Omega) < \infty$. 

(a)

Recall the definition of $\liminf A_n$, 

 $$\liminf A_n \equiv \cup_{n=1}^{\infty} \cap_{k=n}^{\infty} A_k$$


Let $B_n\equiv \cap_{k=n}^{\infty}A_k$. We know that $B_n \subseteq A_n$. 

If $A_n$ is an increasing sequence, we could know that $B_n$ is also an increasing sequence. 

$$\mu(\liminf A_n) = \mu(\cup_{n=1}^{\infty} B_n)=\lim_{n\rightarrow \infty} \mu(B_n)$$

For $\mu(B_n)$, 

$$ \mu(B_n) \leq \inf_{N\geq n}\mu(A_N)$$

Combining (2) and (3), we will get

$$\mu(\liminf A_n) = \lim_{n\rightarrow \infty} \mu(B_n) \leq \lim_{n} \inf_{N\geq n} \mu(A_N) = \liminf \mu(A_n)$$

