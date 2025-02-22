// async await

function callback(){
    console.log("Gaurav Raj");
    
}
async function add(a, b){

    await callback();
    await callback();

    return a+b;
}

const result =  add (3,4);

console.log(result);
