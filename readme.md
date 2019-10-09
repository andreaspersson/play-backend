### Build

docker build -t play-backend:v1 .

### Deploy

kubectl create -f .\deployment.yaml

kubectl expose deployment play-backend --type=LoadBalancer --port=3003


### General info

To scale deployment, set replicas to 0 and then run command again with 1:
kubectl scale deployment play-backend --replicas=0