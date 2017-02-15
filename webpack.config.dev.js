const webpack = require('webpack');

module.exports = function webpackDev (PATHS, DEFAULT_PORT) {
  return {
    devtool: 'eval-source-map',
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      stats: 'errors-only',
      host: process.env.HOST,
      port: process.env.PORT || DEFAULT_PORT
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin({ 'process.env': { 'NODE_ENV': '"development"' }})
    ]
  };
}
