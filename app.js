import React from "react";
import ReactDOM from "react-dom/client";
// // Create a h1 element
// // syntax const element = createElement(type, props, ...children)
// const h1 = React.createElement(
//   "h1",
//   {
//     // add attributes to the element
//     id: "heading",
//   },
//   "Hello world from React!"
// );
// console.log(h1); // Object

// // Get a root element by using id attribute
// const rootNode = document.getElementById("root");

// // Create a root using ReactDOM to render the elements
// const root = ReactDOM.createRoot(rootNode);

// console.log(root); // Object

// // render the elements inside the root

// // root.render(h1);

// /** part 04
//  *  <div id="parent">
//  *      <div id="child">
//  *           <h1></h1>
//  *      </div>
//  *  </div>
//  *
//  */

// const parent = React.createElement(
//   "div",
//   {
//     id: "parent",
//   },
//   [
//     h1,
//     React.createElement("div", { id: "child1", key: "child1" }, [
//       React.createElement("h1", { key: "child1h1" }, "This is Namaste React 🚀"),

//       React.createElement("h2", { key: "child1h2" }, "I am a h2 tag "),
//     ]),
//     React.createElement("div", { id: "child2", key: "child2" }, [
//       React.createElement("h1", { key: "child2h1" }, "I am a h1 tag "),

//       React.createElement("h2", { key: "child2h2" }, "I am a h2 tag "),
//     ]),
//   ]
// );

// console.log(parent);
// // React create element return an object and while rendering into the dom it will automatically converted to the html  element or tag
// root.render(parent);

// React.createElement => React Element-js Object => HTML Element(render)

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Namaste React 🚀"
// );

// JSX (Transpiled before it reaches the JS) - Parcel -Babel

//JSX => Babel transpiles it to  React.createElement => React Element-js Object => HTMLElement(render)

// const heading = (
//   <h1 id="heading" className="head" tabIndex={1}>
//     Namaste React using JSX 🚀
//   </h1>
// );
const Title = () => (
  <h1 id="heading" tabIndex={1}>
    Namaste React using JSX 🚀
  </h1>
);
const Heading = () => (
  <div id="container">
    <Title />
    <h1 id="heading">Namaste React using Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);
