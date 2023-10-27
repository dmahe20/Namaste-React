//Rest operator
//converts list of items into array

function sum(a,b,...restItems){
    console.log(restItems);
}
sum(1,2,3);


//spread operator
//converts array into list of items

let spreadExample = [1,2,3,4];
console.log(Math.min(...spreadExample));