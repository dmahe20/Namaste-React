function mainClosure(){
    return function sum(a,b){
        console.log(a+b);
    }
}
const resultClosure = mainClosure();
resultClosure(5,5);



function mainClosure(){
     function sum(a,b){
        console.log(a+b);
    }
    return sum;
}
const resultClosureSecond = mainClosure();
resultClosureSecond(5,5);