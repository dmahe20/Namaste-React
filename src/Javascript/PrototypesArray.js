//in Map and filter we are returning new array and not editing old arrays

//map

Array.prototype.myMap = function(callback){
    const mapValue = [];
    for(let i =0; i < this.length; i++){
        mapValue.push(callback(this[i], i, this));
    }
    return mapValue;
};

//filter

Array.prototype.myFilter = function(callback){
    const filterValue = [];
    for(let i=0; i< this.length;i++){
        if(callback(this[i] , i, this) === true){
            filterValue.push(this[i]);
        }
    }
    return filterValue;
}

//reduce function

Array.prototype.myReduce = function(callback, initialValue) {
    let accumulator = initialValue ?? this[0];
    let start = (initialValue === null) ? 1 : 0;
    for (let i = start; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this);
    }
    return accumulator;
}
const array = [1, 2, 3, 4];
const result = array.myReduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(result);



