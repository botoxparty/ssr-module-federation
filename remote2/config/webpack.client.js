const path = require("path");
const webpackMerge = require("webpack-merge");
const sharedWebpackConfig = require("./webpack.shared");
const moduleFederationPlugin = require("./module-federation");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = webpackMerge(sharedWebpackConfig, {
  output: {
    path: path.resolve(__dirname, "../dist/client"),
    publicPath: "http://localhost:3002/",
  },
  devServer: {
    port: 3002,
    historyApiFallback: true,
  },
  plugins: [
    moduleFederationPlugin.client,
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
});
