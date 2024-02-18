const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common')
const deps = require('../cms/package.json').dependencies

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/dashboard/latest/',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'cms',
      filename: 'remoteEntry.js',
      exposes: {
        './Dashboard': './src/bootstrap',
      },
      shared: {
        ...deps,
        svelte: {
          singleton: true,
          requiredVersion: deps.svelte,
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
}

module.exports = merge(commonConfig, prodConfig)
