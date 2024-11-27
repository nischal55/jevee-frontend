
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateCartQuantity } from "../Redux/Slice/cartSlice";

const Cart = () => {
  // const cart = useSelector((state) => state.cart.cart || []); // Fallback to an empty array
  let cart = [
    {
      id: 1,
      name: "Product 1",
      price: 1500,
      discountPrice: 1200,
      discountPercentage: 20,
      quantity: 2,
      image: "https://example.com/product1.webp",
      color: "Red",
      size: "M",
      inclusiveTax: true,
    },
    {
      id: 2,
      name: "Product 2",
      price: 2000,
      discountPrice: 1800,
      discountPercentage: 10,
      quantity: 1,
      image: "https://example.com/product2.webp",
      color: "Blue",
      size: "L",
      inclusiveTax: false,
    },
  ];
  const dispatch = useDispatch();
  console.log(cart)
  console.log(typeof (cart))
  console.log(Array.isArray(cart))
  // Calculate total amount
  const calculateTotal = () =>
    Array.isArray(cart)
      ? cart.reduce((total, item) => total + item.price * item.quantity, 0)
      : 0;

  // Calculate total discount
  const calculateDiscount = () =>
    Array.isArray(cart)
      ? cart.reduce(
        (discount, item) =>
          discount + (item.price - item.discountPrice) * item.quantity,
        0
      )
      : 0;

  // Handle quantity change
  const handleQuantityChange = (id, delta) => {
    const item = cart.find((i) => i.id === id);
    if (item) {
      const newQuantity = item.quantity + delta;
      if (newQuantity > 0) {
        dispatch(updateCartQuantity({ id, quantity: newQuantity }));
      }
    }
  };

  // Handle remove item
  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl mb-6">Your Shopping Cart</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Product List */}
        <div className="flex-grow">
          {Array.isArray(cart) && cart.length > 0 ? (
            cart.map((item) => (
              <div key={item.id || item.name} className="flex items-center gap-4 mb-4">
                <input type="checkbox" className="w-6 h-6 rounded-md" />
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-md"
                />
                <div className="flex-grow">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <div className="flex space-x-2 items-center">
                    <button
                      onClick={() => handleQuantityChange(item.id, -1)}
                      className="p-2 text-xl"
                    >
                      -
                    </button>
                    <span className="text-lg">{item.quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(item.id, 1)}
                      className="p-2 text-xl"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="text-right">
                  <span className="line-through text-gray-500">
                    NPR {item.price.toFixed(2)}
                  </span>
                  <p>-{item.discountPercentage}%</p>
                  <strong className="text-green-700">
                    NPR {item.discountPrice.toFixed(2)}
                  </strong>
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="text-red-500 hover:underline mt-2"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-1/3 bg-white p-6 shadow-md rounded-md">
          <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>
          <div className="text-sm space-y-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>NPR {calculateTotal().toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Discount</span>
              <span>- NPR {calculateDiscount().toFixed(2)}</span>
            </div>
            <div className="flex flex-col py-5">
              <div className="flex justify-between p-5">
                <i className="bi bi-exclamation-circle text-2xl mr-2"></i>
                <p>
                  Delivery charge may vary depending on the shipping address of
                  your order.
                </p>
              </div>
              <p className="self-end">&#91; inclusive of all tax &#93;</p>
            </div>
          </div>
          <div className="text-lg font-bold flex justify-between mt-4">
            <span>Total</span>
            <span>
              NPR {(calculateTotal() - calculateDiscount()).toFixed(2)}
            </span>
          </div>
          <button
            className={`w-full mt-6 py-2 rounded-md font-medium ${cart.length === 0
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-pink-600 text-white hover:bg-pink-700"
              }`}
            disabled={cart.length === 0}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
