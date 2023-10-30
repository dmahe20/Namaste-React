// splitting into short packages of array or objects

function display(){
    const exampleObject = {collection: [{name: "Kelly",}, 
                                       {name: "Anna",}],}
    const {collection : [,{name:secondObject,}] } = exampleObject;
    console.log(secondObject) //this line should display the correct answer
  }

  function removeFirstTwo(list) {
    const [, , ...arr] = list;
    return arr
  } 