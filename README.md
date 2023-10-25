// //JSX = React element
// const heading = (
// <h1 id="heading">React Element inside functional component
// </h1>
// );

// //React Functional Component
// const HeadingComponent = () => (
//    <h2 className="firstHeading">Inside functional Component</h2>
// );
// const HeadingSecondComponent = () => (
//   <div>
//     {HeadingComponent()}
//     <HeadingComponent />
//     {heading}
//     <h2 className="secondHeading">Another valid functional Component</h2>
//   </div>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// //root.render(heading);
// root.render(<HeadingSecondComponent />)

//javascript
// const heading = React.createElement("h1",{id : "heading"},"hello world from react");

//  //everything in react will be render in root
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

// const parent = React.createElement("div",
//                                     {id :"parent"}, [
//                                     React.createElement(
//                                         "div", {id :"child"},[
//                                         React.createElement("h1",{},"I am under H1 tag"),
//                                         React.createElement("h2",{},"I am under H2 tag")
//                                     ]),
//                                     React.createElement(
//                                         "div", {id :"child2"},[
//                                         React.createElement("h1",{},"I am under H1 tag"),
//                                         React.createElement("h2",{},"I am under H2 tag")
//                                     ]),
//                                 ]);

//                                     //That is why we use JSX to make it more cleaner
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);
