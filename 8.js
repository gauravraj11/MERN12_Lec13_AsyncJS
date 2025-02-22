async function getdata(){

    try {
        data = await fetch("https://fakestoreapi.com/products");
        console.log(data);
        jsondata = await data.json();

        console.log(jsondata);
        
    
    } catch (error) {
        
    }
    
}

getdata();