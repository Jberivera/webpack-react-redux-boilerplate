const webpack = require('webpack');

const path = require('path');
const merge = require('webpack-merge');

const TARGET = process.env.npm_lifecycle_event;
const DEFAULT_PORT = process.env.PORT || 3000;
const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'dist')
};

const common = {
  entry: PATHS.app,
  output: {
    path: PATHS.build,
    filename: 'js/main.js',
    publicPath: '/dist/'
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: 'style!css?sourceMap&modules!postcss!sass?sourceMap',
        include: PATHS.app
      },
      {
        test: /\.js$/,
        loaders: ['babel?cacheDirectory'],
        include: PATHS.app
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
};

module.exports = merge(common, {
  start: {
    devtool: 'eval-source-map',
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
      stats: 'errors-only',
      host: process.env.HOST,
      port: process.env.PORT || DEFAULT_PORT
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  },
  build: {

  }
}[TARGET]);
