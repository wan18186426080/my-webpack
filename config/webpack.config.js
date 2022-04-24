const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { DefinePlugin } = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "boundle.js",
    //必须是一个绝对路径，要不然会报错
    path: path.resolve(__dirname, "../build"),
  },
  mode: "development",
  devtool: "source-map",
  // module: {
  //   rules: [
  //     {
  //       test: /\.css$/,
  //       use: [
  //         {
  //           loader: "style-loader",
  //           options: {},
  //         },
  //         {
  //           loader: "css-loader",
  //           options: {
  //             importLoaders: 1,
  //           },
  //         },
  //         {
  //           loader: "postcss-loader",
  //           options: {
  //             postcssOptions: {
  //               plugins: ["postcss-preset-env"], //等同于写法：require("postcss-preset-env")，这样是简写，如果这些插件有其他参数则需要require("postcss-preset-env")（xxx）
  //             },
  //           },
  //         },
  //       ],
  //     },
  //     {
  //       test: /\.less$/,
  //       use: [
  //         {
  //           loader: "style-loader",
  //           options: {},
  //         },
  //         {
  //           loader: "css-loader",
  //           options: {
  //             importLoaders: 2,
  //           },
  //         },
  //         {
  //           loader: "postcss-loader",
  //           options: {
  //             postcssOptions: {
  //               plugins: ["postcss-preset-env"], //等同于写法：require("postcss-preset-env")，这样是简写，如果这些插件有其他参数则需要require("postcss-preset-env")（xxx）
  //             },
  //           },
  //         },
  //         { loader: "less-loader", options: {} },
  //       ],
  //     },
  //     {
  //       test: /\.(jpg|png|gif)$/i,
  //       //webpack5之前做法
  //       // use: [
  //       //   {
  //       //     loader: "url-loader",
  //       //     options: {
  //       //       name: "img/[name].[hash:6].[ext]",
  //       //       // outputPath: "img", 与name中设置效果一致
  //       //       limit: 100 * 1024, //100kb
  //       //     },
  //       //   },
  //       // ],
  //       type: "asset",
  //       generator: {
  //         filename: "img/[name].[hash:6].[ext]",
  //       },
  //       parser: {
  //         dataUrlCondition: {
  //           maxSize: 100 * 1024, //跟url-loader中的limit一样
  //         },
  //       },
  //     },
  //     {
  //       test: /\.(eot|ttf|woff2?)$/i,
  //       type: "asset/resource",
  //       generator: {
  //         filename: "font/[name].[hash:6].[ext]",
  //       },
  //     },
  //   ],
  // },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "hello webpack",
      // template: path.resolve(__dirname, "../public/index.html"),
    }),
    // //设计全局变量
    // new DefinePlugin({
    //   BASE_URL: '"./"',
    // }),
    // //拷贝文件到output路径下
    // new CopyWebpackPlugin({
    //   patterns: [
    //     {
    //       from: "public",
    //       globOptions: {
    //         ignore: [
    //           "**/index.html",
    //           "**/.DS_Store", //mac系统下会自动生成该文件
    //         ],
    //       },
    //     },
    //   ],
    // }),
  ],
};
