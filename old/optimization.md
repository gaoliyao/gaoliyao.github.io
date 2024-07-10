
{% include lib/mathjax.html %}

{% include head.html %}

### Gradient Descent
$$\theta^{n+1}=\theta^{n}-\eta\nabla L(\theta^n)$$

### Gradient Descent with Momentum (SGDM)
Set $v^0=0$, 
$$\theta^{n+1}=\theta^{n}+\lambda v^n-\eta\nabla L(\theta^n)$$

