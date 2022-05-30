const path = require('path');
const fetch = require('node-fetch').default;


// Production specific middleware for express
module.exports = async (express, app, done) => {
  // static path where files such as images will be served from
  app.use('/static', express.static(path.join(__dirname, '../buildClient/static')));
  try {
    fetch('http://localhost:3001/restart');
  } catch (e) {
    console.error(e);
  }

  const renderThunk = require('../../server-entry').default; // eslint-disable-line import/no-unresolved
  const serverRender = renderThunk();
  app.get('/*', serverRender);
  done();
};
