//support we have some apis createOrder, proceedtoPayment

const cart = ["shoes","pants","dresses"];

// we called this createOrder api which returns a promise , and once this createOrder api is done we need to call proceedToPayment api
//here proceed to payment works as call back function , so once createOrder api is finished proceedto payment will be done.
api.createOrder(cart,function(){ // here we are blindly trusting our createOrder api that once it finishes it will inform us but is not guranteed
    proceedtoPayment(orderId) // passing callback function to another function
});

// so we will create promise

const promise = createOrder(cart);

//here promise will return an empty object {data : undefine}
//once createOrder Api is done data will be filled {data : orderId}
//under then we pass our next callback funtion

promise.then(function(orderId){
    proceedtoPayment(orderId) // attaching a function
})


const URL_API = 'https://pokeapi.co/api/v2/pokemon-form/2';
const user = fetch(URL_API);

user.then(function (data){
    console.log(data);
});

//promise chaining
createOrder(cart)
.then(function (orderId){
    return proceedtoPayment(orderId)
})
.then(function (paymentinfo){
    return showOrderSummary(paymentinfo)
})
.then(function (orderSummary){
    return updateWalletSummary(orderSummary);
});




//create promise 
//producer
const promise = createOrderid(cart);
promise.then(function(orderId){
     console.log(orderId);
     return orderId;
})
.then(function (){
    return proceedtoPayment(orderId)
})
.catch(function (err){
    console.log(err.message)
})
//consumer
function createOrderid(cart){
    const pr = new Promise((resolve,reject) =>{
        if(!validatecart){
            const err = new Error("cart not validated")
            reject(err);
        }else{
            const orderId = 12344;
            if(orderId){
                resolve(orderId);
            }
        }
    })
    return pr;
}

function proceedtoPayment(orderId){
    return new Promise(function (resolve,reject){
        resolve("payment successful");
    });
}

//Homework
//createOrder
//proceedTOPayment
//showOrderSummary
//updateWallet

const cartItems = ["necklace", "jewelry", "clothes", "shoes"];
const promiseResponse = createOrder(cartItems);

promiseResponse
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
  })
  .catch(function (err) {
    console.log(err.message);
  })
  .then(function (orderId) {
    return proceedtoPayment(orderId);
  })
  .then(function ({ message, amt }) {
    console.log(message, amt);
    return showOrderSummary(message, amt);
  })
  .then(function ({ message, amt }) {
    console.log('Your wallet has been debited by:', amt);
  })
  .catch(function (err) {
    console.log(err.message);
  })
  .then(function () {
    console.log('No matter what happens, I will get executed');
  });

function createOrder(cartItems) {
  const pr = new Promise((resolve, reject) => {
    if (false) { // Change the condition to simulate a rejection
      const err = new Error("oh no!!!");
      reject(err);
    }
    const orderId = 123456;
    if (orderId) {
      resolve(orderId);
    }
  });
  return pr;
}

function proceedtoPayment(orderId) {
  // Simulated payment logic
  return new Promise(function (resolve, reject) {
    resolve({ message: `Payment is successful for order ID: ${orderId}`, amt: 2500 });
  });
}

function showOrderSummary(message, amt) {
  return new Promise(function (resolve, reject) {
    if (amt >= 2000) {
      resolve({ message: `You have ordered items that cost ${amt} RS`, amt });
    } else {
      reject(new Error('Please buy more for a discount'));
    }
  });
}
