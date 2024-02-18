const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common')
const deps = require('./package.json').dependencies

const devConfig = {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:8083/',
  },
  devServer: {
    port: 8083,
    historyApiFallback: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'dashboard',
      filename: 'remoteEntry.js',
      exposes: {
        './Dashboard': './src/bootstrap',
      },
      shared: {
        ...deps,
        svelte: {
          singleton: true,
          requiredVersion: deps.react,
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
}

module.exports = merge(commonConfig, devConfig)
