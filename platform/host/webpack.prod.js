const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common')
const packageJson = require('./package.json')

const remoteAppDomain = process.env.REMOTE_APP_DOMAIN

const prodConfig = {
  mode: 'production',
  output: {
    publicPath: '/host/latest/',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'host',
      remotes: {
        cms: `cms@${remoteAppDomain}/remoteEntry.js`,
      },
      shared: packageJson.dependencies,
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
}

module.exports = merge(commonConfig, prodConfig)
