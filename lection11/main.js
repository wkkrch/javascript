fetch('https://dummyjson.com/carts?limit=50')
    .then(response => response.json())
    .then(({carts}) => {
        const blockCarts = document.createElement('div');
        blockCarts.id = 'blockCarts';
        for (const cart of carts) {
            console.log(cart);
            const blockForCart = document.createElement('div');
            blockForCart.classList.add('blockForCart');
            const info = document.createElement('div');
            info.classList.add('information');
            const h3 = document.createElement('h3');
            h3.innerText = ` Id: ${cart.id} - userID: ${cart.userId}`;
            const p1 = document.createElement('p');
            p1.innerText = `discountedTotal: ${cart.discountedTotal}`;
            const p2 = document.createElement('p');
            const p3 = document.createElement('p');
            const p4 = document.createElement('p');
            p2.innerText = `total: ${cart.total}`;
            p3.innerText = `totalProducts: ${cart.totalProducts}`;
            p4.innerText = `totalQuantity: ${cart.totalQuantity}`;
            const br = document.createElement('p');
            br.innerText = `____________________________________`
            const blockForProduct = document.createElement('div');
            blockForProduct.classList.add('blockForProduct');
            for (const product of cart.products) {
                const productDiv = document.createElement('div');
                productDiv.classList.add('productDiv');
                const p11 = document.createElement('p');
                const p12 = document.createElement('p');
                const p13 = document.createElement('p');
                const p14 = document.createElement('p');
                const p15 = document.createElement('p');
                const p16 = document.createElement('p');
                const p17 = document.createElement('p');
                p11.innerText = `id: ${product.id}`;
                p12.innerText = `discountPercentage: ${product.discountPercentage}`;
                p13.innerText = `discountedTotal: ${product.discountedTotal}`;
                p14.innerText = `quantity: ${product.quantity}`;
                p15.innerText = `price: ${product.price}`;
                p16.innerText = `total: ${product.total}`;
                p17.innerText = `title: ${product.title}`;
                const img = document.createElement('img');
                img.src = `${product.thumbnail}`;
                productDiv.append(p11, p12, p13, p14, p15, p16, p17, img);
                blockForProduct.appendChild(productDiv);
            }
            info.append(h3, p1, p2, p3, p4, br);
            blockForCart.append(info, blockForProduct);
            blockCarts.appendChild(blockForCart);
        }
        document.body.appendChild(blockCarts);

    });