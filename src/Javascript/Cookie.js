//cookie
//uses getter and setter function

//setting cookie
document.cookie = `user = darshana ; expires = ${new Date().toUTCString()}`;
console.log(document.cookie);

document.cookie = `user = darshana ; max-size=0`;
console.log(document.cookie);

document.cookie = `user = darshana; path='/'`;
console.log(document.cookie);

document.cookie = `user = darshana; secure`;
console.log(document.cookie);


document.cookie = `user = darshana; secure; samesite=strict`;
console.log(document.cookie);

//getting cookie whatever we stored
const result = document.cookie
                .split('; ')
                .find(cookie => cookie.startsWith('course='))
                .split('=')[1];
console.log(result);