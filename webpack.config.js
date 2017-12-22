var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    'style': './src/style.styl',
  },
  output: {
    path: path.join(__dirname, './build/'),
    filename: '[name].css'
  },
  module: {
    rules: [
      {
        test: /\.styl$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader!stylus-loader'
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name].css')
  ],
  stats: {
    colors: true
  },
  devtool: 'source-map'
};