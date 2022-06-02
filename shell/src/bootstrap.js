import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { AppContainer } from 'react-hot-loader';
import App from './components/App';

const render = App => {
  const root = document.getElementById('root');

  ReactDOMClient.hydrateRoot(
    <AppContainer>
      <App />
    </AppContainer>,
    root,
  );
};

render(App);

if (module.hot && process.env.NODE_ENV === 'development') {
  module.hot.accept('./components/App', () => {
    // eslint-disable-next-line
    const App = require('./components/App').default;

    render(App);
  });
}
