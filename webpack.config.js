// External libs
var webpack = require('webpack');
var path = require('path');

// Put React as a global variable
var providePlugin = new webpack.ProvidePlugin({
  'React': 'react',
  'Immutable': 'immutable',
  $: 'jquery',
  'window.$': 'jquery',
  'window.jQuery': 'jquery',
  'jQuery': 'jquery',
  '_': 'underscore',
  UI: '!json-loader!' + path.resolve(__dirname, './client/style/ui-kit.json'),
  'es6-promise': 'es6-promise',
  fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch',
});

var config = {

  entry: ['./client/app.jsx'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        id: 'jsx',
        test:/\.(js|jsx)?$/,
        loaders: ['babel?presets[]=react,presets[]=es2015,plugins[]=add-module-exports'],
        exclude: /(node_modules)/,
      },
      {
        id: 'img',
        test: /\.(png|jpg|svg)?$/,
        loader: 'file-loader',
      },
      {
        id: 'font',
        test: /\.(otf|eot|woff|woff2|ttf)$/,
        loader: 'file-loader',
      },
      {
        id: 'style',
        test: /\.(css)$/,
        loader: 'style-loader!css-loader'
      },
    ]
  },
  plugins: [
    providePlugin,
  ],
  resolve: {
    modulesDirectories: [
      'node_modules/',
      'utils/',
      'components/',
      './client/actions',
      './client/store',
      './client/globals'
    ]
  }
};

module.exports = config;
