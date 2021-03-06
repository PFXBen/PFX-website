
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/universal/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'public')
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            use: [{
                loader: "css-loader"
            }, {
                loader: "sass-loader",
                options: {
                  includePaths: [
                        path.resolve('./node_modules'),
                  ]
                }
            }],
          }),
        },
        {
          test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
          loader: 'url-loader',
          options: {
            limit: 10000
          }
        },
        {
          test: /\.md$/,
          loader: "html-loader!markdown-loader?gfm=false"
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin('global.css'),
    ]
}
