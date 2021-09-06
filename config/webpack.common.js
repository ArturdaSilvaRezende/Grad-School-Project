const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");

const PATH = {
  dist: path.resolve(__dirname, "dist"),
};

module.exports = {
  entry: "./src/assets/js/index.js",
  output: {
    filename: "main.js",
    path: PATH.dist,
  },

  devServer: {
    static: {
      directory: PATH.dist,
    },
    compress: true,
    port: 9000,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2?)$/,
        use: {
          loader: "file-loader",
        },
      },
      {
        test: [/\.webm$/, /\.mp4$/, /\.ogv$/],
        use: {
          loader: "file-loader",
          options: {
            name: "assets/video/[name].[ext]",
          },
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
      minify: true,
    }),
    new CleanWebpackPlugin(),
    new webpack.SourceMapDevToolPlugin({}),
  ],
};
