'use strict';
const path = require('path');

module.exports = {
  loaders: [
    {
      test: /\.js$/,
      loader: 'babel-loader',
      include: path.join(process.cwd(), 'source'),
      query: {
        cacheDirectory: true,
        presets: ['es2015', 'stage-0', 'react'],
        plugins: ['react-hot-loader/babel'],
      }
    }
  ]
};
