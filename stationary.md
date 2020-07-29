{% include lib/mathjax.html %}

{% include head.html %}


# Stationarity
### Strictly and weakly stationary
*Definition. 1* $X_t$ is strictly stationary if
$$(X_{t_1+h}, ..., X_{t_n+h})\stackrel{d}{=} (X_{t_1}, ..., X_{t_n})$$


*Definition. 2* $X_t$ is weakly stationary if

1. $m(t)=\mathbb{E}[X_t]=constant$. 
2. $\forall (t, s)\in \mathbb{R}^2_+, k(t, s)=cov(X_t, X_s)=k(t+h, s+h), \forall h>0$. 
3. $\gamma: \mathbb{R} \rightarrow \mathbb{R}: k(t, s)=\gamma(t-s)$. 

To discuss some properties of $\gamma(\cdot)$, 

1. $\gamma(0)\geq 0$.
2. $\vert\gamma(t)\vert\leq\gamma(0)$
3. $\gamma$ is even. 

$Remark$
- $X_t$ is strictly stationary $\Rightarrow X_t$ is weakly stationary
- $X_t$ is Gaussian process then $X_t$ is strictly stationary $\iff X_t$ is weakly stationary.

 ### Spetral density
 *Theorem 1* $\Phi(u)$ is a characteristic function iff
 1. $\Phi(u)$ is continuous.
 2. $\Phi(u)$ is positive semi-definite.  
 3. $\Phi(0)=1$.

Given $X_t$ is weakly stationary, $\gamma:k(t,s)=\gamma(t-s)$. 

If $\gamma$ is continuous and $\int \vert\gamma(u)\vert du<\infty$, 


$\exists  g(x): \gamma(u)=\int e^{iux}g(x)dx=\mathcal{F}[g](u)$. 


Spectral density: $g(x)=\frac{1}{2\pi}\int e^{-iux}\gamma(u)du$

Or in discrete form: $g(x)=\frac{1}{2\pi}\sum_{h=-\infty}^{+\infty}e^{ihx}\gamma(h)$. 

*Proposition*: A real-valued function $g(x)$ is a spectral density on $(-\pi, \pi)$ of a stochastic process $X_t$ iff
1. $g(x)\geq 0$.
2. $g(x)$ is even.
3. $\int_{-\pi}^\pi g(x)dx<\infty$.

### Stochastic integration of simple type
Define stochastic integration as, 
$$\int_a^b X_tdt=\lim_{max\vert t_i-t_{i-1}\vert\to 0} \sum_{k=1}^{n} X_{t_{k-1}}(t_k-t_{k-1}).$$

In $L_2$ sense, 
$$\mathbb{E}(\sum-\int_a^bX_tdt)^2=0.$$

*Theorem 1* If the following three properties holds for $X_t$:
1. $\mathbb{E}[X_t]^2<\infty$, 
2. $m(t)$ is continuous, 
3. $k(t, s)$ is continuous, 

then $\exists \int_a^bX_tdt$.

*Proposition* $k(t, s)$ is continuous $\forall (t_0, s_0) \iff k(t,s)$ is continuous of the diagonal $\forall (t_0, t_0)$.

*Proposition* 
1. $k(t,s)$ is continuous $(t_0, t_0)$ then $X_t$ is continuous at $t_0$, $\mathbb{E}[X_t-X_{t_0}]\longrightarrow 0, t\to t_0$.
2. $X_t$ is continuous in $t_0, s_0 \Rightarrow$ $k(t_0, s_0)$ is continuous.

Following properties are important: 
3. (From Fubini theorem) $\mathbb{E}\int X_tdt=\int\mathbb{E}[X_t]dt.$
4. $\mathbb{E}[(\int X_tdt)^2]=\int\int\mathbb{E}[X_tX_s]dtds.$
5. $Var[\int X_tdt]=\int_a^b\int_a^bk(t, s)dtds=2\int_a^b\int_a^sk(t, s)dtds$

### Moving average filters
Filter is a kind of function s.t. $X_t\to Y_t$. 

In discrete time: 
$$Y_t=a_0X_t+a_1X_{t-1}+...+a_nX_{t-n}.$$

