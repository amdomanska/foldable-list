'use strict';

const webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080',
    'webpack/hot/only-dev-server',
    './src/app.js'
  ],
  output: {
    path: __dirname,
    filename: 'main.js',
    publicPath: '/assets/'
  },
  cache: true,
  devtool: false,
  stats: {
    colors: true,
    reasons: true
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: [/node_modules/],
      use: ['react-hot-loader', 'babel-loader', 'eslint-loader']
    },
    {
      test: /\.css$/,
      use: [ 'style-loader', 'css-loader' ]
    }],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};
