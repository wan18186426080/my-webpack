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
                plugins: ["postcss-preset-env"], //等同于写法：require("postcss-preset-env")，这样是简写，如果这些插件有其他参数则需要require("postcss-preset-env")（xxx）
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
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: ["postcss-preset-env"], //等同于写法：require("postcss-preset-env")，这样是简写，如果这些插件有其他参数则需要require("postcss-preset-env")（xxx）
              },
            },
          },
          { loader: "less-loader", options: {} },
        ],
      },
    ],
  },
};
