const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
module.exports = {
  entry: "./pages/index.js",
  output: {
    path: path.resolve(__dirname),
    filename: "bundle.js",
  },
  devServer: {
    contentBase: path.join(__dirname),
    port: 3000,
    compress: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./pages/index.js",
    }),
  ],
};
