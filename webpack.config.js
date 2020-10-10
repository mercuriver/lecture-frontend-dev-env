const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: "development",
  entry: {
    main: "./src/app.js"
  },
  output: {
    filename: "[name].js",
    path: path.resolve("./dist")
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          process.env.NODE_ENV === 'production' 
          ? MiniCssExtractPlugin.loader
          : "style-loader", 
          "css-loader"
        ]
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        loader: "url-loader",
        options: {
          name: "[name].[ext]?[hash]",
          limit: 20000 
        }
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: `Build Date: ${new Date().toLocaleString()}`
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      templateParameters: {
        env: process.env.NODE_ENV === 'production' ? '':'(개발용)'
      }
    }),
    new CleanWebpackPlugin({}),
    ...(
      process.env.NODE_ENV === 'production' 
      ? [new MiniCssExtractPlugin({filename: '[name].css'})]
      : []
    )
  ]
};
