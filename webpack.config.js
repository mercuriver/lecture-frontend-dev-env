const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/app.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve('./dist'),
  },
  module: {
      rules: [
          {
              test: /\.css$/,
              use: [
                  'style-loader',
                  'css-loader'
              ]
          },
          {
              test: /\.(png|gif|jpg)$/,
              loader: 'url-loader',
              options: {
                  publicPath: './dist/',
                  name: '[name].[ext]?[hash]',
                  limit: 50000
                }
          }
      ]
  }
}
