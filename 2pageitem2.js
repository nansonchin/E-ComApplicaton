let carts = document.querySelectorAll('.add-cart');


let products = [
   
  
    {   
        name:'NVIDIA RTX 3080',
        tag:'computer22',
        price: 5800.00,
        inCart:0
    },
    {   
        name:'Thermaltake Level 20 BattleStation RGB Gaming Desk',
        tag:'computer23',
        price: 4799.00,
        inCart:0
    },
    {   
        name:'PRISM+ X340',
        tag:'computer24',
        price: 1796.00,
        inCart:0
    },
    {   
        name:'COOLCOLD Portable Laptop Cooler',
        tag:'computer25',
        price: 80.50,
        inCart:0
    },
    {   
        name:'Marvel Iron Man 3 K740 Keyboard',
        tag:'computer26',
        price: 99999.00,
        inCart:0
    },
    {   
        name:'Oneodio Pro-30 Professional Studio Headphones',
        tag:'computer27',
        price: 125.99,
        inCart:0
    },
    {   
        name:'3.5mm Stereo Audio Female to 2 Male',
        tag:'computer28',
        price: 2.99,
        inCart:0
    },
    {   
        name:'RGB PC Fan 12V 6 Pin 12cm Cooling Cooler Fan',
        tag:'computer29',
        price: 18.59,
        inCart:0
    },
    {   
        name:'Triton 78 gaming CPU cooler',
        tag:'computer30',
        price: 313.25,
        inCart:0
    },
    {   
        name:'Razer Deathadder Mouse',
        tag:'computer31',
        price: 80.50,
        inCart:0
    },
    {   
        name:'TOSHIBA USB Flash Drive',
        tag:'computer32',
        price: 4299.00,
        inCart:0
    },
    {   
        name:'HP Pavilion Gaming Laptop 15',
        tag:'computer33',
        price: 4299.00,
        inCart:0
    },
    {   
        name:'Razer Cynosa Chroma Pro',
        tag:'computer34',
        price: 172.50,
        inCart:0
    },
    {   
        name:'Scorpion Gaming Chair with Computer workstation',
        tag:'computer35',
        price: 13966.32,
        inCart:0
    },
    {   
        name:'TTRacing Duo V3 PU Gaming Chair',
        tag:'computer36',
        price: 429.00,
        inCart:0
    },
 

]


for(let i =0; i< carts.length; i++){
    carts[i].addEventListener('click',()=>{
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}

function onLoadCartNumbers(){  //function to do refresh still reamin the amount 
    let productNumbers= localStorage.getItem('cartNumbers');

    if(productNumbers){
        document.querySelector('.cart span').textContent= productNumbers;  //span cart 0
    }
}

function cartNumbers(product){
  
    let productNumbers= localStorage.getItem('cartNumbers');
    console.log(productNumbers);

    

    productNumbers=parseInt(productNumbers);
    if(productNumbers){
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent= productNumbers + 1;  //span cart 0


    }else {
        localStorage.setItem('cartNumbers',1);
        document.querySelector('.cart span').textContent=1;  //span cart 0
    }

    setItems(product); //pass to here
  
}

function setItems(product){
    let cartItems= localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null){
        
        if(cartItems[product.tag] == undefined){
            cartItems={
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart+=1;
    } else{
        product.inCart = 1;
        cartItems ={
            [product.tag]:product
        }
    }
    
    localStorage.setItem("productsInCart", JSON.stringify
    (cartItems));
}

function totalCost(product){
    // console.log("The prduct price is", product.price);
    let cartCost= localStorage.getItem('totalCost');

    console.log("My cartCost is",cartCost);
    console.log(typeof cartCost);

    if(cartCost != null){
        cartCost= parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + 
        product.price);
    } else{
        localStorage.setItem("totalCost",product.price);
    }
    
}

    // function displayCart(){
    //     let cartItems= localStorage.getItem("productsInCart");// from application
    //     cartItems= JSON.parse(cartItems);
    //     let productContainer = document.querySelector(".product-container"); //css html div class
    //     if (cartItems && productContainer){ 
            
    //         productContainer.innerHTML ='';
    //         Object.values(cartItems).map(item =>{
    //             productContainer.innerHTML += 
              
    //          });
    //     }
    // }

onLoadCartNumbers();
// displayCart();