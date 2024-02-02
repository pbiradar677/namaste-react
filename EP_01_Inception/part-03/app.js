// Create a h1 element
// syntax const element = createElement(type, props, ...children)
const h1 = React.createElement(
  "h1",
  {
    // add attributes to the element
    id: "heading",
  },
  "Hello world from React!"
);
console.log(h1); // Object

// Get a root element by using id attribute
const rootNode = document.getElementById("root");

// Create a root using ReactDOM to render the elements
const root = ReactDOM.createRoot(rootNode);

console.log(root); // Object

// render the elements inside the root

// root.render(h1);


/** part 04 
 *  <div id="parent">
 *      <div id="child">
 *           <h1></h1>
 *      </div>
 *  </div>
 *
 */

const parent = React.createElement(
  "div",
  {
    id: "parent",
  },
  [
    React.createElement("div", { id: "child1", key: "child1" }, [
      React.createElement("h1", { key: "child1h1" }, "I am a h1 tag "),

      React.createElement("h2", { key: "child1h2" }, "I am a h2 tag "),
    ]),
    React.createElement("div", { id: "child2", key: "child2" }, [
      React.createElement("h1", { key: "child2h1" }, "I am a h1 tag "),

      React.createElement("h2", { key: "child2h2" }, "I am a h2 tag "),
    ]),
  ]
);

// console.log(parent);
// React create element return an object and while rendering into the dom it will automatically converted to the html  element or tag
root.render(parent);
