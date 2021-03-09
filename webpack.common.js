const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    index: ['./src/js/index.js', './src/styles/index.scss'],
  },
  module: {
    rules: [
      // HTML files
      {
        test: /\.html$/,
        use: 'html-loader',
      },
      // SASS files
      {
        test: /\.scss/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
      favicon: './src/favicon.ico',
      chunks: ['index'],
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].css',
      chunkFilename: '[id].css',
    }),
  ],
  output: {
    filename: 'assets/[name].js',
    chunkFilename: '[id].css',
    path: path.resolve(__dirname, 'docs'),
    publicPath: '/',
  },
};
