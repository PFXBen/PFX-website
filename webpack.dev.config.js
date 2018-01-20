const config = require('./webpack.config.js');

config.entry = ['./src/universal/index.js'];

config.module.rules = [
  {
    test: /\.json$/,
    loader: 'json-loader'
  },
  {
    test: /\.js$|.jsx$/,
    loader: 'babel-loader',
    exclude: [/node_modules/, /lib/]
  },
  {
    test: /.scss/,
    use: [
      'style-loader',
      'css-loader',
      'sass-loader?includePaths[]=./node_modules'
    ]
  },
];

config.devServer = {
  port: 3000,
  hot: true,
  historyApiFallback: {
    index: '/public/index.html',
  },
  stats: {
      colors: true,
      hash: false,
      version: false,
      timings: true,
      assets: false,
      chunks: false,
      chunkModules: false,
      modules: false,
      cached: false,
      reasons: false,
      source: true,
      errorDetails: true,
      chunkOrigins: true,
      children: false,
  },
}

module.exports = config;