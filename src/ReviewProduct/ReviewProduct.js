import React from 'react';
import './ReviewProduct.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ReviewProduct = ({ product, deleteFromCart }) => {
  const { name, img, price, quantity, shipping, id } = product
  return (
    <div className='review-products-container'>
      <div>
        <img src={img} alt="" />
      </div>
      <div className='review-details-container'>
        <div className="review-details">
          <p>{name}</p>
          <p><small>Price: ${price}</small></p>
          <p><small>Shipping: ${shipping}</small></p>
          <p><small>Quantity: {quantity}</small></p>
        </div>
        <div className="delete-container">
          <button onClick={() => deleteFromCart(id)} className='btn-delete'>
            <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewProduct;