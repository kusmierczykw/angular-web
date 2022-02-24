#!/bin/bash

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

build_containers() {
  docker-compose build
}

init
check_docker_config
build_containers
destroy
