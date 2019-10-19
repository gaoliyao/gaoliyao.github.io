## Principle component analysis
#### Linear algebra review
##### Eigen decomposition
$$\Sigma=U\Lambda U^T$$, where $$U^TU=I$$.
In python, we use the following code: 

    import numpy as np 
    import numpy.linalg as la
    Sigma = np.array([[ 5.2, 3.3, -2], [ 3.3, 8.1, 4], [ -2, 4, 6.5]]) 
    lam, U = la.eig(Sigma)
##### Singular value decomposition
$$X=USV^T$$
