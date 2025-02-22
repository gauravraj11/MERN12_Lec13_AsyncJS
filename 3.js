const result = new Promise((resolve, reject)=>{

    setTimeout(()=>{
        console.log("mern12");
        resolve("data received")

    },5000)

})

console.log(result);
