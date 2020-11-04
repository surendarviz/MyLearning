
## namespaces

example..

```
apiVersion: v1
kind: Namespace
metadata:
  name: <insert-namespace-name-here>
  ```
---

  ## nodes

  `kubectl get nodes`

  `kubectl describe node minikube`

---

## cluster components

1. Kubernetes proxy
2. Kubernets DNS
3. Kubernetes UI

### Kube Proxy
Responsible for routing network traffic to load-balanced services.
It must be present on every node

`kubectl get daemonsets --namespace=kube-system kube-proxy`

pending...

---
## Common Commands

#
### N**amespaces**
* To organize objects in the cluster, **default** is the default namespace
* Pass --namespace flag to use diff namespace - `kubectl --namespace=mystuff`  
* To interact with all namespaces ,(e.g., to list pods in all namespaces) pass `--all-namespaces` flag

***example***
``` 
kubectl get pods --namespace=testspace

Kubect get pods --all-namespaces
```
#
### **Contexts**
* Use Context to change the default namespace permanently.
* Gets recorded in $HOME/.kube/config.
* This config file stores how to both find and authenticate to your cluster.
* Can also be used to manage different clusters using the --users or --clusters flag with the set-context command.

***Example***

**Set context**
```
kubectl config set-context my-context --namespace=myspace
```

**Use Context**
```
kubectl config use-context my-context
```

#
### **Kubernetes API Objects**

* Everything contained in Kubernetes is represented by a RESTful resource
* e.g., `https://your-k8s.com/api/v1/namespaces/default/pods/my-pod`
* kubectl command makes HTTP requests to these URLs to access the Kubernetes objects that reside at these paths.
* Basic command - `kubectl get <resource-name>`
* To get specific resource `kubectl get <resource-name> <obj-name>`

