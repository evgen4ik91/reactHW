const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const app            = express();

if (process.env.NODE_ENV === 'development') {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const webpackConfig = require('./webpack.server.js');

  const compiler = webpack(webpackConfig);

  app.use(webpackDevMiddleware(compiler));
  app.use(webpackHotMiddleware(compiler));
} else {
  app.use(express.static('dist'));
}

app.use(require('./src/serverRenderer'));

const port = 8000;

app.listen(port, () => {
  console.log('We are live on ' + port);
});