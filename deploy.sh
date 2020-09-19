#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m 'Deploying website...'

# if you are deploying to https://<USERNAME>.github.io
git push -f https://github.com/ClementTsang/clementtsang.github.io.git master

cd -