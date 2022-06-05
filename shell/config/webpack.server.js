const path = require("path");
const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack").container
  .ModuleFederationPlugin;
const shared = require("./webpack.shared");
const remotePath = path.resolve(
  __dirname,
  "../../remote1/dist/server/remoteEntry.js"
)
const deps = require('../package.json').dependencies

module.exports = merge(shared, {
  name: "server",
  target: "async-node",
  entry: ["@babel/polyfill", path.resolve(__dirname, "../server/index.js")],
  output: {
    path: path.resolve(__dirname, "../dist/server"),
    filename: "[name].js",
    libraryTarget: "commonjs2",
  },
  mode: "production",
  externals: ["enhanced-resolve"],
  plugins: [
    new ModuleFederationPlugin({
      name: "shell",
      library: { type: "commonjs2" },
      filename: "remoteEntry.js",
      remotes: {
        // remote1: remotePath
        remote1: {
          // we dont need to do this, just intersting to see in action
          external: `promise new Promise((resolve)=>{ console.log('shell: requiring remote1');delete require.cache['${remotePath}']; resolve(require('${remotePath}')) })`
        },
      },
      shared: [{ "react": deps.react, "react-dom": deps["react-dom"] }],
    }),
  ],
  stats: {
    colors: true,
  },
});
