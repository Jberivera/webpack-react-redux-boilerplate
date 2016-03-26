# webpack-react-redux-boilerplate

Fast way to start to apply react with redux using webpack

[![Build Status](https://travis-ci.org/Jberivera/webpack-react-redux-boilerplate.svg?branch=master)](https://travis-ci.org/Jberivera/webpack-react-redux-boilerplate)
[![Dependency Status](https://david-dm.org/jberivera/webpack-react-redux-boilerplate.svg)](https://david-dm.org/jberivera/webpack-react-redux-boilerplate)

## Getting Started

Clone this repo using `git clone` and remove `.git` folder to star a new project.

Open you project in the terminal and run `npm install`

## Scripts

- `npm start`
- `npm test`
- `npm test:watch`

## Technologies

- [React](https://facebook.github.io/react/)
- [Redux](https://github.com/reactjs/redux)
- [Sass](http://sass-lang.com/)

## Tools

- [Webpack](https://webpack.github.io/)
- [Babel](https://babeljs.io/)
- [Mocha](https://mochajs.org/) + [Expect](https://github.com/mjackson/expect) + [Enzyme](https://github.com/airbnb/enzyme)
- [Karma](https://karma-runner.github.io/) + [Phantomjs](http://phantomjs.org/)

## Architecture

### Application Structure
```
.
├── app
│   ├── actions
│   ├── components
│   ├── containers
│   └── reducers
├── build
│   └── reports
└── test
    └── reducers
```

### Component Structure
```
.
├── Component
│   ├── Component.js
│   ├── Component.scss
│   └── Component.spec.js
└── index.js
```
