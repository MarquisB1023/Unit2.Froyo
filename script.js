

// const flavors = text.{
//     [vanillia,
//     strawberry,
//     coffee,]
// };


 



let inputflavors = prompt('Welcome to Frozies, please proceed to enter your oder!');
console.log ("order;", inputflavors)
 /*
 get user order as comma sperated string   vanillia, chocolate, vanillia, 
 convert order string to an array 
  ["vanilla", "chocolate", "vanilla"]
    0             1          2  
    */
 const orders ={ }
const flavors = inputflavors.split(",")

  /*  check go over each flavor in userFlavors
    check if the flavor is in the order already*/
   
console.log ("user flavors:",flavors)
  for (let i = 0; i <flavors.length;i = i+1){
    const flavor = flavors[i] 
  /* if it isnt add the flavor to order set quantity to 1
    if it is in the order add 1 to order*/
    if(flavor in orders){
        console.log(flavor, " exist")
        orders [flavor] = orders [flavor] + 1; 
    }
    else{
        console.log(flavor, " not found") 
        orders [flavor] = 1;
    }

  }


console.log(orders);
/*output {"vanillia:2 chocolate:1"}
  */
