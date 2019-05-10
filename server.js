const express        = require('express');
const app            = express();

if (process.env.NODE_ENV === 'development') {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const webpackHotServerMiddleware = require('webpack-hot-server-middleware');
  const webpackConfig = require('./webpack.server.js');

  const compiler = webpack(webpackConfig);

  app.use(webpackDevMiddleware(compiler));
  app.use(webpackHotMiddleware(compiler));
  app.use(webpackHotServerMiddleware(compiler));
} else {
  const serverRenderer = require('./dist/serverRenderer').default;
  app.use(express.static('dist'));
  app.use(serverRenderer());
}

const port = 8000;

app.listen(port, () => {
  console.log('We are live on ' + port);
});