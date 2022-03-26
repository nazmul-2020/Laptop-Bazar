import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Bazar.css'

const Bazar = () => {

    const [products, setProducts] = useState([])
    // const [cart, setCart] = useState([])

    // const handelAddToCard = (product) => {
    //     console.log(product);
    // }

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
                        ></Product>)
                }
            </div>

                <div className='cart-container'>
                <h4>Order Summary</h4>
                </div>

        </div>

    );
};

export default Bazar;