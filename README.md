# React Build

React build is a node.js app structure that can act as a template for you to build React applications.

### Version:
[![Semver](http://img.shields.io/SemVer/1.0.1.png)](http://semver.org/spec/v1.0.1.html)

### Build Status:
![CircleCI](https://circleci.com/gh/StefanMcCready/stefans-react-build.svg?style=svg&circle-token=69924031e8be324ce4a84e19cdffb49827297850)

## Key technologies

* Node 8
* React 16
* Jest
* Enzyme
* Sass
* Storybook

## Scripts

`npm run dev` - Will run a dev server with hot reloading

`npm run build` - Will build the production files you need

`npm run test` - Will run the Jest test suite

`npm run lint` - Will run an eslint command to check over JS code

`npm run storybook` - Will run a storybook dev server

## Things to note

A `circle.yml` file is included. This means should you want to use `CircleCi` it will work out of the box.

A `heroku-postbuild` is also setup to use the `npm run build` command. If published to `Heroku` it will deploy correctly.

