
import React from 'react'
import { RiDeleteBinFill } from "react-icons/ri";

import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import products from "../products";
import { ShopContext } from '../context/ShopContext';
import { useContext } from 'react';

export default function CartSingle(props) {

  const items = props.data;
  const { cartItems, addToCart, minusFromCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="cartItem">
      <div className="flex flex-col items-center gap-5 pb-5 border-b-2 md:flex-row">
        <img src={`img/${items.img}`} className="w-6/12 md:w-2/12 lg:w-2/12" alt="" />
        <div className="flex flex-col items-center justify-between gap-5 md:w-10/12 md:gap-10 md:flex-row">
          <div className="flex flex-col gap-2 md:w-8/12">

            <h4 className="font-bold text-md ">{items.title}</h4>

            <p className="text-light text-zinc-500">Size: {items.size}</p>

            <h4 className="text-xl font-bold ">${items.price}</h4>
          </div>
          <div className="flex flex-row items-center justify-between md:w-4/12 md:items-end md:flex-col">

            <div className="flex flex-row items-center justify-between w-full gap-5 p-3 text-center text-black border-2 rounded-full cursor-pointer md:p-2 border-zinc-200 bg-zinc-200"
              href="">
              <FaMinus className='text-2xl' onClick={() => minusFromCart(items.id)} />
              {/* this will will change dynamically on the onclick */}

              <input type="text" className='w-4/12 overflow-hidden text-center bg-transparent'  value={cartItems[items.id]}   onChange={(e) => updateCartItemCount(Number(e.target.value), items.id)} />

              <FaPlus className='text-2xl' onClick={() => addToCart(items.id)} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};