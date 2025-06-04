import { Plus, Minus } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export const Cart = () => {
  return (
    <main className="bg-gray-100 min-h-screen mx-auto">
      <h1 className="text-center font-bold text-3xl md:my-2">Cart</h1>
      {/* if an Item has been selected display this */}
      <div className="flex flex-col">
        {/* Cart Items */}
        <div className="flex flex-row m-2 justify-between">
          <div className="h-20 w-20 border border-gray-200 rounded-lg">
            <img
              className="overflow-hidden object-cover h-full rounded-lg"
              src="data:image/jpeg;base64,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"
            />
          </div>
          {/* item details */}
          <div className="flex flex-col justify-center ">
            <h2 className="font-semibold">Organic Avocado</h2>
            <h2 className="text-gray-600 font-semibold">$12.99</h2>
          </div>
          {/* operations for sm and above */}
          <div className="max-sm:hidden flex flex-row justify-evenly items-center gap-2">
            <button className="bg-gray-400 p-1 hover:bg-blue-600 cursor-pointer rounded-2xl">
              <Minus size={20} />
            </button>
            <p>0</p>
            <button className="bg-gray-400 p-1 hover:bg-blue-600 cursor-pointer rounded-2xl">
              <Plus size={20} />
            </button>
          </div>
          {/* operations for sm and below */}
          <div className="sm:hidden flex flex-row justify-evenly items-center gap-2">
            <div className="font-semibold">
              <p className="text-4xl">1</p>
            </div>
            <div className="flex flex-col gap-2">
              <button className="bg-gray-400 p-1 hover:bg-blue-600 cursor-pointer rounded-2xl">
                <Minus size={20} />
              </button>
              <button className="bg-gray-400 p-1 hover:bg-blue-600 cursor-pointer rounded-2xl">
                <Plus size={20} />
              </button>
            </div>
          </div>
        </div>
        {/* Order Summary */}
        <div className="flex flex-col m-2">
          <h1 className="text-xl font-bold">Order Summary</h1>
          <div className="flex flex-row text-lg font-semibold justify-between my-2">
            <p className="text-gray-500  ">Subtotal</p>
            <p className="text-black ">$12.00</p>
          </div>
          <div className="flex flex-row text-lg font-semibold justify-between my-2">
            <p className="text-gray-500  ">Shipping</p>
            <p className="text-black ">$5.00</p>
          </div>
          <div className="flex flex-row text-lg font-semibold justify-between my-2">
            <p className="text-gray-500  ">Total</p>
            <p className="text-black  ">$17.00</p>
          </div>
        </div>
      </div>

      {/* Allways desplay these */}
      <div className="flex flex-col m-3 gap-3">
        <Link
          to="/"
          className="text-center bg-gray-300 p-3 text-xl font-bold  rounded-lg"
        >
          Continue Shopping
        </Link>
        {/* hide if there is no item in cart */}
        <button className=" bg-blue-600 p-3 text-xl font-bold  rounded-lg">
          Checkout
        </button>
      </div>
    </main>
  );
};
