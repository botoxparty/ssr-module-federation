# Basic SSR Example

Module Federation Server Side Rendering example using React Suspense.

This example demos a basic shell application loading a remote component.

- `shell` is the host application.
- `remote1` standalone application which exposes `Content` component and consumes `Image` from `remote2`
- `remote2` standalone application which exposes `Image` component.

## Running Demo

Run `yarn build` in the shell and remote1 and remote 2 folders. 

Run `yarn serve` to start the required servers to open the example.

This will build the packages and and serve them on ports 3001 and 3002 respectively.

- [localhost:3000](http://localhost:3000/) (SHELL)
- [localhost:3001](http://localhost:3001/) (STANDALONE REMOTE1)
- [localhost:3002](http://localhost:3002/) (STANDALONE REMOTE2)