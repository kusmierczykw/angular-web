#!/bin/bash

cd docker && docker-compose up -d && docker-compose exec angular bash && cd - || exit 0
