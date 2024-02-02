
String.prototype.toTitleCase = function(){
    return this.split(' ').map(function(word) {
        return word[0].charAt(0).toUpperCase() + word[0].slice(1).toLowerCase();
    }).join(' ');
}
//output = Today Is My Interview


-------------
String.prototype.toTitleCase = function() {
    const words = this.split(' ');
    if (words.length === 0) return '';

    const result = words[0].charAt(0).toUpperCase() + words[0].slice(1).toLowerCase();
    return result + (words.length > 1 ? ' ' + words.slice(1).join(' ') : '');
};

// Example usage:
console.log("hello world".toTitleCase()); // Outputs: Hello world
console.log("i love javascript".toTitleCase()); // Outputs: I love javascript
-------------------


//defining property like string.length to string.toTitleCase
Object.defineProperty(String.prototype, 'toTitleCase', {
    get: function() {
        const words = this.split(' ');
        if (words.length === 0) return '';
        
        const firstWord = words[0].charAt(0).toUpperCase() + words[0].slice(1).toLowerCase();
        return firstWord + (words.length > 1 ? ' ' + words.slice(1).join(' ') : '');
    }
});

// Example usage:
console.log("hello world".toTitleCase); // Outputs: Hello world
console.log("i love javascript".toTitleCase); // Outputs: I love javascript


