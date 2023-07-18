#!/bin/bash

# Build Docker images
docker build -t seagulendar_server:latest ./server
docker build -t seagulendar_client:latest ./client

# Start containers using Docker Compose
docker stack deploy -c docker-compose.yml seagulendar
