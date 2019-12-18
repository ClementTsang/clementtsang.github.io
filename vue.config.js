const PurgecssPlugin = require("purgecss-webpack-plugin");
const glob = require("glob-all");
const path = require("path");

module.exports = {
  configureWebpack: {
    optimization: {
      splitChunks: {
        minSize: 1
      }
    },
    plugins: [
      new PurgecssPlugin({
        paths: glob.sync([
          path.join(__dirname, "./src/index.html"),
          path.join(__dirname, "./**/*.vue"),
          path.join(__dirname, "./src/**/*.js")
        ])
      })
    ]
  }
};
