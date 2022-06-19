import React from "react";
import LoadingScreen from '../components/LoadingScreen';

import Item from "../components/Item";

const Home = ({ items, fetchProductByCategory,showLoading}) => {
  return (
    <nav class="bg-white px-2 sm:px-52 py-2.5 rounded ">
      <div class="container flex flex-wrap justify-between items-center mx-auto">
      <LoadingScreen  showLoading={showLoading}/>
        <a href="#" class="flex items-center">
          <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            NEW PRODUCT
          </span>
        </a>

        <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
          <li class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white">
            <button
              className="  font-ibm text-sm"
              onClick={() => fetchProductByCategory("all")}
            >
              All Products
            </button>
          </li>
          <li class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
            
            <button onClick={() => fetchProductByCategory("women's clothing")}>
              Women's
            </button>
          </li>
          <li class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
            
            <button onClick={() => fetchProductByCategory("men's clothing")}>
              Men's
            </button>
          </li>
          <li class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
            
            <button onClick={() => fetchProductByCategory("electronics")}>
              Electronics
            </button>
          </li>
          <li class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
            
            <button onClick={() => fetchProductByCategory("jewelery")}>
              Jewelery
            </button>
          </li>
        </ul>
      </div>

      <div className="w-full bg-slate-50 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-8 place-items-center px-4 py-3 mt-8 relative z-[5]">
        {items &&
          items.map(
            (item) =>  (<Item key={item.id} item={item} />)
          )}
      </div>
      
    </nav>
  );
};

export default Home;
