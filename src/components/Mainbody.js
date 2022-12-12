import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";

function Mainbody() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts([...json]);
      });
  }, []);

  const [counter, setCounter] = useState(0);
  function addToCartHandler() {
    setCounter(counter + 1);
  }
  return (
    <>
      <Navbar itemsInCart={counter} />

      <div id="main">
        <a
          href="#home"
          className="rounded-full bg-red-600 w-12 h-12 fixed bottom-0 m-4 text-lg text-white text-center p-2"
        >
          ⌂
        </a>
        <div
          id="container"
          className="flex flex-row flex-wrap md:grid md:grid-cols-1 lg:grid lg:grid-cols-3"
        >
          {products.map((item) => {
            return (
              <div
                id="productHolder"
                className="flex flex-row flex-wrap md:grid md:grid-cols-2 border-2 border-red-400 m-4 p-1 space-x-0 justify-center rounded-sm"
              >
                <div className="box-content h-52 w-40 p-8 border-4 flex justify-center border-gray-500 border-opacity-5 rounded-md">
                  <img src={item.image} />
                </div>
                <div id="product-info" className="grid grid-cols-1 my-3 p-2">
                  <h3 id="product-title" className="text-red-600">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-700 my-3 h-20 overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-white pr-2 overflow-x-hidden">
                    {item.description}
                  </p>
                  <hr className="w-60 bg-gray-800 h-0.5 opacity-50 justify-center items-center mt-2" />
                  <div
                    id="productProcess"
                    className="flex flex-row justify-evenly items-center my-3"
                  >
                    <p className="text-red-500 text-lg">${item.price}</p>
                    <button
                      onClick={addToCartHandler}
                      className="p-2 w-fit h-10 text-red-500 border-2 border-red-500 hover:opacity-75 rounded-sm hover:bg-gradient-to-r from-red-500 via-white to-red-500  hover:text-black hover:animate-pulse"
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Mainbody;
