//2 types of storage
//A) Local storage
//B) Session storage


localStorage.setItem("user","darshana");
localStorage.setItem("course","algoexpert");
console.log(localStorage.getItem("user"));
localStorage.removeItem("user");
localStorage.clear();


sessionStorage.setItem("user","test");
sessionStorage.getItem("user");


//Indexed DB
// javascript objects storage

const request = indexedDB.open('myDatabase', 1);
request.addEventListener('upgradeneeded',event =>{
    const database = event.target.result;
    const store = database.createObjectStore('users',{keyPath:'id'});
    store.createIndex('name','name');

    store.add({
        id:0,
        name:"darshana",
        course:'frontend'
    });
    store.add({
        id:1,
        name:"maheshwari",
        course:'alog'
    });

})