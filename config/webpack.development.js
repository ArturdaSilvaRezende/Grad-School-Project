const { merge } = require("webpack-merge");
const Common = require("./webpack.common.js");
const path = require("path");

const config = {
  devtool: "inline-source-map",
  mode: "development",

  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          "style-loader",
          "css-loader",
          "resolve-url-loader",
          {
            loader: "sass-loader",
            options: { sourceMap: true },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              limit: 8000, // Convert images < 8kb to base64 strings
              name: "assets/img/[name].[ext]",
            },
          },
        ],
      },
    ],
  },
};

module.exports = merge(Common, config);
