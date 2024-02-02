function deepCopy(obj) {
    if (obj === null || typeof obj !== 'object') {
        // If the input is not an object or is null, return it as is
        return obj;
    }

    let copy;
    // Determine the type of input (array or object)
    if (Array.isArray(obj)) {
        // If it's an array, create a new array
        copy = [];
        for (let i = 0; i < obj.length; i++) {
            // Recursively deep copy each element of the array
            copy[i] = deepCopy(obj[i]);
        }
    } else {
        // If it's an object, create a new object
        copy = {};
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                // Recursively deep copy each property of the object
                copy[key] = deepCopy(obj[key]);
            }
        }
    }
    return copy;
}
let originalObj = {
    name: 'John',
    age: 30,
    address: {
        city: 'New York',
        country: 'USA'
    },
    hobbies: ['reading', 'traveling']
};

let copiedObj = deepCopy(originalObj);

console.log(copiedObj);
