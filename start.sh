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

create_network() {
  if docker network ls --format "{{.Name}}" | grep -q ^$NETWORK_NAME$; then
    docker network create $NETWORK_NAME >/dev/null
  fi
}

run_containers() {
  docker-compose up -d
  docker-compose exec angular sh
}

init
check_docker_config
create_network
run_containers
destroy
