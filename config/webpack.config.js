const path = require("path");

module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "boundle.js",
    //必须是一个绝对路径，要不然会报错
    path: path.resolve(__dirname, "../build"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
            options: {},
          },
          { loader: "css-loader", options: {} },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [require("autoprefixer")],
              },
            },
          },
        ],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader",
            options: {},
          },
          { loader: "css-loader", options: {} },
          { loader: "less-loader", options: {} },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [require("autoprefixer")],
              },
            },
          },
        ],
      },
    ],
  },
};
