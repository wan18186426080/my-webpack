### 01 邂逅 webpack 以及初体验

#### 1.webpack 是什么？

从本质上讲，webpack 是现代 JavaScript 应用程序的静态模块打包器。当 webpack 处理您的应用程序时，它会在内部从一个或多个入口点构建一个依赖关系图，然后将您项目所需的每个模块组合成一个或多个 bundles，这些 bundles 是用于提供内容的静态资产。

#### 2.如何才能让浏览器解析模块化的代码，例如 import/export,require/module.exports？

在 script 标签上加入 type="module"

#### 3.如何使用局部（项目级别）的命令，而不是全局的？

第一种方式：./node_module/.bin/webpack
第二种方式：npx webpack
第三种方式：在 package.json 中的 scripts 中加入命令："build":"webpack",然后执行 npm run build,这样会优先从 node_module 的.bin 目录中查找。

npm vs npx？

直接使用 webpack 命令会默认在当前文件目录中查找 src 文件夹中的 index.js 作为入口，打包到 dist 文件夹中

### 02 webpack 的核心配置选项

webpack-cli 其他参数：https://webpack.js.org/api/cli/

#### 1.webpack 到底是如何 U 对我们项目进行打包的？

事实上，webpack 在处理应用程序时，会会根据命令或者配置文件找到入口文件；
从入口开始，会生成一个依赖图，这个依赖图会包含应用程序中所需的所有模块，比如 js,css,图片，字体等；
然后遍历图结构，打包一个个模块（根据文件类型，使用不同的 loader 去解析）。
