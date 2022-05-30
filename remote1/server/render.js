import React from 'react';
import { renderToString } from 'react-dom/server';
import { Helmet } from 'react-helmet';
import App from '../src/components/App';

export default async (req, res, next) => {
  const html = renderToString(<App />);
  const helmet = Helmet.renderStatic();

  return res.send(`<!doctype html>
<html ${helmet.htmlAttributes.toString()}>
   <head>
       ${helmet.title.toString()}
       ${helmet.meta.toString()}
       ${helmet.link.toString()}
       <link rel="shortcut icon" href="data:;base64,=">
   </head>
  
   <body ${helmet.bodyAttributes.toString()}>
     <div id="root">${html}</div>
      <script async="" data-chunk="main" src="http://localhost:3002/static/main.js"></script>
   </body>
 </html>`);
};