In continuous time:
$$Y_t=\int_\mathbb{R} e^{-\beta(t-s)}X_sds.$$

There are two important properties: 
1. Linearity. $c_1X_{t_1}^1+c_2X_{t_2}^2\to c_1Y_{t_1}^1+c_2Y_{t_2}$
2. Time-invarient. $[X_t\to Y_t]\Rightarrow[X_{t+h}\to Y_{t+h}]$.

In other form: 
Continuous: 
$$Y_t=\int_\mathbb{R}\rho(s)X_{t-s}ds.$$
Discrete: 
$$Y_t=\sum_{h=-\infty}^{+\infty}\rho(h)X_{t-h}.$$

*Theorem* Let $X_t$ be a weakly stationary process, 
$\mathbb{E}X_t=0$, $g_x$, $Y_t=\int_{\mathbb{R}}\rho(s)X_{t-s}ds$.

Then, 
1. $Y_t$ is weakly stationary process.
2. $g_Y(x)=g_X(x)\cdot \vert\mathcal{F}[\rho](x)\vert^2$.

*Proof*:

1. 
$$\mathbb{E}[Y_t]=\int_{\mathbb{R}}\rho(s)\mathbb{E}[X_{t-s}]ds=0.$$

$$k_Y(t_1, t_2)=\mathbb{E}[\int_{\mathbb{R}}\rho(s_1)X_{t_1-s_1}]ds_1 \cdot \int_{\mathbb{R}}\rho(s_2)X_{t_2-s_2}]ds_2$$

$$=\int_{\mathbb{R}}\int_{\mathbb{R}} \rho(s_1)\rho(s_2)\mathbb{E}[X_{t_1-s_1},X_{t_2-s_2}]ds_1ds_2$$

$$=\int_{\mathbb{R}}\int_{\mathbb{R}} \rho(s_1)\rho(s_2)\gamma[t_2-t_1-(s_2-s_1)]ds_1ds_2$$

$$\gamma_Y(x)=\int_{\mathbb{R}}\int_{\mathbb{R}} \rho(s_1)\rho(s_2) \gamma[x-(s_2-s_1)]ds_2ds_1$$

We can make a conclusion that this is weakly stationary process. 

2.

$$\gamma_Y(x)=\int_{\mathbb{R}}\rho(s_1)\cdot \int_{\mathbb{R}}\gamma_X[x+s_1-s_2]\cdot \rho(s_2)ds_2 ds_1$$

$$=\int_{\mathbb{R}}[\gamma_X \star \rho](x+s_1) \cdot \rho(s_1)ds_1$$

$$= \int_{\mathbb{R}}[\gamma_X \star \rho](x-s_1)\rho^o(s_1)ds_1$$

$$=\gamma_X\star\rho\star\rho^o$$

$$\frac{1}{2\pi}\mathcal{F}[\gamma_Y](-x)=\frac{1}{2\pi}\mathcal{F}[\gamma_X](-x)\cdot \mathcal{F}[\rho](-x)\cdot \mathcal{F}[\rho^o](-x)$$

Therefore, $g_Y(x)=g_X(x)\vert\mathcal{F}[\rho](x)\vert^2$.

#### Estimate parameter for moving average process

$Z_n=X_n-aX_{n-1}-bX_{n-2}$ is weakly stationary. 

$$g_Z(x)=g_X(x)\cdot\vert\mathcal{F}[\rho](x)\vert^2$$

$$\rho(x)=\mathbf{1}\{x=0\}-a_1\mathbf{1}\{x=1\}-a_2\mathbf{1}\{x=2\}$$

$$\mathcal{F}_\rho(x)=1-a_1e^{ix}-a_2e^{2ix}$$

$$VarZ_n=k_Z(n,n)=\gamma_z(0)=\int_\mathbb{R}e^{i\cdot 0\cdot x}g_Z(x)dx$$

$$=\int_{\mathbb{R}}g_X(x)\vert\mathcal{F}[\rho](x)\vert^2dx$$
> Written with [StackEdit](https://stackedit.io/).
