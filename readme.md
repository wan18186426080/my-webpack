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
然后遍历图结构，打包一个个模块（根据文 å 件类型，使用不同的 loader 去解析）。

#### 2.css 模块打包

1.安装 css-loader，使用 css-loader 对.css 文件进行解析，但是并不会将解析之后的 css 插入到 html 中；

2.通过 style-loader 将解析之后的 css 插入到 html 中；

style-loader 原理是啥？

#### 3.less 模块打包

1.安装 less 和 less-loader，其实只通过 less 工具就能将 less 转换成 css（命令行输入 less ./css/test.less > test.css）,但是我们不可能每次都手动执行 less 命令，less-loader 内部也是通过 less 进行转换的。
2.less-loader 只会将 less 文件转换成 css 文件，后续还要将 css 通过 css-loader 和 style-loader 进行处理。

#### 4.开发过程中，浏览器兼容性问题？不是浏览器大小适配问题

首先想一想，项目中需要支持哪些浏览器？如果所有浏览器都兼容，只会将包弄大（性能优化点！）。

然后在 package.json 中的 browserslist 中进行配置（在.browserslist 中也一样）：

"browserslist": {
"production": [
">0.2%", //市场占有率大于 0.2%,通过权威的网站 caniuse 进行查询
"not dead",//死亡：24 个月内没有官方支持或更新的浏览器，比如 IE10
"not op_mini all"
],
"development": [
"last 1 chrome version", //最近的一个版本
"last 1 firefox version",
"last 1 safari version"
]
}

这里面其实是一个个条件，这些条件告诉工具（autoprefixer,babel,postcss-preset-env 等）我现在到底要适配哪些浏览器。

Browserslist 是什么?

Browserslist 是一个在不同的前端工具之间，共享目标浏览器和 Node.js 版本的配置:  
Autoprefixer
Babel
postcss-preset-env
eslint-plugin-compat
stylelint-no-unsupported-browser-features p postcss-normalize
obsolete-webpack-plugin

如何通过 caniuse 进行查询的？

条件查询使用的是 caniuse-lite 工具，这个工具的数据来自于 caniuse 网站上；

如何查看现在项目支持哪些浏览器？

命令行输入：npx browerslist ">1%,last 2 version"，如何不输条件的话，会默认读取项目根目录中的.browserslist 文件。

安装 webpack 时会内置 browerslist 命令，browerslist 中也是用的 caniuse-lite 工具。

### 03 webpack 中 sourceMap 的配置

#### 1.认识 postcss 工具

什么是 PostCSS 呢?

postCSS 是一个通过 JavaScript 来转换样式的工具

这个工具可以借助一些插件帮助我们进行一些 CSS 的转换和适配，比如自动添加浏览器前缀、css 样式的重置;

postcss 本身的功能很少，一般要借助于相应的插件才可以。

命令行使用 postcss：
安装 postcss 和 postcss-cli,这样就可以在命令行中运行了：npx postcss xxx

因为我们需要添加前缀，所以要安装 autoprefixer

npx postcss --use autoprefixer -o end.css ./src/css/style.css

事实上，在配置 postcss-loader 时，我们配置插件并不需要使用 autoprefixer。
n 我们可以使用另外一个插件:postcss-preset-env

ppostcss-preset-env 也是一个 postcss 的插件;
p 它可以帮助我们将一些现代的 CSS 特性，转成大多数浏览器认识的 CSS，并且会根据目标浏览器或者运行时环 境添加所需的 polyfill;
p 也包括会自动帮助我们添加 autoprefixer(ppostcss-preset-env 已经内置了 autoprefixer);

例如 color 属性，有些浏览器只支持 6 位，有些浏览器 6-9 位，这个时候需要统一转成目标浏览器识别的属性，比如转成 rgba。autoprefixer 是不会帮助我们转换的,而 postcss-preset-env 就可以完成这样的功能;

importLoaders 属性

现有如下例子：
在一个 css 文件中，通过@import 引入了另一个 css 文件，但是我们现在的 css 处理顺序是：postcss-loader => css-loader => style-loader，当遇到这种情况时，@import 也会被 css-loader 处理，但是@import 的文件是不会被 postcss-loader 处理的，这就有问题了。

解决方案：在 css-loader 中配置 importLoaders 属性，当 importLoaders:0 时，代表还是以当前 loader 进行处理，为 1 时代表后退一个 loader 处理，所以这里的数值代表后面 loader 个数量。

#### 2. webpack 处理其他资源

file-loader 原理：其实只是把图片复制一份放到了 dist 目录中，然后采用 md4 算法，生成了个 128bit 长度的 hash 值，也就是 32 位字符作为名字,然后在之前的文件中替换生成的名字。

url-loader: 与 file-loader 原理相似，默认是将所有匹配到的图片类型都转换成 base64，但是实际开发中是将较小的文件转成 base64 的 URI。

为什么不把所有的图片都转成 base64?

### 04 webpack 实现模块化的原理

我们当前使用的 webpack 版本是 webpack5: p 在 webpack5 之前，加载这些资源我们需要使用一些 loader，比如 raw-loader 、url-loader、file-loader;
在 webpack5 之后，我们可以直接使用资源模块类型(asset module type)，来替代上面的这些 loader;

资源模块类型(asset module type)，通过添加 4 种新的模块类型，来替换所有这些 loader:
asset/resource 发送一个单独的文件并导出 URL。之前通过使用 file-loader 实现;
asset/inline 导出一个资源的 data URI。之前通过使用 url-loader 实现;
asset/source 导出资源的源代码。之前通过使用 raw-loader 实现;（用的很少）
asset 在导出一个 data URI 和发送一个单独的文件之间自动选择。之前通过使用 url-loader，并且配置资源 体积限制实现;

iconfont 字体文件打包：字体文件使用 file-loader 打包就可以，在 webpack5 中直接使用 asset/resource

#### plugin

clean-webpack-plugin :每次打包前清楚 dist
