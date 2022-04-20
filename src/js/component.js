import "../css/index.css";
import "../css/component.less";

const component = () => {
  const element = document.createElement("div");
  element.innerHTML = "hello webpack";
  element.className = "hello";
  return element;
};

document.body.append(component());
