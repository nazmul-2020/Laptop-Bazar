import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Bazar.css'

const Bazar = () => {

    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    console.log(cart);

    const handelAddToCard = (product) => {
        const newCart =[product]
        setCart(newCart);
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
                    <h4>Selected Item</h4>
                    {
                        cart.map((item) => ( <h1>{item.name}</h1>))
                    }
                    <h4><p>Selected Items: {cart.length}  </p></h4>
                </div>
            </div>

    );
};

export default Bazar;