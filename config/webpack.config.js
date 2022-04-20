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
        use: [{ loader: "css-loader", options: {} }],
      },
    ],
  },
};
