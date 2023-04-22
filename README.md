# Load Balancer Project with Nginx, Node.js, Docker, and Docker Compose

This is a simple load balancer built using Nginx, Node.js, Docker, and Docker Compose. The purpose of this load balancer is to distribute incoming traffic to multiple instances of a Node.js application.

## Getting Started

To get started with this project, you will need to have Docker and Docker Compose installed on your machine.

1. Clone the repository

```bash
git clone https://github.com/josephDev123/loadbalancer-nginx-docker-nodejs.git
```

2. Navigate to the project directory

```bash
cd Nginx-nodejs-load-balancer
```

3. Start the application

```bash
docker-compose up -d
```

This will start the Node.js application and the Nginx load balancer. You can access the application by navigating to `http://localhost:80`.


## Nginx Configuration

The Nginx configuration is defined in the `nginx/default.conf` file. This file defines the upstream servers and the load balancing algorithm. In this sample project, we are using a round-robin algorithm to distribute requests among the upstream servers.

## Node.js Application

The Node.js application is a simple "Hello World" server that listens on port 9000. This port is exposed in the `Dockerfile` and mapped to port 90, 91, 92 in the `docker-compose.yml` file.

## Docker Compose

The `docker-compose.yml` file defines the Docker services for the project. It defines four services: `backend1`, `backend2`, `backend3` and `nginx`.

The `backends` service uses the `node:14.17.3-alpine3.14` Docker image and runs the Node.js application.

The `nginx` service uses the `nginx:1.21.6` Docker image and runs the Nginx load balancer. It also mounts the `nginx` directory to the `/etc/nginx` directory in the container to provide the Nginx configuration files.

## Diagram

<img src='Nginx load-balancer.png' alt=''/>

## Conclusion

This sample project provides a basic setup for setting up a load balancer using Nginx, Node.js, Docker, and Docker Compose. You can use this as a starting point for your own load balancer projects.

