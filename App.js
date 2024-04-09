
/* <div id="parent">

         <div id ="child">
                <h1>hello i am a h1</h1>
                 <h2>hello i am a h2</h2>

         </div>

           <div id ="child2">
                <h1>hello i am a h1</h1>
                 <h2>hello i am a h2</h2>

         </div>
   </div>
*
*
*
*
*/


// const heading = React.createElement("h1", { id: "heading", xyz: "abc" }, "hello  world Using React");
// const root = ReactDOM.createRoot(document.querySelector(".root"));

// root.render(heading);


// console.log(heading);



const parent = React.createElement("div",{id:"parent"},
        [  React.createElement("div",{id:"child"},
           [ React.createElement("h1",{},"i am a h1 tag"), React.createElement("h2",{},"i am a h2 tag")]
          )
          ,
          React.createElement("div",{id:"child2"},
          [ React.createElement("h1",{},"i am a h1 tag"), React.createElement("h2",{},"i am a h2 tag")]
         )]
);

const root = ReactDOM.createRoot(document.querySelector(".root"));

 root.render(parent);