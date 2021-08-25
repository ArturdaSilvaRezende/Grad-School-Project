const { merge } = require("webpack-merge");
const Common = require("./webpack.common.js");

const config = {
  devtool: "inline-source-map",
  mode: "development",

  devServer: {
    static: "./dist",
  },
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
        loader: "file-loader",
        options: {
          name: "assets/img/[name].[ext]",
        },
      },
    ],
  },
};

module.exports = merge(Common, config);
