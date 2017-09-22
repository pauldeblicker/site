PATH := $(shell npm bin):$(PATH)

ROOT = $(realpath $(dir $(lastword $(MAKEFILE_LIST))))

SERVER = server

help:
	@echo "Usage:"
	@echo
	@echo "  start                       start web server"
	@echo "  start-dev                   start web server and watch for changes"

build:
	webpack --config $(ROOT)/webpack.config.js

start:
	node $(SERVER)/app.js	

start-dev:
	NODE_ENV=dev concurrently "webpack-dev-server --config $(ROOT)/webpack.dev.config.js --hot --inline --no-info" "nodemon -w config -w server $(SERVER)/app.js"

.PHONY: help build start start-dev
