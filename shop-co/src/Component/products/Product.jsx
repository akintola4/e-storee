import { IoMdCheckmark } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6"
import Cart from "../cart/Cart";

import { useNavigate, useParams } from "react-router-dom"
import products from '../products'

import { IoClose } from "react-icons/io5";
import ReadOnlyStarRating from '../Star';

import { useContext, useState } from 'react';
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
export default function product() {

    const { addToCart, cartItems,minusFromCart, removeFromCart} = useContext(ShopContext)

    //this allows us to collect the id from the url
    const params = useParams()
    const productId = params.productId

    const cartAmount = cartItems[productId]
    // const id = Number(productId)
    // console.log(typeof(id))
    //this stores the data from the products js file
    let data = products

    //this allows us to find the data for the id we are looking for
    let productNeeded = data.find((p) =>
        p.id === parseInt(productId)
    );
    //to show an order confirmation modal
    const [showModal, setShowModal] = useState(false);

    const [showTag1, setShowTag1] = useState(false);
    const [showTag2, setShowTag2] = useState(false);
    const [showTag3, setShowTag3] = useState(false);

    const handleClick1 = () => {
        setShowTag1(true);
        setShowTag2(false);
        setShowTag3(false);
    };

    const handleClick2 = () => {
        setShowTag1(false);
        setShowTag2(true);
        setShowTag3(false);
    };

    const handleClick3 = () => {
        setShowTag1(false);
        setShowTag2(false);
        setShowTag3(true);
    };
    return (
        <section className='flex flex-col items-center gap-5 mx-5 md:mx-10 md:flex-row' key={productNeeded.id}>
            <div className='items-center justify-center hidden gap-5 fle x-row md:flex md:flex-col md:w-2/12'>
                <img src={`/img/${productNeeded.img}`} className='w-3/12 cursor-pointer md:w-8/12 rounded-2xl hover:border-black hover:border-2' alt="" />
                <img src={`/img/${productNeeded.img1}`} className='w-3/12 cursor-pointer md:w-8/12 rounded-2xl hover:border-black hover:border-2' alt="" />
                <img src={`/img/${productNeeded.img2}`} className='w-3/12 cursor-pointer md:w-8/12 rounded-2xl hover:border-black hover:border-2' alt="" />
            </div>

            <div className='md:w-4/12'>
                <img src={`/img/${productNeeded.img}`} className='' alt="" />
            </div>
            <div className='flex flex-row items-center justify-center gap-5 md:hidden md:flex-col md:w-2/12'>
                <img src={`/img/${productNeeded.img}`} className='w-3/12 cursor-pointer md:w-8/12 rounded-2xl hover:border-black hover:border-2' alt="" />
                <img src={`/img/${productNeeded.img}`} className='w-3/12 cursor-pointer md:w-8/12 rounded-2xl hover:border-black hover:border-2' alt="" />
                <img src={`/img/${productNeeded.img}`} className='w-3/12 cursor-pointer md:w-8/12 rounded-2xl hover:border-black hover:border-2' alt="" />
            </div>


            <div className='flex flex-col gap-5 md:w-6/12 md- md:flex-col'>
                <h4 className="text-2xl font-extrabold md:text-4xl" >{productNeeded.title}
                </h4>
                <div className='flex flex-row items-center gap-5'>
                    {/* this should be dynamic: it will be implemented after the page is built  */}
                    <ReadOnlyStarRating rating={productNeeded.rating} />
                    <p className="text-sm rating md:text-lg text-zinc-500">{productNeeded.rating}/5 </p>
                </div>
                <div className='flex flex-row items-center gap-5'>
                    <p className="text-sm font-bold rating md:text-2xl">${productNeeded.price} </p>
                    {productNeeded.previousPrice === null || productNeeded.previousPrice === "" || productNeeded.previousPrice === 0 ? (
                        <p className='hidden'></p>
                    ) : (
                        <p className="text-sm font-bold rating md:text-2xl text-zinc-400">{productNeeded.previousPrice}</p>
                    )}

                    {productNeeded.perOff === null || productNeeded.perOff === 0 ? (
                        <p className='hidden'></p>
                    ) : (
                        <p className="p-2 text-sm text-red-500 bg-red-100 rounded-full md:text-md">{productNeeded.perOff}</p>
                    )}


                </div>
                <p className="text-sm rating md:text-sm text-zinc-400">{productNeeded.description}</p>
                <div className='flex flex-col gap-5 p-2 border-y-2'>
                    <p className='text-sm rating md:text-sm text-zinc-400'>Select Color</p>
                    <div className='flex flex-row gap-5'>
                        <button href="" className='w-10 p-3 text-center text-white rounded-full bg-stone-700' onClick={handleClick1}>{showTag1 && <IoMdCheckmark />} </button>
                        <button href="" className='w-10 p-3 text-center text-white bg-gray-700 rounded-full ' onClick={handleClick2}> {showTag2 && <IoMdCheckmark />}</button>
                        <button href="" className='w-10 p-3 text-center text-white rounded-full bg-slate-700' onClick={handleClick3}> {showTag3 && <IoMdCheckmark />}</button>
                    </div>

                </div>
                <div className='flex flex-col gap-5 p-2 border-b-2'>
                    <p className='text-sm rating md:text-sm text-zinc-400'>Choose Size</p>
                    <div className='flex flex-row gap-5'>
                        <button className="p-2 text-xs text-center text-black border-2 rounded-full cursor-pointer md:text-sm md:p-3 border-zinc-200 bg-zinc-200 hover:bg-zinic-600 focus:bg-black focus:text-white"
                            href=""> Small</button>
                        <button className="p-2 text-xs text-center text-black border-2 rounded-full cursor-pointer md:text-sm md:p-3 border-zinc-200 bg-zinc-200 hover:bg-zinic-600 focus:bg-black focus:text-white"
                            href=""> Medium</button>
                        <button className="p-2 text-xs text-center text-black border-2 rounded-full cursor-pointer md:text-sm md:p-3 border-zinc-200 bg-zinc-200 hover:bg-zinic-600 focus:bg-black focus:text-white"
                            href=""> Large</button>
                        <button className="p-2 text-xs text-center text-black border-2 rounded-full cursor-pointer md:text-sm md:p-3 border-zinc-200 bg-zinc-200 hover:bg-zinic-600 focus:bg-black focus:text-white"
                            href=""> X-Large</button>
                    </div>

                </div>
                <div className='flex flex-col gap-5 p-2'>
                    <div className='flex flex-row gap-5'>
                        <div className="flex flex-row items-center justify-between w-4/12 p-2 text-center text-black border-2 rounded-full cursor-pointer md:text-2xl md:p-2 border-zinc-200 bg-zinc-200"
                            href="">
                            <FaMinus onClick={() =>  minusFromCart(productNeeded.id)}/>
                            {/* this will will change dynamically on the onclick */}


                            <p>{cartAmount}</p>

                            <FaPlus  onClick={() =>  addToCart(productNeeded.id)}/>
                        </div>
                        <button className="w-10/12 p-2 text-center text-white bg-black border-2 border-black rounded-full cursor-pointer md:w-8/12 hover:border-black hover:border-2 hover:bg-white hover:text-black hover:bg-zinic-600"
                            href=""
                            type="button"
                            onClick={() => setShowModal(true)}> Add to Cart
                        </button>

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
                                                    Product in the cart
                                                </h5>
                                                <button
                                                    className="text-2xl text-zinic-600"
                                                    onClick={() => setShowModal(false)}
                                                >
                                                    <IoClose />
                                                </button>
                                            </div>
                                            <div className='flex flex-col items-center gap-2 p-5 text-center'>
                                                <IoMdCheckmark className="p-3 text-5xl border-2 border-black rounded-full text-zinic-600" />

                                                <h4 className='text-lg font-bold md:text-2xl'>Order Succssful</h4>
                                                <p className='text-sm md:text-md text-zinc-700'>Order has been added to cart</p>
                                            </div>
                                            <Link
                                                className="p-2 text-center text-white bg-black border-2 border-black rounded-full cursor-pointer hover:border-black hover:border-2 hover:bg-white hover:text-black hover:bg-zinic-600"
                                                type="button"
                                                to={"../cart"}
                                                onClick={() => setShowModal(false)}
                                            >
                                                Close
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : null}
                    </div>


                </div>
            </div>
        </section>
    )

}