import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewProduct from '../../ReviewProduct/ReviewProduct';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';

const Orders = () => {
  const { initialCart } = useLoaderData();
  const [cart, setCart] = useState(initialCart);

  const deleteFromCart = (id) => {
    const remaining = cart.filter(product => product.id !== id);
    setCart(remaining);
    removeFromDb(id);
  }

  const clearCart = () => {
    setCart([]);
    deleteShoppingCart();
  }

  return (
    <div className='shop-container'>
      <div className="orders-container">
        {
          cart.map(product => <ReviewProduct
            key={product.id}
            product={product}
            deleteFromCart={deleteFromCart}
          ></ReviewProduct>)
        }
        {
          cart.length === 0 && <h2>No items for Review. Please <Link to="/">Shop More</Link></h2>
        }
      </div>
      <div className="cart-container">
        <Cart clearCart={clearCart} cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Orders;