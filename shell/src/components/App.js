import React from 'react';

// eslint-disable-next-line
const SomeComponent = React.lazy(() => import('remote1/SomeComponent'));

export default () => (
  <div>
    <h1 onClick={() => alert('shell is interactive')}>This is website 1</h1>
    <React.Suspense fallback={<h1>Loading....</h1>}>
      <SomeComponent />
    </React.Suspense>
  </div>
);
