import React, { useState } from 'react';
import { FaCartPlus, FaTrashAlt } from 'react-icons/fa';
import WhiteShirt from './images/shirt.webp';
import PlaidBlazer from './images/plaid-blazer.jpeg';
import PinkShirt from './images/pink-shirt.webp';
import BlackSuit from './images/black-suit.webp';
import GreenSneakers from './images/green-sneakers.webp';
import './Shop.css';

export default function Shop() {
 // Product data
 const products = [
    {id: 1, name: 'White Shirt', price: 45, image: WhiteShirt},
    {id: 2, name: 'Pink Shirt', price: 45, image: PinkShirt},
    {id: 3, name: 'Plaid Blazer', price: 90, image: PlaidBlazer},
    {id: 4, name: 'Black Suit', price: 100, image: BlackSuit},
    {id: 5, name: 'Green Sneakers', price: 75, image: GreenSneakers},
  ];

  // State to manage cart items
  const [cartItems, setCartItems] = useState([]);

  // Add product to cart
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((item) => item.id === product.id);
        if (itemExists) {
          return prevItems.map((item) => item.id === product.id ? {
            ...item, quantity:
            item.quantity + 1 } : item);
          } else {
              return [...prevItems, {
                ...product, quantity: 1
              }];
            }
        });
  };

  // Remove product from the cart
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Update product quantity in the cart
  const updateQuantity = (id, newQuantity) => {
    setCartItems((prevItems) => prevItems.map((item) => item.id === id ? { ...item, quantity: newQuantity > 0 ? newQuantity: 1 } : item)
  );
    };

    // Calculate total price
    const total = cartItems.reduce((acc, item) => acc + item.price *
    item.quantity, 0);

    return (
<div className="shop-container">
            <div className="product-container">
                <h1 className="shop-header">Shop</h1>

                {/* Product List */}
                <div className="products">
                    {products.map((product) => (
                        <div key={product.id} className="product-id">
                            <img src={product.image} alt={product.name}
                            className="product-img" />
                            <h2 className="product-name">
                            {product.name}</h2>
                            <p className="product-price">$
                            {product.price}</p>
                            <button
                                onClick={() => addToCart(product)}
                                className="add-to-cart-button"
                            >
                                <FaCartPlus /> Add to Cart
                            </button>
                        </div>
                    ))}
                </div>

                {/* Cart Section */}
                <div className="cart-container">
                    <h2 className="cart-header">Cart</h2>
                    {cartItems.length === 0 ? (
                        <p className='cart-empty'>Your cart is empty</p>
                    ) : (
                        <>
                            {cartItems.map((item) => (
                                <div key={item.id} className="item-container">
                                    <img src={item.image} alt={item.name}
                                    className="cart-img" />
                                    <div className="cart-content">
                                        <h3 className="cart-item-name">
                                        {item.name}</h3>
                                        <p className="cart-item-price">
                                        ${item.price}</p>
                                        <div className="cart-quantity">
                                            <button
                                                onClick={() => updateQuantity
                                                (item.id, item.quantity - 1)}
                                                className="decrement-item"
                                            >
                                                -
                                            </button>
                                            <span>{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity
                                                (item.id, item.quantity + 1)}
                                                className="increment-item"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                    <button onClick={() => removeFromCart(item.id)}
                                    className="remove-btn">
                                        <FaTrashAlt size={20} />
                                    </button>
                                </div>
                            ))}
                            <div className="cart-total">
                                <h3 className="total">Total:</h3>
                                <span className="dollar-amt">$
                                {total.toFixed(2)}</span>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
