const path = require('path')

function getPath(...pathParts) {
  return path.resolve(__dirname, ...pathParts)
}

module.exports = {
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
          context: getPath(),
          configFile: getPath('tsconfig.json'),
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.svelte$/,
        loader: 'svelte-loader',
        options: {
          compilerOptions: {
            dev: false,
          },

          emitCss: true,
          preprocess: require('svelte-preprocess')({}),
        },
      },
      {
        // required to prevent errors from Svelte on Webpack 5+, omit on Webpack 4
        test: /node_modules\/svelte\/.*\.mjs$/,
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      svelte: path.resolve('node_modules', 'svelte'), // Svelte 3: path.resolve('node_modules', 'svelte')
    },
    extensions: ['.tsx', '.ts', '.js', '.mjs', '.svelte'],
    mainFields: ['svelte', 'browser', 'module', 'main'],
    conditionNames: ['svelte', 'browser', 'import'],
  },
}
