const { merge } = require('webpack-merge')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const commonConfig = require('./webpack.common')

const devConfig = {
  mode: 'development',
  output: {
    // Fixes the React router issue on hard refresh
    // https://github.com/remix-run/react-router/issues/676#issuecomment-174073981,
    // https://github.com/react-boilerplate/react-boilerplate/issues/113
    publicPath: '/',
  },
  devServer: {
    port: 8080,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
}

module.exports = merge(commonConfig, devConfig)
