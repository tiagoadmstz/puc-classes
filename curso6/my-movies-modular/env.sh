#!/bin/bash

if [ -z "$(ls -A /home/root/my-movies-modular/src/)" ]; then
  npx create-react-app my-movies-modular
  mv -f my-movies-modular/* ../my-movies-modular/
  mv -f ./my-movies-modular/.gitignore ../my-movies-modular/
  rm -R my-movies-modular
  chmod -R 777 .
  npm i react-router-dom react-redux react-i18next redux styled-components axios yarn nodemon
fi

npm i
yarn start

exit 0
