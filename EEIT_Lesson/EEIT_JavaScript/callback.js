let sentToAirport = true;

let p = new Promise(function(resolve, reject){

    if(sentToAirport) {
        resolve("from resolve(): send to airport");
    } else {
        reject("from reject(): order cancelled");
    }
});

p
.then(function(message){console.log(`${message} - 訂單完成` )})
.catch(function(message) {console.log(`${message} - 取消訂單`)});