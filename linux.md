## Commonly used Linux commands

### HDSI
```
jupyter notebook --no-browser --port 8000
ssh -N -f -L localhost:8000:localhost:8000 mars@ds-serv1.ucsd.edu
```
#### Early stopping
Run ResNet code
```
nohup chmod +x run.sh && ./run.sh > output.out &
```

#### Load anaconda
```
module load anaconda
source activate mars
```



