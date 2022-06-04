const path = require("path");
const webpackMerge = require("webpack-merge");
const sharedWebpackConfig = require("./webpack.shared");
const moduleFederationPlugin = require("./module-federation");

module.exports = webpackMerge(sharedWebpackConfig, {
  output: {
    path: path.resolve(__dirname, "../dist/server"),
    filename: "[name].js",
    libraryTarget: "commonjs2",
  },
  target: "async-node",
  name: "server",
  plugins: [
    moduleFederationPlugin.server
  ],
});
