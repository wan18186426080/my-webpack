import "../css/index.css";
import "../css/component.less";

const component = () => {
  const element = document.createElement("div");
  element.innerHTML = "hello webpack";
  element.className = "hello";

  const imgEl = new Image();
  imgEl.src = require("../img/test.png");
  imgEl.width = 200;
  imgEl.height = 200;
  element.appendChild(imgEl);

  const iEl = document.createElement("span");
  iEl.className = "iconfont icon-a-aixinxihuanxiaishoucang";
  element.appendChild(iEl);

  return element;
};

document.body.append(component());
