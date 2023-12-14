#!/usr/bin/env sh
set -x
# perintah ini hanya untuk memastikan folder yang ada pada dist
ls dist
# set the user, I just use Github Actions.
git config --global user.email "41898282+github-actions[bot]@users.noreply.github.com"
git config --global user.name "github-actions[bot]"
# set the target repo
git remote set-url origin https://git:${GIT_CREDENTIALS}@github.com/${GITHUB_REPOSITORY}.git
# run gh-pages, please ensure the jenkins have the permission
npx gh-pages --message '[skip ci] Updates' --dist dist