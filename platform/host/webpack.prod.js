const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common')
const packageJson = require('./package.json')

const prodConfig = {
  mode: 'production',
  output: {
    publicPath: '/host/latest',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'host',
      remotes: {
        cms: 'cms@http://localhost:8081/remoteEntry.js',
      },
      shared: packageJson.dependencies,
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
}

module.exports = merge(commonConfig, prodConfig)
