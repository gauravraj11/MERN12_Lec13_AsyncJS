//Promises

const gaurav = new Promise((resolve, reject)=>{

   var a = false; // API call
   if(a){
    resolve(12345)
   }else{
    reject("network failure")
   }

})

console.log(gaurav);
