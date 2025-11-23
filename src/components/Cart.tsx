import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart, removeItem, updateQuantity } from "../redux/slice";
import { FaTrash } from "react-icons/fa";

const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state: any) => state.cart.products);

  const handleQuantityChange = (item: any, newQuantity: number) => {
    if (newQuantity < 1) return;
    dispatch(updateQuantity({ id: item.id, quantity: newQuantity }));
  };

  const placeOrder = () => {
    alert("Order Placed!");
    dispatch(clearCart());
  };

  const total = cartProducts.reduce(
    (sum: number, item: any) => sum + item.price * (item.quantity || 1),
    0
  );

  return (
    <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100">
      <div className="p-6 bg-gray-50 border-b border-gray-100">
        <h2 className="text-2xl font-bold text-gray-900">Shopping Cart</h2>
        <p className="text-gray-500 text-sm mt-1">{cartProducts.length} items in your cart</p>
      </div>

      {cartProducts.length === 0 ? (
        <div className="p-12 text-center flex flex-col items-center justify-center">
          <div className="bg-gray-100 p-4 rounded-full mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900">Your cart is empty</h3>
          <p className="text-gray-500 mt-1">Start adding some items to fill it up!</p>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1 p-6">
            <ul className="divide-y divide-gray-100">
              {cartProducts.map((item: any) => (
                <li key={item.id} className="flex gap-6 py-6 group">
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg border border-gray-200">
                    <img
                      src={item.thumbnail || item.image}
                      alt={item.title || item.name}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div className="flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>{item.title || item.name}</h3>
                        <p className="ml-4">${(item.price * (item.quantity || 1)).toFixed(2)}</p>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">{item.brand}</p>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                      <div className="flex items-center border border-gray-300 rounded-lg">
                        <button
                          className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded-l-lg transition-colors"
                          onClick={() => handleQuantityChange(item, (item.quantity || 1) - 1)}
                        >
                          -
                        </button>
                        <span className="px-3 py-1 font-medium text-gray-900 border-x border-gray-300 min-w-[2.5rem] text-center">
                          {item.quantity || 1}
                        </span>
                        <button
                          className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded-r-lg transition-colors"
                          onClick={() => handleQuantityChange(item, (item.quantity || 1) + 1)}
                        >
                          +
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => dispatch(removeItem(item))}
                        className="font-medium text-red-600 hover:text-red-500 flex items-center gap-1 transition-colors"
                      >
                        <FaTrash className="h-4 w-4" />
                        <span>Remove</span>
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-50 p-6 lg:w-96 lg:border-l border-gray-100">
            <h3 className="text-lg font-medium text-gray-900 mb-6">Order Summary</h3>
            <div className="flow-root">
              <dl className="-my-4 divide-y divide-gray-200 text-sm">
                <div className="flex items-center justify-between py-4">
                  <dt className="text-gray-600">Subtotal</dt>
                  <dd className="font-medium text-gray-900">${total.toFixed(2)}</dd>
                </div>
                <div className="flex items-center justify-between py-4">
                  <dt className="text-gray-600">Shipping</dt>
                  <dd className="font-medium text-gray-900">Free</dd>
                </div>
                <div className="flex items-center justify-between py-4">
                  <dt className="text-gray-600">Tax</dt>
                  <dd className="font-medium text-gray-900">${(total * 0.1).toFixed(2)}</dd>
                </div>
                <div className="flex items-center justify-between py-4 border-t border-gray-200">
                  <dt className="text-base font-bold text-gray-900">Order Total</dt>
                  <dd className="text-base font-bold text-indigo-600">${(total * 1.1).toFixed(2)}</dd>
                </div>
              </dl>
            </div>
            <div className="mt-6">
              <button
                onClick={placeOrder}
                className="w-full rounded-lg border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 transition-all"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
