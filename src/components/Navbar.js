import React, { useState, useEffect } from "react";
import cart from "../cart.png";

function Navbar({ itemsInCart }) {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => {
        setCategories([...json]);
      });
  }, []);
  return (
    <header>
      <div className="bg-gradient-to-r from-gray-500 via-red-500 to-gray-500 flex md:flex-grow lg:flex-grow justify-between pt-2">
        <a
          className="m-4 text-2xl font-extrabold text-white"
          href="/"
          id="home"
        >
          Store~Front
        </a>
        <div className="p-2 m-1 flex">
          <img src={cart} className="h-10 w-8" />
          <p className="text-lg">{itemsInCart}</p>
        </div>
      </div>
      <div className="bg-gradient-to-r from-gray-200 to-gray-100 flex flex-row justify-evenly items-center">
        {categories.map((item) => {
          return (
            <a
              href="/"
              className="text-xs hover:animate-bounce duration-700 p-2 mx-2 hover:text-lg hover:text-gray-600 md:text-lg lg:text-lg"
            >
              {item}
            </a>
          );
        })}
      </div>
    </header>
  );
}

export default Navbar;
