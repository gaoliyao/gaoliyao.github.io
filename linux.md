## Commonly used Linux commands

### Purdue
```
firefox -no-remote -P "me"
```

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

### Instruction to initiate an interactive environment
This line of code would allow us to obtain enough computing resource for one chain. 
```
sinteractive --nodes=1 --gpus-per-node=1 --time=1-0:0:0
```
This line of code would allow us to obtain enough computing resource for two chains. 
```
sinteractive -A partner -N2 -n16 --gpus-per-node 1 --time=1-0:0:0
```

This screen should show up after this step. 

<img src="https://raw.githubusercontent.com/gaoliyao/ClusteringDemo/master/img/Purdue%20RCAC%20Step1.png" width="600">

### Instruction to initialize coding environment 
Typically for this package, we should load related packages through these two lines. 
```
module load learning/conda-5.1.0-py27-gpu
module load ml-toolkit-gpu/tensorflow
```

Then we are ready to go! 

