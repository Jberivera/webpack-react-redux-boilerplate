const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function webpackDev (PATHS) {
  return {
    module: {
      rules: [
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract({
            loader: [
              { loader: 'css-loader' },
              {
                loader: 'postcss-loader',
                query: {
                  plugins: function () {
                    return [
                      require('autoprefixer')({ browsers: ['last 2 versions'] })
                    ];
                  }
                }
              },
              {
                loader: 'sass-loader'
              }
            ],
            fallback: 'style-loader!css-loader?modules!postcss-loader!sass-loader',
          }),
          include: PATHS.app
        },
        {
          test: /\.js$/,
          loader: 'babel-loader?cacheDirectory',
          include: PATHS.app
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({ 'process.env': { 'NODE_ENV': '"production"' }}),
      new ExtractTextPlugin({
        filename: 'css/[name].css?[hash]-[chunkhash]-[contenthash]-[name]',
        allChunks: true
      }),
      new webpack.optimize.UglifyJsPlugin()
    ]
  };
}
