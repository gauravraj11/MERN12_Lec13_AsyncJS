const result1 = new Promise(()=>{

    
})

const result = fetch("https://fakestoreapi.com/products");

// console.log(result);

result.then((data)=>{
    console.log(data);

    return data.json();
    
}).then((jsondata)=>{

    console.log(jsondata);
    

}).catch((err)=>{
   console.log(err);
   
})


