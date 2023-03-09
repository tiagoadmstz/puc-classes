#!/bin/bash

if [ -z "$(ls -A /home/root/my-movies/)" ]; then
  npx create-react-app my-movies
  mv -f my-movies/* ../my-movies/
  mv -f ./my-movies/.gitignore ../my-movies/
  rm -R my-movies
  chmod -R 777 .
  npm i react-router-dom styled-components axios yarn nodemon
fi

npm i
yarn start

exit 0
