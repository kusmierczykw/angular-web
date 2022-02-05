#!/bin/bash

NETWORK_NAME="e-karta-zdrowia"

if [ ! "$(command -v docker)" ]; then
  echo "You have not Docker installed. Please install Docker environment."

  exit 255
fi

cd docker && docker-compose down -v
cd - > /dev/null || exit 0

if docker network ls | grep -q $NETWORK_NAME; then
  docker network remove $NETWORK_NAME > /dev/null
fi

echo "The project was successfully stopped."

