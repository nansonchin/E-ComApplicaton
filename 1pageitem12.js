let carts = document.querySelectorAll('.add-cart');


let products = [
    
    {   
        name:'TUF GAMING LC 240 RGB ZAKU II//AIO COOLER, RGB FAN, AURASYNC',
        tag:'computer12',
        price: 599.00,
        inCart:0
    },
    {   
        name:'QKZ Earphones Hi-Res In-Ear Earphone',
        tag:'computer13',
        price: 16.00,
        inCart:0
    },
    {   
        name:'MSI GK-701 MECHANICAL GAMING KEYBOARD',
        tag:'computer14',
        price: 508.00,
        inCart:0
    },
    {   
        name:'ARGB Light Graphics Support Magnetic Headset Holder Stand',
        tag:'computer15',
        price: 42.59,
        inCart:0
    },
    {   
        name:'Logitech G502',
        tag:'computer16',
        price: 420.00,
        inCart:0
    },
    {   
        name:'Genshin Led',
        tag:'computer17',
        price: 12.00,
        inCart:0
    },
    {   
        name:'SONICGEAR Titan 7 Speaker',
        tag:'computer18',
        price:  119.00,
        inCart:0
    },
    {   
        name:'Acer Nitro 5',
        tag:'computer19',
        price: 4399.00,
        inCart:0
    },
    {   
        name:'Fate Stay Night Mouse Pad',
        tag:'computer20',
        price: 43.00,
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