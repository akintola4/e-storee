import { GoTag } from "react-icons/go";
import { RiDeleteBinFill } from "react-icons/ri";

import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { IoClose } from "react-icons/io5"
import { IoMdCheckmark } from "react-icons/io"
import { CiDeliveryTruck } from "react-icons/ci";
import { PaystackButton } from 'react-paystack';

import { useContext } from "react";
import { useState } from "react";
import PRODUCTS from "../products"
import Checkout from "./Checkout";
import { ShopContext } from "../context/ShopContext"
import CartSingle from "./CartSingle";
import { Link } from "react-router-dom";

import { supabase } from '../supabase-context/client'
import { useEffect } from 'react'

export default function Cart() {
    //to show an order confirmation modal
    const [showModal, setShowModal] = useState(false);

    const [discountCode, setDiscountCode] = useState("")
    const [message, setMessage] = useState("")
    const [newTotal, setnewTotal] = useState()
    const { cartItems, getSubtotal, getDiscounttotal, getTotal } = useContext(ShopContext)
    const subTotal = getSubtotal()
    const discount = getDiscounttotal()
    let total = subTotal - discount - 15
    console.log(cartItems)

    const convertedNaira = newTotal * 1400

    const handleCode = (e) => {
        setDiscountCode(e.target.value)
    }

    const handleApply = () => {
        const inputValue = discountCode
        if (inputValue.toLowerCase() == "fola") {
            setMessage("Discount Applied")
            total -= 20
            setnewTotal(total)
            console.log(total)
        } else {
            setMessage("Invalid Code")
            let total = subTotal - discount - 15
            setnewTotal(total)
            console.log(total)
        }
    }
    // if (e.target.value.toLowerCase() == "fola") {
    //     alert("Discount Applied")
    // } else {
    //     alert("Invalid Code")
    // }
    const [email, setemail] = useState('')
    useEffect(() => {
        const getUsername = async () => {
            const { data: { user } } = await supabase.auth.getUser()
            const email = user.email
            setemail(email)
        }
        getUsername();
    }
        , [])

    console.log(email)

    const [fullName, setFullname] = useState('')
    useEffect(() => {
        const getUsername = async () => {
            const { data: { user } } = await supabase.auth.getUser()
            const fullname = `${user.user_metadata.first_name}  ${user.user_metadata.last_name}`
            setFullname(fullname)
        }
        getUsername();
    }
        , [])

        const publicKey = "pk_test_6e4f89def4566a6cf6b6b3bd335016d68473a61b"
        const amount = convertedNaira * 100

        console.log(email)
        const name = fullName
      
        const componentProps = {
            email,
          amount,
          metadata: {
            name,
          },
          publicKey,
          text: "Pay Now",
          onSuccess: () =>
            {setShowModal(true) },
          onClose: () => alert("Wait! Don't leave :("),
        }
        return (
            <div className="pt-20 mx-5 lg:my-20 lg:mx-20">
                <div>
                    <h4 className="py-5 text-4xl font-extrabold">YOUR CART</h4>
                </div>
                <div className="flex flex-col gap-10 lg:flex-row">
                    <div className="flex flex-col gap-10 p-5 border-2 lg:w-8/12 rounded-xl">
                        {PRODUCTS.map((product) => {
                            if (cartItems[product.id] > 0) {
                                return <CartSingle data={product} />;
                            }
                        })}
                        <Checkout />

                    </div>
                    <div className="flex flex-col gap-5 p-5 border-2 lg:w-4/12 rounded-xl">
                        <h4 className="font-bold text-md">Order Summary</h4>
                        <div className="flex flex-col gap-5">
                            <div className="flex flex-row justify-between">
                                <p className="text-md text-zinc-500">Subtotal</p>
                                <h4 className="font-bold text-md"> ${subTotal}</h4>
                            </div>
                            <div className="flex flex-row justify-between">
                                <p className="text-md text-zinc-500">Discount (-20%)</p>
                                <h4 className="font-bold text-red-500 text-md">-${discount}</h4>
                            </div>
                            <div className="flex flex-row justify-between">
                                <p className="text-md text-zinc-500">Delivery Fee</p>
                                <h4 className="font-bold text-md">$15</h4>
                            </div>
                            <div className="flex flex-row justify-between pt-5 border-t-2">
                                <p className="text-md text-zinc-500">Total</p>
                                <h4 className="font-bold text-1xl">${newTotal}</h4>
                            </div>
                        </div>

                        <div className="flex flex-col justify-between w-full gap-5 lg:flex-row">
                            <div>
                                <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Add promo code</label>
                                <div class="relative ">
                                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <GoTag />
                                    </div>
                                    <input value={discountCode} onChange={handleCode} class="  p-3 ps-10 md:w-full text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-black focus:border-black  dark:border-gray-600 dark:placeholder-gray-400  " placeholder="Add promo code" />
                                </div>
                            </div>
                            <button onClick={handleApply}
                                type="submit" className="p-2 text-center text-white bg-black border-2 border-black rounded-full cursor-pointer hover:border-black hover:border-2 hover:bg-white hover:text-black hover:bg-zinic-600"
                                href="">Apply </button>

                        </div>
                        {message ? <p className="text-red-500">{message}</p> : null}

                        {/* <button className="p-2 text-center text-white bg-black border-2 border-black rounded-full cursor-pointer hover:border-black hover:border-2 hover:bg-white hover:text-black hover:bg-zinic-600"
                            href=""
                            type="button"
                            onClick={() => setShowModal(true)}> Pay
                        </button> */}
                        <PaystackButton className="p-2 text-center text-white bg-black border-2 border-black rounded-full cursor-pointer hover:border-black hover:border-2 hover:bg-white hover:text-black hover:bg-zinic-600"
                             {...componentProps}  />
                        {showModal ? (
                            <>
                                <div className="fixed inset-0 z-50 flex justify-end m-5 overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
                                    <div className="relative my-6">
                                        <div className="relative flex flex-col w-full p-5 bg-white border-0 shadow-lg outline-none rounded-xl focus:outline-none">
                                            <div
                                                class="flex flex-shrink-0 items-center justify-between rounded-t-md bg-info-600 gap-20 p-4 dark:border-b dark:border-neutral-500 dark:bg-transparent">
                                                <h5
                                                    class="text-sm md:text-xl font-medium leading-normal "
                                                    id="rightTopModalLabel">
                                                    Product on it way
                                                </h5>
                                                <button
                                                    className="text-2xl text-zinic-600"
                                                    onClick={() => setShowModal(false)}
                                                >
                                                    <IoClose />
                                                </button>
                                            </div>
                                            <div className='flex flex-col items-center gap-2 p-5 text-center'>
                                                <CiDeliveryTruck className="p-3 text-6xl border-2 border-black rounded-full text-zinic-600" />

                                                <h4 className='text-lg font-bold md:text-2xl'>Checkout Succssful </h4>
                                                <p className='text-sm md:text-md text-zinc-700'>Order has been Payed</p>
                                            </div>
                                            <Link
                                                className="p-2 text-center text-white bg-black border-2 border-black rounded-full cursor-pointer hover:border-black hover:border-2 hover:bg-white hover:text-black hover:bg-zinic-600"
                                                type="button"
                                                to={"/"}
                                                onClick={() => setShowModal(false)}
                                            >
                                                Go back Home
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : null}
                    </div>
                </div>
            </div>
        )
    }