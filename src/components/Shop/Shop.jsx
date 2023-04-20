import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart , setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[]);

    useEffect( ()=>{
        const storedCart = getShoppingCart();
        // step 1 get id
        for(const id in storedCart){
            // step 2 get product by using id
            const savedProduct = products.find(product => product.id === id);
            if(savedProduct){
                // step 3 set quantity
                const quantity = storedCart[id];
                products.quantity = quantity;
                console.log(savedProduct);
            }
        }
    },[products])

    const handleAddToCart = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
        // add to local storage
        addToDb(product.id);
    }

    return (
        <div className='shop-container'>

            <div className="products-container">
                {
                    products.map(product => <Product 
                         key={product.id}
                         product={product}
                         handleAddToCart={handleAddToCart}
                         ></Product>)
                }
            </div>
            <div className="cart-container">
               <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Shop;