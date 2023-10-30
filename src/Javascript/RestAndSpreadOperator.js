// Rest follows the same syntax as the spread syntax, i.e.,
//  placing three dots ... before what we choose to copy. 
//  However, the difference lies in the purpose.
//   Where spread is used to create copies of arrays/objects, rest is used to collect all the remaining values into an array.

//Rest operator
//converts list of items into array

function sum(a,b,...restItems){
    console.log(restItems);
}
sum(1,2,3);

function display(a, b, ...rest) {
    console.log(a, b, rest);
 }
 
 display(9,10,11,12,13,14,15,16);


//spread operator
//converts array into list of items

let spreadExample = [1,2,3,4];
console.log(Math.min(...spreadExample));

//copying array
function display(arr) {
    return [...arr, 5,6,7];
  }
  const arr = [1,2,3,4];
  console.log(display(arr)); 
  
  //copying object
  const obj = { name: 'Emily', age: 22 };
  const newObj = { ...obj }
  console.log(newObj)