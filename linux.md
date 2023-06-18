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

### HYAK
```
salloc -N 1 -p gpu-a40 -A dynamicsai --time=5 --mem=5G
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

### AMath server
Add jupyter notebook kernel. 
```
conda install -c anaconda ipykernel
python -m ipykernel install --user --name=firstEnv
```

Remove jupyter notebook kernel. 
```
jupyter kernelspec list
jupyter kernelspec uninstall unwanted-kernel
```

Copy between two machines. 
```
scp -r usr_name@172.28.14.182:/home/usr_name/video_generation/x_gaussian.npy .
mv x_gaussian.npy dx_gaussian.npy ddx_gaussian.npy ../SindyAutoencoders/examples/pen_video/
```

### Conda operations

Create environment
```
conda create --name myenv
```

Remove conda environment
```
conda remove -n ENV_NAME --all
```

Deactivate conda environment
```
conda deactivate
```
