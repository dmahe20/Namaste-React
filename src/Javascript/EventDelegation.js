document.querySelector('#categories').addEventListener("click",(e)=>{
    console.log("category clicked", e.target.id);
    if(e.target.tagName = ' li'){
    window.location.href = '/' + e.target.id;
    }
})


//another example with 3 input fields where 1 field is getting converted to upper case
//html
<div id='form' >
    <input type ='text' id='name' data-uppercase></input>
    <input type ='text' id='pan'></input>
    <input type ='text' id='mobile'></input>
</div>
//in js file
document.querySelector('#form').addEventListener('keyup',(e)=>{
    console.log(e);
    if(e.target.dataset.uppercase !== undefined){
        e.target.value = e.target.value.toUpperCase();
    }
})