for(let i=0;i<3;i++){
    setTimeout(()=>{
        console.log(i);
    },300);
}

// outpit = 0 1 2

for(var i=0;i<3;i++){
    setTimeout(()=>{
        console.log(i);
    },300);
}

//ouput 3 3 3



Hoisting


console.log(x);
var x=5;
console.log(x);

o/p = undefined 5


console.log(x);
let x=5;
console.log(x);

o/p = ReferenceError: Cannot access 'x' before initialization
