var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');

module.exports = {
    devtool: 'eval',
    entry: './src/universal/client.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!sass-loader')
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg|jpg)$/,
                loader: 'url-loader?limit=100000'
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline'
            },
            {   test: /\.json$/,
                loader: "json-loader"
            }
        ]
    },

    sassLoader: {
        outputStyle: 'compressed',
        includePaths: ['node_modules']
    },
    postcss: function () {
        return [autoprefixer({browsers: ['last 3 versions', 'not ie <= 10']})]
    },
    plugins: [
        new ExtractTextPlugin('global.css')
    ]
};
