const path = require('path')
const Webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, '../src/main.tsx'),
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  module: {
    rules: [{
      test: /\.tsx$/,
      use: 'awesome-typescript-loader'
    }, {
      enforce: 'pre',
      test: /\.js$/,
      use: 'source-map-loader'
    }, {
      test: /\.ts$/,
      use: 'ts-loader'
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../src/template.html'),
      filename: 'index.html'
    }),
    new Webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    hot: true,
    contentBase: './dist',
  },
}