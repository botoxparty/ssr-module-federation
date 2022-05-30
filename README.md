# Basic SSR Example

Module Federation Server Side Rendering example using React Suspense.

This example demos a basic shell application loading a remote component.

- `shell` is the host application.
- `remote1` standalone application which exposes `Header` component.

## Running Demo

Run `yarn build && yarn serve` in the shell and remote1 folders. This will build and serve both `shell` and `remote1` on ports 3001 and 3002 respectively.

- [localhost:3001](http://localhost:3001/) (HOST)
- [localhost:3002](http://localhost:3002/) (STANDALONE REMOTE)