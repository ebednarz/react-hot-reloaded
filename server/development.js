const browserSync = require('browser-sync');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const historyApiFallback = require('connect-history-api-fallback');

const webpackConfig = require('../webpack/config');
const bundler = webpack(webpackConfig);

browserSync({
  server: {
    baseDir: './source',
    middleware: [
      webpackDevMiddleware(bundler, {
        publicPath: webpackConfig.output.publicPath,
        stats: {
          colors: true,
        },
      }),
      webpackHotMiddleware(bundler),
      historyApiFallback(),
    ]
  },
  files: [
    './source/*.html'
  ]
});
