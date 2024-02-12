const { merge } = require('webpack-merge')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common')

const devConfig = {
  mode: 'development',
  output: {
    publicPath: 'auto',
  },
  devServer: {
    port: 8081,
    // React router issues on hard refresh
    // https://github.com/remix-run/react-router/issues/676#issuecomment-174073981,
    // https://github.com/react-boilerplate/react-boilerplate/issues/113
    historyApiFallback: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'cms',
      filename: 'remoteEntry.js',
      exposes: {
        './cms': './src/bootstrap',
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
}

module.exports = merge(commonConfig, devConfig)