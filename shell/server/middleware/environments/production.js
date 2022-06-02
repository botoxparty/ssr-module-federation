const path = require('path');

// Production specific middleware for express
module.exports = async (express, app, done) => {
  // static path where files such as images will be served from
  app.use('/static', express.static(path.join(__dirname, '../client/static')));

  const renderThunk = require('../../server-entry').default; // eslint-disable-line import/no-unresolved
  const serverRender = renderThunk();
  app.get('/*', serverRender);
  done();
};
