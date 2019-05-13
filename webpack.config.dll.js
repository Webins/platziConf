const path = require("path");
const webpack = require("webpack");
const config = {
  resolve: {
    extensions: [".js", ".css", ".json", ".jsx", ".sass"],
    modules: [__dirname, "node_modules"]
  },
  entry: {
    modules: ["react", "react-dom", "react-router-dom", "bootstrap", "jquery"]
  },
  output: {
    path: path.join(__dirname, "./public"),
    filename: "[name].dll.js",
    publicPath: "./public/dist",
    library: "[name]"
  },
  plugins: [
    new webpack.DllPlugin({
      name: "[name]",
      path: path.join(__dirname, "[name]-manifest.json")
    })
  ]
};

module.exports = config;
