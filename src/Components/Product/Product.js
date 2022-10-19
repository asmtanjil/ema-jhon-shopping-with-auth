import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'

const Product = ({product, addHandlerToCart}) => {
  // const {product, addHandlerToCart} = props;
  const {name, price, img, seller, ratings} = product;
  return (
    <div className='product'>
      <img src={img} alt="" />

      <div className='product-info'>
      <p className='product-name'>{name}</p>
      <p>Price: ${price}</p>
      <p><small>Seller: {seller}</small></p>
      <p><small>Rating: {ratings}</small></p>
      </div>
      
      <button onClick={() => addHandlerToCart(product)} className='btn-cart'>
        <p className='btn-text'>Add To Cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;