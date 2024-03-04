const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common')
const deps = require('./package.json').dependencies

const remoteAppDomain = process.env.REMOTE_APP_DOMAIN

const prodConfig = {
  mode: 'production',
  output: {
    publicPath: '/',
    filename: '[name].[contenthash].js',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'host',
      remotes: {
        cms: `cms@${remoteAppDomain}/cms/latest/remoteEntry.js`,
        auth: `auth@${remoteAppDomain}/auth/latest/remoteEntry.js`,
        dashboard: `dashboard@${remoteAppDomain}/dashboard/latest/remoteEntry.js`,
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: deps['react-dom'],
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
}

module.exports = merge(commonConfig, prodConfig)
