const webpack = require('webpack');

const path = require('path');

const TARGET = process.env.npm_lifecycle_event;
const DEFAULT_PORT = process.env.PORT || 3000;
const PATHS = {
  app: path.join(__dirname, 'app'),
  dist: path.join(__dirname, 'dist'),
  build: path.join(__dirname, 'build')
};

const common = {
  entry: PATHS.app,
  output: {
    path: PATHS.dist,
    filename: 'js/main.js',
    publicPath: '/dist/'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader?sourceMap&modules',
          {
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [
                  require('postcss-flexbugs-fixes'),
                  require('autoprefixer')({ browsers: ['last 2 versions'] })
                ];
              }
            }
          },
          'sass-loader?sourceMap'
        ],
        include: PATHS.app
      },
      {
        test: /\.js$/,
        loader: 'babel-loader?cacheDirectory',
        include: PATHS.app
      }
    ]
  }
};

const targetConfig = require(`./webpack.config.${TARGET}`)(PATHS, DEFAULT_PORT);

const webpackConfig =  Object.assign(common, targetConfig);

module.exports = webpackConfig;
