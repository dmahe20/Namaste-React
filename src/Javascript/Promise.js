console.log("first");
setTimeout(() =>{
    console.log("inside timeout");
})
console.log("second");

// output == first second inside timeout

console.log("first");
const promise = new Promise((res)=>{
setTimeout(() =>{
    console.log("inside timeout");
    res();
},3000);
});
promise.then(() => console.log("second"));


//output = first insidetimeout second


Promise.all([
    Promise.resolve(3),
    Promise.resolve(5),
    new Promise((res,rej) => setTimeout(()=> res(10),300))
]).then(console.log).catch(console.log);

Promise.race([
    new Promise((res,rej) => setTimeout(()=> res(3),3000)),
    new Promise((res,rej) => setTimeout(()=> res(2),2000)),
    new Promise((res,rej) => setTimeout(()=> res(1),1000)),
]).then(console.log).catch(console.log);

Promise.any([
    new Promise((res,rej) => setTimeout(()=> res(3),3000)),
    new Promise((res,rej) => setTimeout(()=> rej(2),2000)),
    new Promise((res,rej) => setTimeout(()=> rej(1),1000)),
]).then(console.log).catch(console.log);


async function tester(){
    try{
        const value = await new Promise((res) => setTimeout(() => res(3),1000));
        console.log(value);
        return value;
    }catch(err){
        console.log(err);
    }
}
tester();


// pollyfill for promise

function promisify(callback){
    return function(...args){
        return new Promise((resolve,reject)=>{
            function handleErrorAndValue(error, value){
                if(error === null){
                    resolve(value);
                }else{
                    reject(error);
                }
            }
            callback.call(this,...args,handleErrorAndValue)
        });
    };
}

