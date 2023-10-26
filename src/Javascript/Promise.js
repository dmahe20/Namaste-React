console.log("first");
setTimeout(() =>{
    console.log("inside timeout");
})
console.log("second");

// output == first second inside timeout

console.log("first");
const promise = new Promise((res)=>{
setTimeout(() =>{
    console.log("inside timeout");
    res();
},3000);
});
promise.then(() => console.log("second"));


//output = first insidetimeout second