#!/bin/sh -l

npm ci
eslint --ext .js .
