// Promise chaining......

const result = new Promise((resolve, reject)=>{

    console.log("Mern");
    resolve({"name": "ketan", "sub": "mern"})
    // reject("network failure")
})

// console.log(result);

result.then((data)=>{
    console.log(data.name);
    return data.sub

}).then((res)=>{
   console.log(res);
   
})