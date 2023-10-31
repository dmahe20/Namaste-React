
document.querySelector('#grandparent').addEventListener('click',
                                                        ()=>{console.log("grandparent clicked")},
                                                        true);

document.querySelector('#parent').addEventListener('click', 
                                                    ()=>{console.log("parent clicked")},
                                                    true);

document.querySelector('#child').addEventListener('click', 
                                                    ()=>{console.log("child clicked")},
                                                    true);


// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<EventPropagation />);
// export default EventPropagation;

// useCapture = true = capturing
//  false = bubbling


//Another example with color and alert
//HTMl file
{/* <div id="wrap"> < div id = "wrap" >
  <p id="one"> < p id="one" >
    <a href="#">  < a href="#" > Click Me < / a ></a>
  < / p >
  </p>
< / div >
</div>

//</div>css
div, p, a {
            padding: 20px 30px;
            display: block;
        }
        a{
            margin-top: 10px;
            margin-bottom: 10px;
        }

        div { background-color: rgb(227, 238, 70); }

        p { background-color: rgb(149, 230, 19); }

        a { background-color: rgb(28, 196, 6); }

//JS
let elems = document.querySelectorAll('*');
    elems.forEach(elem => {
        elem.addEventListener("click", () => alert(`Capturing: ${elem.tagName}`));
    }); */}