#!/bin/bash

NETWORK_NAME="e-karta-zdrowia"

if [ ! "$(command -v docker)" ]; then
  echo "You have not Docker installed. Please install Docker environment."

  exit 255
fi

if docker network ls | grep $NETWORK_NAME; then
  docker network create $NETWORK_NAME > /dev/null
fi

cd docker && docker-compose up -d
docker-compose exec angular sh
cd - > /dev/null || exit 0
