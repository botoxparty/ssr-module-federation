const path = require("path");
const {merge} = require("webpack-merge");
const ModuleFederationPlugin = require("webpack").container
  .ModuleFederationPlugin;
const shared = require("./webpack.shared");
const deps = require('../package.json').dependencies

module.exports = merge(shared, {
  name: "client",
  target: "web",
  entry: ["@babel/polyfill", path.resolve(__dirname, "../src/index.js")],
  mode: "production",
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, "../dist/client"),
    filename: "[name].js",
    chunkFilename: "[name].js",
    publicPath: "http://localhost:3000/static/",
  },
  plugins: [
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
