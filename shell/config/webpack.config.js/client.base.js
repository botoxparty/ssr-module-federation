const path = require("path");
const {merge} = require("webpack-merge");
const ModuleFederationPlugin = require("webpack").container
  .ModuleFederationPlugin;
const { client: clientLoaders } = require("./loaders");
const plugins = require("./plugins");
const common = require("./common.base");
const deps = require('../../package.json').dependencies
module.exports = merge(common, {
  name: "client",
  target: "web",
  entry: ["@babel/polyfill", path.resolve(__dirname, "../../src/index.js")],
  output: {
    publicPath: "http://localhost:3000/static/",
  },
  module: {
    rules: clientLoaders,
  },
  plugins: [
    ...plugins.client,
    new ModuleFederationPlugin({
      name: "shell",
      filename: "container.js",
      remotes: {
        remote1: "remote1@http://localhost:3001/client/remoteEntry.js",
      },
      shared: [{"react":deps.react, "react-dom":deps["react-dom"]}],
    }),
  ],
});
