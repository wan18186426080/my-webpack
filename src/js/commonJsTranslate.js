//源代码：
//test.js:
// const test1 = () => {
//   return 1 + 2;
// };

// const test2 = () => {
//   return 3 + 4;
// };

// module.exports = {
//   test1,
//   test2,
// };

//main.js
// const { test1, test2 } = require("./js/test");

// console.log("hello world");

// test1();
// test2();

// webpackBootstrap
var modulesMap = {
  "./src/js/test.js": function (module) {
    const test1 = () => {
      return 1 + 2;
    };

    const test2 = () => {
      return 3 + 4;
    };

    module.exports = {
      test1,
      test2,
    };
  },
};
/************************************************************************/
// The module cache
var moduleCache = {};

//执行后得到：
// var moduleCache = {
//   "./src/js/test.js": {
//     exports: {
//       test1,
//       test2,
//     },
//   },
// };

// The require function
function webpackRequire(moduleId) {
  // Check if module is in cache
  var cachedModule = moduleCache[moduleId];
  if (cachedModule !== undefined) {
    return cachedModule.exports;
  }
  // Create a new module (and put it into the cache)
  var module = (moduleCache[moduleId] = {
    // no module.id needed
    // no module.loaded needed
    exports: {},
  });

  // Execute the module function
  modulesMap[moduleId](module, module.exports, webpackRequire);

  // Return the exports of the module
  return module.exports;
}

/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.

const { test1, test2 } = webpackRequire("./src/js/test.js");

console.log("hello world");
test1();
test2();
