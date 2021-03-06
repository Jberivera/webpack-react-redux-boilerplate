const karmaWebpack = require('karma-webpack');
const webpack = require('webpack');

module.exports = function(config) {
  config.set({
    frameworks: ['mocha'],
    files: [
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      './node_modules/babel-polyfill/dist/polyfill.min.js',
      'test/**/*.spec.js',
      'app/components/**/*.spec.js'
    ],
    plugins: [karmaWebpack, 'karma-mocha', 'karma-phantomjs-launcher', 'karma-coverage', 'karma-spec-reporter'],
    browsers: ['PhantomJS'],
    preprocessors: {
      'test/**/*.spec.js': ['webpack'],
      'app/components/**/*.spec.js': ['webpack']
    },
    reporters: ['spec', 'coverage'],
    coverageReporter: {
      dir: 'build/reports/coverage',
      reporters: [
        { type: 'html', subdir: 'report-html' },
        { type: 'lcov', subdir: 'report-lcov' },
        { type: 'cobertura', subdir: '.', file: 'cobertura.txt' }
      ]
    },
    webpack: {
      resolve: {
        alias: {
          'sinon': 'sinon/pkg/sinon'
        }
      },
      externals: {
        'jsdom': 'window',
        'cheerio': 'window',
        'react/lib/ExecutionEnvironment': true
      },
      module: {
        noParse: [
          /node_modules\/sinon\//
        ],
        rules: [
          {
            test: /(\.jsx)|(\.js)$/,
            enforce: 'pre',
            exclude: /(tests|node_modules|bower_components)\//,
            loader: 'isparta-loader'
          },
          {
            test: /\.scss$/,
            use: [
              'style-loader',
              'css-loader?modules',
              'sass-loader'
            ]
          },
          {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /(bower_components|node_modules)/
          }
        ]
      },
      plugins: [
        new webpack.IgnorePlugin(/ReactContext/)
      ]
    },
    webpackMiddleware: {
     noInfo: true,
     stats: 'errors-only'
   }
  });
};
