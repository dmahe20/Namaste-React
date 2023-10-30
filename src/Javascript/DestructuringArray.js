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

  function returnNthCat(n){
    const state = {
       cats : [
          {catId : 1 , name : "tom"},
          {catId : 2 , name : "tiggy"},
          {catId : 3 , name : "leo"},
          {catId : 4 , name : "nixie"}
       ],
       curpage : 3
    }
        const {cats :{ [n] :{name:thisCatName}}} = state; 
        return thisCatName;
    }