const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
  mode: 'development',
  devServer: {
    port: 8081,
  },
  optimization: {
    runtimeChunk: false,
    splitChunks: false,
  },
  experiments: {
    topLevelAwait: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'listing',
      filename: 'remoteEntry.js',
      exposes: {
        './ListingComponent': './src/index',
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
}
