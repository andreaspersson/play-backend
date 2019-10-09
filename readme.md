### Build

docker build -t andreaspersson85/play-backend:v1 .

### OR Pull

docker pull andreaspersson85/play-backend

### Deploy

kubectl create -f .\deployment.yaml

kubectl expose deployment play-backend --type=LoadBalancer --port=3003


### General info

To scale deployment, set replicas to 0 and then run command again with 1:
kubectl scale deployment play-backend --replicas=0