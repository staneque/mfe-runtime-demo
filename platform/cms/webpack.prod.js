const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common')
const packageJson = require('./package.json')

const prodConfig = {
  mode: 'production',
  output: {
    fileName: '[name].[contenthash].js',
    publicPath: '/cms/latest/',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'cms',
      filename: 'remoteEntry.js',
      exposes: {
        './cms': './src/bootstrap',
      },
      shared: packageJson.dependencies,
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
}

module.exports = merge(commonConfig, prodConfig)
