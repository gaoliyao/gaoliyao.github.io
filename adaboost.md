## Adaptive Boosting
The idea of adaptive boosting is not complex at all. However, the full process and proof of this algorithm takes time to digest. I write this note for understanding this algorithm. 

#### Example of a basic step of algorithm
##### Setup
Get $\epsilon_1=\frac{\sum_i u_1^i \delta(f_1(x^i), y^i)}{Z_1}$, $Z_1=\sum_i u_1^i$. 
Suppose we have $\epsilon_1<0.5$. 

Suppose $u_2$ has the property that: 
$$\frac{\sum_i u_2^i\delta(f_1(x^i), y^i)}{Z_2}=0.5$$
Get $u_2$ in this step by a constant $d_1$. 

If $f_1(x^i)\neq y^i$, $u_2^i=d_1u_1^i$. 
If $f_1(x^i)= y^i$, $u_2^i=\frac{1}{d_1}u_1^i$.

##### From  the setup above
$$\frac{\sum_i u_2^i\delta(f_1(x^i), y^i)}{Z_2}=0.5$$
$$\sum_i u_2^i\delta(f_1(x^i), y^i)=\sum_{f_1(x^i)\neq y^i}d_1u_1^i$$
$$Z_2=\sum_i u_2^i=\sum_{f_1(x^i)\neq y^i}u_1^id_1+\sum_{f_1(x^i)= y^i}\frac{1}{d_1}u_1^i$$

$$\sum_{f_1(x^i)\neq y^i}u_1^id_1=\sum_{f_1(x^i)= y^i}\frac{1}{d_1}u_1^i$$

Since $\epsilon_1=\frac{\sum_{f_1(x^i)\neq y^i}u_1^i}{Z_1}$, 
$$\sum_{f_1(x^i)\neq y^i}u_1^id_1=\sum_{f_1(x^i)= y^i}\frac{1}{d_1}u_1^i$$

$$\frac{Z_1(1-\epsilon_1)}{d_1}=Z_1\epsilon_1d_1$$
$$d_1=\sqrt{\frac{1-\epsilon_1}{\epsilon_1}}.$$

Further name $\alpha_t=ln\sqrt{\frac{1-\epsilon_t}{\epsilon_t}}$
$$u_{t+1}^i=u_t^i \cdot exp(-y^if_t(x^i)\alpha_t)$$

