import { Plus, Minus } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { useItems } from "../context/ItemsContext";

export const Cart = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } =
    useItems();

  const subtotal = cart.reduce(
    (acc, item) => acc + item.unitPrice * item.quantity,
    0
  );
  const shipping = cart.length > 0 ? 5 : 0;
  const total = subtotal + shipping;

  return (
    <main className="bg-gray-100 min-h-screen mx-auto rounded-lg md:w-1/2">
      <h1 className="text-center font-bold text-3xl md:my-2">Cart</h1>
      {/* if an Item has been selected display this */}
      <div className="flex flex-col">
        {/* Cart Items */}
        {cart.length === 0 ? (
          <p className="text-center text-lg font-semibold my-4">
            Your cart is empty.
          </p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="flex flex-row m-2 ">
              <div className=" flex-1  ">
                <div className="h-20 w-20  bg-white rounded-lg hover:shadow-md">
                  <img
                    className="overflow-hidden p-1 object-cover h-full rounded-lg"
                    src={item.image}
                    alt={item.name}
                  />
                </div>
              </div>
              {/* item details */}
              <div className="flex flex-2 px-1 sm:px-2 flex-col justify-center">
                <h2 className="font-semibold">{item.name}</h2>
                <h2 className="text-gray-600 font-semibold">
                  ${item.unitPrice.toFixed(2)}
                </h2>
                <button
                  className="text-start font-bold text-black mt-1  hover:text-red-600 cursor-pointer"
                  onClick={() => removeFromCart(item.id)}
                >
                  Delete
                </button>
              </div>
              {/* operations for sm and above */}
              <div className="max-sm:hidden flex flex-row justify-evenly items-center gap-2 ">
                <button
                  className="bg-gray-400 p-1 hover:bg-blue-600 cursor-pointer rounded-2xl"
                  onClick={() => decreaseQuantity(item.id)}
                >
                  <Minus size={20} />
                </button>
                <p>{item.quantity}</p>
                <button
                  className="bg-gray-400 p-1 hover:bg-blue-600 cursor-pointer rounded-2xl"
                  onClick={() => increaseQuantity(item.id)}
                >
                  <Plus size={20} />
                </button>
              </div>
              {/* operations for sm and below */}
              <div className="sm:hidden flex flex-col justify-evenly items-center gap-2">
                <div className="flex flex-row gap-2">
                  <button
                    className="bg-gray-400 p-1 hover:bg-blue-600 cursor-pointer rounded-2xl"
                    onClick={() => decreaseQuantity(item.id)}
                  >
                    <Minus size={20} />
                  </button>
                  <button
                    className="bg-gray-400 p-1 hover:bg-blue-600 cursor-pointer rounded-2xl"
                    onClick={() => increaseQuantity(item.id)}
                  >
                    <Plus size={20} />
                  </button>
                </div>
                <div className="font-semibold">
                  <p className="text-2xl">{item.quantity}</p>
                </div>
              </div>
            </div>
          ))
        )}
        {/* Order Summary */}
        <div className="flex flex-col m-2">
          <h1 className="text-xl font-bold">Order Summary</h1>
          <div className="flex flex-row text-lg font-semibold justify-between my-2">
            <p className="text-gray-500  ">Subtotal</p>
            <p className="text-black ">${subtotal.toFixed(2)}</p>
          </div>
          <div className="flex flex-row text-lg font-semibold justify-between my-2">
            <p className="text-gray-500  ">Shipping</p>
            <p className="text-black ">${shipping.toFixed(2)}</p>
          </div>
          <div className="flex flex-row text-lg font-semibold justify-between my-2">
            <p className="text-gray-500  ">Total</p>
            <p className="text-black  ">${total.toFixed(2)}</p>
          </div>
        </div>
      </div>

      {/* Always display these */}
      <div className="flex flex-col md:flex-row m-3 gap-3 ">
        <Link
          to="/"
          className="text-center bg-gray-300 p-3 text-xl md:w-1/2 font-bold  rounded-lg"
        >
          Continue Shopping
        </Link>
        {/* hide if there is no item in cart */}
        <button
          className=" bg-blue-600 p-3 text-xl font-bold md:w-1/2 rounded-lg"
          disabled={cart.length === 0}
        >
          Checkout
        </button>
      </div>
    </main>
  );
};
