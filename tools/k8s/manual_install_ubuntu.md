## K8s Install Ubuntu

### Pre-Installation Steps On Both Master & Slave

#### Update your ‘apt-get’ repository
`apt-get update`

#### Turn Off Swap Space (why?)
`swapoff -a`


`nano /etc/fstab`


#### Update host files
`sudo nano /etc/hosts`

Add master and  slave node ip and hostname

 *example -*
 ```
 10.1.1.1 k8smaster
 10.1.1.2 k8s-snode1
 ```

##### Setting Static IP Addresses ?

`nano /etc/network/interfaces`

```
auto enp0s8
iface enp0s8 inet static
address <IP-Address-Of-VM>
```

#### Install OpenSSH-Server
`sudo apt-get install openssh-server `

#### Install Docker

sudo apt install docker.io -y

#### Install curl and apt-transport-curl
`apt-get install -y apt-transport-https curl`

#### Add ??
`curl -s https://packages.cloud.google.com/apt/doc/apt-key.gpg | apt-key add -`

#### ??

```
cat <<EOF >/etc/apt/sources.list.d/kubernetes.list
deb http://apt.kubernetes.io/ kubernetes-xenial main
EOF
```

#### Install kubeadm, Kubelet And Kubectl

`apt-get install -y kubelet kubeadm kubectl `

#### Updating Kubernetes Configuration
` nano /etc/systemd/system/kubelet.service.d/10-kubeadm.conf`

Add below line at hte end of last env varaible in conf file
`Environment=”cgroup-driver=systemd/cgroup-driver=cgroupfs”`


#### Only For Kubernetes Master VM (kmaster)

`kubeadm init --apiserver-advertise-address=<ip-address-of-kmaster-vm> --pod-network-cidr=192.168.0.0/16`

### ***References***
[Edureka Blog](https://www.edureka.co/blog/install-kubernetes-on-ubuntu)

