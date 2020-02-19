{% include lib/mathjax.html %}

{% include head.html %}

### Proof of Markov Inequality
*Assume that $x$ is a non-negative scalar random variable, $i.e., x\geq0$*. Fix some $a>0$. We have: 

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



> Written with [StackEdit](https://stackedit.io/).
