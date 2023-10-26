document.querySelector('#categories').addEventListener("click",(e)=>{
    console.log("category clicked", e.target.id);
    if(e.target.tagName = ' li'){
    window.location.href = '/' + e.target.id;
    }
})