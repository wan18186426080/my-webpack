import "../css/index.css";
import "../css/component.less";

const component = () => {
  const element = document.createElement("div");
  element.innerHTML = "hello webpack";
  element.className = "hello";

  const imgEl = new Image();
  imgEl.src = require("../img/test.png").default;
  element.appendChild(imgEl);

  return element;
};

document.body.append(component());
