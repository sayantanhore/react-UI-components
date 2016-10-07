var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  entry: "./src/app.js",
  output: {path: __dirname, filename: 'bundle.js'},
  devServer: {
    inline: true,
    port: 3333
  },
  module: {
    loaders: [{
      test: '/.js$',
      exclude: '/node_modules/',
      loader: 'babel',
      query: {
        presets: ['es2015', 'react']
      }
    }, {
      test: '/.scss$',
      loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
    }]
  },
  plugins: [
    new ExtractTextPlugin('./dist/styles/[name].css', {
      allChunks: true
    })
  ]
}
