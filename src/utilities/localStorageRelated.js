

const addToLocalStorage=(productId)=>{
    //console.log('clicked product id:', productId)
    let cart
    //local storage thekey key provide korey ta stringify-value get kortese
    const storedCart=localStorage.getItem('cart-items')
    if(storedCart){
        cart=JSON.parse(storedCart)
    }
    else{
        cart={}
    }

    //particular productId ar against a quantity set and jodi agey thekey particular productId ar item 'cart-items' a thakey tahley tar quantity increse hobey
    let itemQuantity=cart[productId]
    if(itemQuantity){
        let newQuantity=itemQuantity+1
        cart[productId]=newQuantity
    }
    else{
        cart[productId]=1
    }

    //local storage a cart obj k set korbo
    localStorage.setItem('cart-items',JSON.stringify(cart))
}

export {addToLocalStorage}