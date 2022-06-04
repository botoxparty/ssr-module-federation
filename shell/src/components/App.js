import React from 'react';

// eslint-disable-next-line
const Remote1Content = React.lazy(() => import('remote1/Content'));

export default () => (
  <div>
    <h1 onClick={() => alert('shell is interactive')}>This is website 1</h1>
    <React.Suspense fallback={<h1>Loading....</h1>}>
      <Remote1Content />
    </React.Suspense>
  </div>
);
