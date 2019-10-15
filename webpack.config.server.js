const path = require('path');
const merge = require('webpack-merge');
// const webpackNodeExternals = require('webpack-node-externals');

const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
  mode: 'production',
  target: 'node',
  entry: './src/server.js',
  // externals: [webpackNodeExternals({ whitelist: [/@domclick-ui/] })],
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: 'null-loader'
      },
      {
        test: /\.scss$/,
        use: 'null-loader'
      }
    ]
  }
});
