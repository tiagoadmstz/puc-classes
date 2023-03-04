#!/bin/bash

if [ -z "$(ls -A /home/root/my-movies/)" ]; then
  npx create-react-app ../my-movies
  npm i react-router-dom styled-components axios yarn nodemon
fi

exit 0
