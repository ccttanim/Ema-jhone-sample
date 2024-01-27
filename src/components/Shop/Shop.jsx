import React, { useEffect, useState } from 'react';
import {addToDb, getShoppingCart} from '../../utilities/fakedb';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);
// show in cart
    useEffect(() => {
        const storedCart = getShoppingCart();
        console.log(storedCart);
    },[])

// For add new product in react use this method
    const handleAddToCart =(product)=>{
        const newCart = [...cart, product];
        setCart(newCart);
        //Localstorage
        addToDb(product.id);
     }

    return (

        <div className='shop-container'>

            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product = {product}
                        handleAddToCart = {handleAddToCart}
                    ></Product> )
                }
            </div> 

            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;