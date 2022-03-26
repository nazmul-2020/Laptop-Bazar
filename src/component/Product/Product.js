import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = ({product}) => {
    // console.log(props);
    const {name, img, price} = product

     const handelAddToCard = (product) => {
        console.log(product);
    }

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h3>Name : {name}</h3>
                <p>Price : {price}</p>
                <button onClick={ () => handelAddToCard()} className='btn'><p className='btn-text'>Add To Cart </p> 
                <FontAwesomeIcon icon ={faShoppingCart}></FontAwesomeIcon>
                </button>
            </div>

        </div>
    );
};

export default Product;