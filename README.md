# NodeJS App to test Kubernetes deployment

Run local server

```console
npm install
npm start
```

Run with docker

```console
docker build -t <docker_user>/kubenode .
docker run -p 4000:4000 <docker_user>/kubenode
```

Run with kubectl

```console
kubectl apply -f k8s/
```

The default port is set to 4000
