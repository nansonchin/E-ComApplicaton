var removeCartItemButtons = document.getElementsByClassName('remove')
console.log(removeCartItemButtons)  
for(var i=0; i< removeCartItemButtons.length; i++){
    var button = removeCartItemButtons[i]
    button.addEventListener('click', function(event) {
        var buttonCLicked= event.target
        buttonCLicked.parentElement.parentElement.remove()
        updateCartTotal()
    })
}

function updateCartTotal(){
    var layout1Container = document.getElementsByClassName('layout1')[0]
    var layer1 = layout1Container.getElementsByClassName('layer1')
    for(var i=0; i< layer1.length; i++){
        var layer1 = layer1[i]
        var priceElement=layer1.getElementsByClassName('layerprice')[0]
    }
}