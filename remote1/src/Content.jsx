import React from "react";
const Image = React.lazy(() => import("remote2/Image"));

export default () => (
    <div className="container">
      <div>Name: remote1</div>
      <div>Framework: react</div>
      <div>Language: JavaScript</div>
      <div>CSS: Empty CSS</div>
      <React.Suspense fallback={<h1>Loading...</h1>}>
        <Image />
      </React.Suspense>
    </div>
  );