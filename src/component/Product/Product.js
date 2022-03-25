import React from 'react';
import './Product.css'

const Product = ({product}) => {
    // console.log(props);
    const {name, img, price} = product
    const handelAddToCard = () => {
        console.log('addd');
    }

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h3>Name :{name}</h3>
                <p>Price :{price}</p>
                <button onClick={handelAddToCard} className='btn'><p>Add To Cart</p></button>
            </div>

        </div>
    );
};

export default Product;