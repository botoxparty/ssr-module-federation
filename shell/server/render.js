import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import { Helmet } from 'react-helmet';
import App from '../src/components/App';
import SomeComponent from 'remote1/SomeComponent';

export default async (req, res, next) => {
  const helmet = Helmet.renderStatic();
  let didError = false;

  const stream = renderToPipeableStream(<App />, {
    onAllReady() {
      res.statusCode = didError ? 500 : 200;
      res.setHeader('Content-type', 'text/html');
      res.write(`<!DOCTYPE html`);
      res.write(`<html ${helmet.htmlAttributes.toString()}>
      <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${helmet.link.toString()}
        <link rel="shortcut icon" href="data:;base64,=">
      </head>
      <body>`);
      res.write(`<div id="root">`);
      stream.pipe(res);
      res.write(`</div>`);
      res.write(`<script async="" data-chunk="main" src="http://localhost:3001/static/main.js"></script>`);
      res.write(`</body></html>`);
    },
    onShellError() {
      res.statusCode = 500;
      res.send(`<h1>An error occurred</h1>`)
    },
    onError() {
      didError = true;
      console.error(err);
    }
  })
};