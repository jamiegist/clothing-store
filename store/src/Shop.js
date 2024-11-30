import React, { useState } from 'react';
import { FaCartPlus, FaTrashAlt } from 'react-icons/fa';

export default function Shop() {
 // Product data
 const products = [
    {id: 1, name: 'White Shirt', price: 25, image: './images/shirt.webp'},
    {id: 2, name: 'Pink Shirt', price: 25, image: './images/pink-shirt.webp'},
    {id: 3, name: 'Black Suit', price: 100, image: './images/black-suit.webp'},
    {id: 4, name: 'Green Sneakers', price: 75, image: './images/green-sneakers.webp'},
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
<div className="min-h-screen bg-white text-white p-4">
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold mb-4 text-green-600
                text-center">Shop</h1>

                {/* Product List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
                gap-6 mb-8">
                    {products.map((product) => (
                        <div key={product.id} className="border p-4 rounded-lg
                        shadow-lg hover:shadow-2xl transition-shadow duration-200">
                            <img src={product.image} alt={product.name}
                            className="h-40 w-full object-cover mb-4 rounded-lg" />
                            <h2 className="text-lg font-semibold mb-2 text-white">
                            {product.name}</h2>
                            <p className="text-green-600 font-semibold">$
                            {product.price}</p>
                            <button
                                onClick={() => addToCart(product)}
                                className="mt-3 bg-green-600 text-white px-4
                                py-2 rounded-lg flex items-center gap-2
                                hover:bg-green-700 transition-colors"
                            >
                                <FaCartPlus /> Add to Cart
                            </button>
                        </div>
                    ))}
                </div>

                {/* Cart Section */}
                <div className="border p-4 rounded-lg shadow-lg bg-green-500">
                    <h2 className="text-2xl font-bold mb-4 text-white">Your Cart</h2>
                    {cartItems.length === 0 ? (
                        <p className='text-white'>Your cart is empty</p>
                    ) : (
                        <>
                            {cartItems.map((item) => (
                                <div key={item.id} className="flex justify-between
                                items-center my-4 border-b pb-4">
                                    <img src={item.image} alt={item.name}
                                    className="h-20 w-20 object-cover rounded-lg" />
                                    <div className="flex flex-col">
                                        <h3 className="text-lg font-semibold">
                                        {item.name}</h3>
                                        <p className="text-white font-semibold">
                                        ${item.price}</p>
                                        <div className="flex items-center gap-2 mt-2">
                                            <button
                                                onClick={() => updateQuantity
                                                (item.id, item.quantity - 1)}
                                                className="bg-white px-2 py-1
                                                rounded text-green-600"
                                            >
                                                -
                                            </button>
                                            <span>{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity
                                                (item.id, item.quantity + 1)}
                                                className="bg-white px-2 py-1
                                                rounded text-green-600"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                    <button onClick={() => removeFromCart(item.id)}
                                    className="text-white">
                                        <FaTrashAlt size={20} />
                                    </button>
                                </div>
                            ))}
                            <div className="flex justify-between items-center mt-6">
                                <h3 className="text-xl font-bold text-white">Total:</h3>
                                <span className="text-xl font-bold text-white">$
                                {total.toFixed(2)}</span>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
