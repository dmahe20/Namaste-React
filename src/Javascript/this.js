console.log(this); //global object window

function abc(){
    console.log(this);//global window object
}

abc();



'use strict'
console.log(this); //global object window

function abc(){
    console.log(this);//undefined
}

abc();