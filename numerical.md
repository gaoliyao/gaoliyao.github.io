{% include lib/mathjax.html %}

{% include head.html %}

## Interpolation
#### Vandermonde Form
$$\begin{bmatrix}
1 \;x_0\; ...\; x_0^n \\
1 \;x_1\; ...\; x_1^n \\
1 \;x_n\; ...\; x_n^n\end{bmatrix} \begin{bmatrix} c_0\\ c_1\\ c_2\\ \vdots\\ c_n \end{bmatrix}=\begin{bmatrix} b_0\\ b_1\\ b_2\\ \vdots\\ b_n \end{bmatrix}$$

#### Lagrange Form
##### Standard
$$\varphi_i(x)=\prod_{j\neq i}\frac{x-x_j}{x_i-x_j}$$
$$p(x)=\sum_{i=0}^{n}y_i\varphi_i(x)$$
##### Barycentric
$$p(x)=\varphi(x)\sum_{i=0}^{n}\frac{w_i}{x-x_i}y_i,$$where the barycentric weights $w_i$ are $$w_i=\frac{1}{\prod_{j\neq i}(x_i-x_j)}$$

#### Newton Form
$$p(x)=a_0+a_1(x-x_0)+a_2(x-x_0)(x-x_1)+...+a_n\prod_{j=0}^{n-1}(x-x_j)$$
Example: 
$$\begin{bmatrix}
1 \;0\; 0 \\
1 \;1\; 0\\
1 \;2\;2\end{bmatrix} \begin{bmatrix} a_0\\ a_1\\ a_2\end{bmatrix}=\begin{bmatrix} 2\\ 3\\ 6\\ \end{bmatrix}$$
Solve this system, we would have: 
$$\begin{bmatrix} a_0\\ a_1\\ a_2\end{bmatrix}=\begin{bmatrix} 2\\ 1\\ 1\\ \end{bmatrix}$$
$$p(x)=x^2-2x+3$$

##### Use divided difference to reduce the cost of computation

Use a recursive idea to solve the problem. 
$$f[x_0, x_1, ..., x_k]=\frac{f[x_1, ..., x_k]-f[x_0, ..., x_{k-1}]}{x_k-x_0}$$

$$\begin{bmatrix}
f[x_0] \qquad 0 \qquad 0 \qquad 0\\
f[x_1] \qquad f[x_0, x_1]\qquad 0 \qquad 0\\
f[x_2] \qquad f[x_1, x_2]\qquad f[x_0, x_1,x_2]\qquad 0\\
f[x_3] \qquad f[x_2, x_3]\qquad f[x_1, x_2,x_3]\qquad f[x_0,x_1, x_2,x_3]\end{bmatrix}$$

#### Error Analysis
$$f(x)-p(x)=\frac{1}{(n+1)!}f^{(n+1)}(\xi_x)\prod_{j=0}^{n}(x-x_j)$$
Example: 
Let $f(x)=sin(x)$, and let $p_1(x)$ be the first-degree polynomial that interpolates $f$ at $0$ and $\frac{\pi}{2}$. Then $p_1(x)=\frac{\pi}{2}x$. 

$$|f(x)-p(x)|\leq \frac{1}{2}|(x(x-\frac{\pi}{2}))|$$
$$|f(x)-p(x)|\leq \frac{1}{2}(\frac{\pi}{4})^2$$

#### Chebyshev Interpolation
Smartly selecting points to perform interpolation could guarantee a low error. 
$$x_j=cos(\frac{\pi j}{n}),\qquad j=0, ..., n$$
#### 

#### Piecewise Interpolation
It is straight-forward to consider piecewise functions in function approximation. 

##### Piecewise cubic hermite interpolation
$$p'(x)=f'(x_{i-1})\frac{x-x_i}{x_{i-1}-x_i}+f'(x_i)\frac{x-x_{i-1}}{x_i-x_{i-1}}+\alpha (x-x_{i-1})(x-x_i)$$

$$p(x)=-\frac{f'(x_{i-1})}{h}(\frac{(x-x_i)^2}{2}-\frac{h^2}{2})+\frac{f'(x_i)}{h}\frac{(x-x_{i-1})^2}{2}+\alpha (x-x_{i-1})^2(\frac{x-x_{i-1}}{3}-\frac{h}{2})+f(x_{i-1})$$
$$\alpha=\frac{3}{h^2}(f'(x_{i-1})+f'(x_i))+\frac{6}{h^3}(f(x_{i-1})+f(x_i))$$

##### Cubic spline interpolation
$$s_i(x)=\frac{1}{h}z_{i-1}\frac{(x_i-x)^3}{6}+\frac{1}{h}z_i\frac{(x-x_{i-1})^3}{6}+\frac{1}{h}[f_i-f_{i-1}+\frac{h^2}{6}(z_{i-1}-z_i)](x-x_{i-1})+f_{i-1}-\frac{h^2}{6}z_{i-1}$$

$$
  \begin{bmatrix}
    \alpha_{1} \; \beta_1& & \\
    \beta_{1} \; \ddots \ddots \\
    \qquad \ddots \ddots\ddots \\
    & & \ddots \ddots  \beta_{n-2} \\
    & & \beta_{n-2} \; \alpha_{n-1}
  \end{bmatrix} \begin{bmatrix} z_1\\ z_2\\ \vdots\\z_{n-1}\end{bmatrix}=\begin{bmatrix} \\ b_2\\ \vdots\\b_{n-1}\end{bmatrix}
$$

$$\alpha_i=\frac{2h}{3}, \beta_i=\frac{h}{6}$$
$$b_i=\frac{1}{h}(f_{i+1}-2f_i+f_{i-1}), \quad i=2, ..., n-2, $$
$$b_1=\frac{1}{h}(f_2-2f_1+f_0)-\frac{h}{6}z_0$$
$$b_{n-1}=\frac{1}{h}(f_n-2f_{n-1}+f_{n-2})-\frac{h}{6}z_n$$

##### Natural spline
A natural spline would use $z_0=0, z_n=1$. 

##### Complete spline
A natural spline would use $z_0=f'(x_0), z_n=f'(x_n)$. 
