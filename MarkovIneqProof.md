{% include lib/mathjax.html %}

{% include head.html %}

### Proof of Markov Inequality
**Theorem 1.1** *Assume that $x$ is a non-negative scalar random variable, $i.e., x\geq0$. Fix some $a>0$. We have:* 
$$P[x\geq a]\leq \frac{1}{a}E[x]$$

*Proof*: 
$$E[x]=\int_{0}^{\infty} xp(x)dx=\int_{0}^{a} xp(x)dx+\int_{a}^{\infty} xp(x)dx$$
$$\geq \int_{a}^{\infty} xp(x)dx\geq \int_{a}^{\infty} ap(x)dx=a\int_{a}^{\infty} p(x)dx=aP[x\geq a]$$
End of proof. 

We could obtain Chebyshev's Inequality immediately after using the result of Markov Inequality **Thm 1.1**. 

**Corollary 1.1** *Assume that $x$ is a scalar random variable, $i.e., x\in X$*. Fix some $a>0$. We have: 

$$P[|x-E[x]|\geq a]\leq \frac{1}{a^2}Var[x]$$

*Proof*: 

$$P[|x-E[x]|\geq a]=P[[x-E[x]]^2\geq a^2|]\leq \frac{1}{a^2}E[[x-E[x]]^2]$$

Therefore, 
$$P[|x-E[x]|\geq a] \leq \frac{1}{a^2}Var(x)$$

### Concentration Inequalities for the Mean of Gaussian variables
**Theorem 1.2** *Assume that $x$ and $y$ are two independent random variables on $X$ and $Y$ respectively. Assume that $f:X\rightarrow R$ and $g:Y\rightarrow R$ are two arbitrary functions. We have that:*

$$E[f(x)g(y)]=E[f(x)]E[g(y)]$$

*Proof:*
$$E[f(x)g(y)]=\int_{x\in X, y\in Y} f(x)g(y)p_{xy}(x,y)dxdy$$

$$=\int_{x\in X, y\in Y} f(x)g(y)p_{x}(x)g_{y}(y)dxdy$$

$$=\int_{x\in X} f(x)p_{x}(x)dx\int_{y\in Y} g(y)p_{y}(y)dy$$

$$=E[f(x)]E[g(y)]$$

**Corollary 1.2** *Assume that $x_1...x_n$ are $n$ independent standard Gaussian random variables (with zero mean and unit variance). Fix $\epsilon >0$, we have that:*

$$P[\frac{1}{n}\sum_{i=1}^{n}x_i\geq\epsilon]\leq e^{-n\epsilon^2/2}$$

*Proof:*
Pick an arbitrary $t>0$. 

$$P[\frac{1}{n}\sum_{i=1}^{n}x_i\geq\epsilon]=P[\sum_{i=1}^{n}x_i\geq n\epsilon]=P[e^{t\sum_{i=1}^{n}x_i}\geq e^{tn\epsilon}]$$

$$\leq \frac{1}{e^{tn\epsilon}} E[e^{t\sum_{i=1}^{n}x_i}]=\frac{1}{e^{tn\epsilon}} E[\prod_{i=1}^{n}e^{tx_i}]=\frac{1}{e^{tn\epsilon}} \prod_{i=1}^{n}E[e^{tx_i}]$$

Since these are the same gaussian random variable, applying gaussian distribution that $f(x)=\frac{1}{\sqrt{2\pi}}e^{-x^2/2}$: 

$$=\frac{1}{e^{tn\epsilon}} (E[e^{tx_i}])^n=\frac{1}{e^{tn\epsilon}}(\int_{-\infty}^{\infty} e^{tx}\frac{1}{\sqrt{2\pi}}e^{-x^2/2}dx)^n$$

$$=\frac{1}{e^{tn\epsilon}} (e^{t^2/2})^n=e^{\frac{nt^2}{2}-tn\epsilon}$$

Combining all results from previous analysis, we have: 

$$P[\frac{1}{n}\sum_{i=1}^{n}x_i\geq\epsilon]\leq min\;(e^{\frac{nt^2}{2}-tn\epsilon})=e^{-n\epsilon^2/2}$$

For arbitrary random variable $x$, the moment generating function is defined as $E[e^{tx}], \forall t \in R$. 

**Theorem 1.3** *Assume that $A$ and $B$ are two  events based on a random variables on $x$. We have that:*

$$P[A(x)\;or\;B(x)]\leq P[A(x)] +P[B(x)]$$



> Written with [StackEdit](https://stackedit.io/).
