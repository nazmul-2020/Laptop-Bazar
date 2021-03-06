import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Bazar.css'

const Bazar = () => {

    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    // Add cart function
    const handelAddToCard = (product) => {
        const newCart =[...cart, product]
        setCart(newCart);
    }

    // Reset  cart function
    const handelClose =() =>{
        setCart([])
    }

    useEffect(() =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    return (
        <div className='bazar-container'>
            <div className='products-container'>
                {
                    products.map(product => <Product
                        key ={product.id}
                        product = {product}
                        handelAddToCard = {handelAddToCard}
                        ></Product>)
                }
            </div>

                <div className='cart-container'>
                    <h3>Selected Item</h3>
                    {
                        cart.map((item) => ( <h4 key={item.id}>
                            {item.name}
                            </h4>))
                    }
                    <div className='all-btn'>
                        <button >Choose 1 For Me</button>
                        <button onClick={() =>handelClose(setCart)}>Reset Cart</button>
                    </div>
                </div>
            </div>

    );
};

export default Bazar;