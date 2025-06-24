const root = document.querySelector("#root");
const reactElement = {
   type: "a",
   props: { href: "https://google.com", target: "_blank" },
   children: "Click me to visit google"
}

function customRender(reactElement, container) {
   const domElemet = document.createElement(reactElement.type);
   domElemet.innerHTML = reactElement.children;
   for (const prop in reactElement.props){
      if(prop == reactElement.children) continue;
      domElemet.setAttribute(prop, reactElement.props[prop])
   }
   container.appendChild(domElemet);
}

customRender(reactElement, root);
