import React from "react";
import items from "./items.json";

export const Shop = () => {
  return (
    <main className="bg-gray-200 min-h-screen w-full flex flex-col items-center">
      <h1 className="font-bold text-3xl my-2">Shop Items</h1>
      <ul className="grid sm:grid-cols-2 md:rid-cols-3 gap-3">
        {items.map((item) => (
          <li
            className="bg-white p-3 m-4 border rounded-lg hover:shadow-lg h-70 w-70 border-gray-100"
            key={item.id}
          >
            <h2 className="text-xl font-bold text-center">{item.name}</h2>
            <div className="  w-60 h-40 my-2 flex items-center justify-center">
              <img
                src={item.image}
                alt={item.name}
                width="150"
                className=" object-cover "
              />
            </div>
            <div className="flex flex-row justify-between">
              <p className="text-lg font-semibold">
                Price: ${item.unitPrice.toFixed(2)}
              </p>
              <button className="p-1 px-3 cursor-pointer bg-black hover:bg-blue-600  rounded-md text-white font-semibold">
                Add to cart
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};
