/*
*
*
<div id="parent">

    <div id="child">
    <h1>I am H1 Tag</h1>
    <h2>I am H2 Tag</H2>
    </div>

    <div id="child2">
    <h1>I am H3 Tag</h1>
    <h2>I am H4 Tag</H2>
    </div>

</div>
*
*
*/

const child1 = React.createElement(
    "div", 
    {id:"child1"}, [
        React.createElement("h1", {}, "I am H1 Tag"), 
        React.createElement("h2", {}, "I am H2 Tag")
    ] 
);

const child2 = React.createElement(
    "div", 
    {id:"child2"}, [
        React.createElement("h1", {}, "I am H3 Tag"), 
        React.createElement("h2", {}, "I am H4 Tag")
    ] 
);

const parent = React.createElement(
    "div",
    {id:"parent"}, [
    child1,
    child2,
    ]
);



// const heading = React.createElement(
//     "h1", 
//     {id:"heading", xyz:"abc"}, 
//     "Hello World from React!"
// );

// console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(parent);

root.render(parent);