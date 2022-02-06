#!/bin/bash

NETWORK_NAME="e-karta-zdrowia"

init() {
  cd docker || exit
}

destroy() {
  cd - >/dev/null || exit
}

check_docker_config() {
  if [ ! "$(command -v docker)" ]; then
    echo "You have not Docker installed. Please install Docker environment."

    exit
  fi
}

remove_network() {
  if docker network ls --format "{{.Name}}" | grep -q ^$NETWORK_NAME$; then
    docker network remove $NETWORK_NAME >/dev/null
  fi
}

containers_down() {
  docker-compose down -v
}

print_success_message() {
  echo "The project was successfully stopped."
}

init
check_docker_config
containers_down
remove_network
print_success_message
destroy
