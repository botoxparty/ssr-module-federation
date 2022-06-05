const {merge} = require("webpack-merge");
const path = require("path");
const baseConfig = require("./client.base");
const env = require("../env")();
const config = require("../config");

const { publicPath, clientPath } = config[env.raw.NODE_ENV || "production"];

module.exports = merge(baseConfig, {
  mode: "production",
  devtool: "source-map",
  output: {
    path: path.join(clientPath, publicPath),
    filename: "[name].js",
    chunkFilename: "[name].js",
  },
});
