//Apply

let applyName = {
    firstName :"Darshana",
    lastName:"maheshwari"
}
const applyPrimeValue = function (hobby,snack){
    return console.log(this.firstName + " " + this.lastName +" "+ hobby +" "+ snack);
}
applyPrimeValue.apply(applyName, ['test','poha']);

//call

let callName = {
    firstName :"Darshana",
    lastName:"maheshwari"
}
const callprimeValue = function (hobby){
    return console.log(this.firstName + " " + this.lastName +" "+ hobby);
}
callprimeValue.apply(callName, 'test');

//bind

let bindname = {
    firstName :"Darshana",
    lastName:"maheshwari"
}
const primeValue = function (hobby){
    return console.log(this.firstName + " " + this.lastName +" "+ hobby);
}
let bindFnx = primeValue.bind(bindname, 'test');
bindFnx();


//Ployfills
Function.prototype.myCall = function (thisContext, ...args){
    const symbol = Symbol();
    const returnVal = thisContext[symbol](...args);
    delete thisContext[symbol];

    return returnVal;
}

Function.prototype.myApply = function (thisContext, args= []){
    return this.myCall(thisContext, ...args);
}

Function.prototype.myBind = function (thisContext, ...args){
    return (...newArgs) => this.myApply(thisContext,[...args,...newArgs]);
}