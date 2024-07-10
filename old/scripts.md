RCAC instruction to get personlized conda library. 
```
module load anaconda
conda list
conda create --name mars python=2.7 pytorch -y

conda env list
conda install --name MyEnvName PackageNames
source activate MyEnvName
source deactivate MyEnvName
```
