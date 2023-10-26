// function (a,b,c)
// function(a)(b)(c)

function curriedSum(a) {
  return function (b) {
    console.log(a + b);
  };
}
const sum = curriedSum(4);
sum(6);


//pollyfills

function curry(callback){
    const curriedVersion = (...args) =>{
        if(args.length === 0){
            return callback();
        }

        return (...otherArgs) => {
            if(otherArgs.length === 0){
                return callback(...args);
            }
            return curriedVersion(...args,...otherArgs);
        }
    };
    return curriedVersion;
}