const cart_items = document.querySelector('#cart .cart-items');


const parentContainer = document.getElementById('EcommerceContainer');
parentContainer.addEventListener('click',(e)=>{

    if (e.target.className=='shop-item-button'){
        const id = e.target.parentNode.parentNode.id
        console.log('id',id);
        const name = document.querySelector(`#${id} h3`).innerText;
        console.log('name',name);
        const img_src = document.querySelector(`#${id} img`).src;
        console.log('imgsrc',img_src)
        const price = e.target.parentNode.firstElementChild.firstElementChild.innerText;
        console.log('price',price);
        
        let total_cart_price = document.querySelector('#total-value').innerText;
        console.log('totalcart price',total_cart_price);
        if (document.querySelector(`#in-cart-${id}`)){
            document.querySelector('.cart-number').innerText = parseInt(document.querySelector('.cart-number').innerText)+1
            document.querySelector(`#in-cart-${id} input`).value=parseInt(document.querySelector(`#in-cart-${id} input`).value)+1;
            console.log(document.querySelector(`#in-cart-${id} input`).value);
            console.log('tottalllllll',parseFloat(total_cart_price)+parseFloat(price));
            total_cart_price=parseFloat(total_cart_price)+parseFloat(price);
            document.querySelector('#total-value').innerText = `${total_cart_price}`;
            console.log(`#in-cart-${id}`);
          //  alert('This item is already added to the cart');
            return
        }
    console.log('cart value',document.querySelector('.cart-number').innerText);
        document.querySelector('.cart-number').innerText = parseInt(document.querySelector('.cart-number').innerText)+1
        console.log(document.querySelector('.cart-number'));
        const cart_item = document.createElement('div');
        cart_item.classList.add('cart-row');
        cart_item.setAttribute('id',`in-cart-${id}`);
        console.log('cart_item',cart_item);
        total_cart_price = parseFloat(total_cart_price) + parseFloat(price)
        console.log(total_cart_price);
        // total_cart_price = total_cart_price.toFixed(2)
        // console.log('total cart price',total_cart_price);
        document.querySelector('#total-value').innerText = `${total_cart_price}`;
        console.log(document.querySelector('#total-value').innerText);
        cart_item.innerHTML = `
        <span class='cart-item cart-column'>
        <img class='cart-img' src="${img_src}" alt="">
            <span>${name}</span>
    </span>
    <span class='cart-price cart-column'>${price}</span>
    <span class='cart-quantity cart-column' id='cart-quantity'>
        <input type="text" value="1">
        <button>REMOVE</button>
    </span>`
    console.log('appendend',cart_item)
        cart_items.appendChild(cart_item)
        console.log('cart items',cart_items);

        const container = document.getElementById('container');
        const notification = document.createElement('div');
        notification.classList.add('notification');
        notification.innerHTML = `<h4>Your Product : <span>${name}</span> is added to the cart<h4>`;
        container.appendChild(notification);
        setTimeout(()=>{
            notification.remove();
        },2500)

    }
    
    if (e.target.className=='cart-btn-bottom' || e.target.className=='cart-bottom' || e.target.className=='cart-holder'){
        document.querySelector('#cart').style.display = "block";
    }
    if (e.target.className=='cancel'){
        document.querySelector('#cart').style = "display:none;"
    }
    if (e.target.className=='purchase-btn'){
        if (parseInt(document.querySelector('.cart-number').innerText) === 0){
            alert('You have Nothing in Cart , Add some products to purchase !');
            return
        }
        alert('Thanks for the purchase')
        cart_items.innerHTML = ""
        document.querySelector('.cart-number').innerText = 0
        document.querySelector('#total-value').innerText = `0`;
    }

    if (e.target.innerText=='REMOVE'){
     
        console.log(e.target.parentNode.firstElementChild.value);
        if(parseInt(e.target.parentNode.firstElementChild.value)>1)
        {
            let total_cart_price = document.querySelector('#total-value').innerText;
            let quantity=e.target.parentNode.firstElementChild.value;
            document.querySelector('.cart-number').innerText = parseInt(document.querySelector('.cart-number').innerText)-quantity;
            let removevalue=(quantity*parseFloat(document.querySelector(`#${e.target.parentNode.parentNode.id} .cart-price`).innerText).toFixed(2));
            total_cart_price = parseFloat(total_cart_price).toFixed(2) - removevalue ;
            document.querySelector('#total-value').innerText = `${total_cart_price.toFixed(2)}`
            e.target.parentNode.parentNode.remove()
        }
        
        let total_cart_price = document.querySelector('#total-value').innerText;
        total_cart_price = parseFloat(total_cart_price).toFixed(2) - parseFloat(document.querySelector(`#${e.target.parentNode.parentNode.id} .cart-price`).innerText).toFixed(2) ;
        document.querySelector('.cart-number').innerText = parseInt(document.querySelector('.cart-number').innerText)-1
        document.querySelector('#total-value').innerText = `${total_cart_price.toFixed(2)}`
        e.target.parentNode.parentNode.remove()
    }
})

window.addEventListener('DOMContentLoaded', () => {
    axios.get('http://localhost:9000/cartitems').then((data)=> {
        console.log(data.data);
        if(data.request.status === 200)
        {
            const products = data.data;
            console.log("hi");
            const parentSection = document.getElementById('Products');
            products.forEach(product => {
                const productHtml = `
                <div> 
                <h1>${product.productid}</h1>
                <img src=${product.img_src}></img>
                <button>Add To Cart</button>
                </div>`
                parentSection.innerHTML += productHtml;
            })
        }
    })
})
const purchase = document.getElementById("purchase-btn_id");
purchase.addEventListener('click', ()=> {
    axios.post('http://localhost:9000/myorders',data.data)
    
})