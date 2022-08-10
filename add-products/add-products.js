const productid = document.getElementById('productid');
const name = document.getElementById('name');
const price = document.getElementById('price');
const quantity = document.getElementById('quantity');
const img_src = document.getElementById('img_src');


function sub(event)
{    
    event.preventDefault();
 
    console.log("hiiiii");
    let productData = {
        productid:productid.value , name : name.value, price:price.value , quantity:quantity.value, img_src:img_src.value,

    }
    axios.post('http://localhost:9000/cartitems',productData)
    .then((res)=> {
        swal(
            'Good job!',
            'Successfully saved in database!',
            'success'
          )
    })  
    .catch((err)=> {
        swal({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href="">Why do I have this issue?</a>',
            timer: 2500
          })
    })
}