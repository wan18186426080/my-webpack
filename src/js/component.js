import "../css/index.css";

const component = () => {
  const element = document.createElement("div");
  element.innerHTML = "hello webpack";
  element.className = "content";
  return element;
};

document.body.append(component());
