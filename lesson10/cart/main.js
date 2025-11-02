let products = [
    {title: 'tomato', price: 200, img: 'productsImage/tomato250.jpg'},
    {title: 'tomato', price: 180, img: 'productsImage/tomato250.jpg'},
    {title: 'tomato', price: 220, img: 'productsImage/tomato250.jpg'},
    {title: 'tomato', price: 210, img: 'productsImage/tomato250.jpg'},
    {title: 'tomato', price: 205, img: 'productsImage/tomato250.jpg'},
    {title: 'tomato', price: 240, img: 'productsImage/tomato250.jpg'},
    {title: 'tomato', price: 195, img: 'productsImage/tomato250.jpg'}
];
const blockForProducts = document.createElement('div');
blockForProducts.classList.add('blockForProducts');
for (const product of products) {
    const productDiv = document.createElement('div');
    const h2 = document.createElement('h2');
    h2.innerText = `${product.title} - ${product.price}`;
    const image = document.createElement('img');
    image.src = product.img;
    const button = document.createElement('button');
    button.innerText = 'add to cart';
    productDiv.append(h2, image, button);
    button.onclick = function (){
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
    }
    blockForProducts.appendChild(productDiv);
}
document.body.appendChild(blockForProducts);