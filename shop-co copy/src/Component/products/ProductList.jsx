import data from "../products";

//import the icons needed 
import { VscSettings } from "react-icons/vsc";
import { FaAngleRight } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";
import { IoMdCheckmark } from "react-icons/io";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import ReadOnlyStarRating from '../Star';
import { IoClose } from "react-icons/io5";
import { useState } from "react";

import SearchBar from './SearchBar'
import ProductCard from "./ProductCard";
import Range from "./Range";
import ProductType from "./ProductType";
import Size from "./Size"
import Dress from "./Dress";

export default function ProductList() {
    const [query, setQuery] = useState("");
    const [filteredCards, setFilteredCards] = useState(data);

    const handleSearch = (searchQuery) => {
        setQuery(searchQuery);
        const filtered = data.filter((post) => {
            return post.title.toLowerCase().includes(searchQuery.toLowerCase());
        });
        setFilteredCards(filtered);
    };


    //to show an order confirmation modal
    const [showModal, setShowModal] = useState(false);

    const [filter, setFilter] = useState(0)
    //code for range for price  
    const handleRange = (filter) => {

        setFilter(filter)
        const filtered = data.filter(post => {
            if (filter === 0) {
                return post;
            } else if (post.price == filter || post.price < filter) {
                return post;
            }
        })
        setFilteredCards(filtered);
    }

    //this for the sort 
    const [sort, setSort] = useState("all")
    const sortProduct = (e) => {
        const selectedValue = e.currentTarget.value;
        setSort(selectedValue);
      
        let sorted;
      
        if(selectedValue === "Most Afforable") {
          const low = data.sort((a, b) => a.price - b.price);
          setFilteredCards(low);
        } else if(selectedValue === "Most expensive") {
          const high = data.sort((a, b) => b.price - a.price);  
          setFilteredCards(high);
        } else if(selectedValue === "Most Popular") {
          const ratings = data.sort((a, b) => a.rating - b.rating);
          setFilteredCards(ratings); 
        } else if(selectedValue === "all") {
          setFilteredCards(data);
        } else {
          setFilteredCards(data);
        }
      }
      

    const [cloth, setCloth] = useState("")


    const handleColth = (ProductQuery) => {
        setCloth(ProductQuery);
        const filtered = data.filter((post) => {
            return post.title.toLowerCase().includes(ProductQuery.toLowerCase());
        });
        setFilteredCards(filtered);
    };

    //this shows the code for filter the type of cloth 
    const [dress, setDress] = useState("")


    const handleDress = (ProductQuery) => {
        setDress(ProductQuery);
        const filtered = data.filter((post) => {
            return post.dress.toLowerCase().includes(ProductQuery.toLowerCase());
        });
        setFilteredCards(filtered);
    };


    //this for the size filter 
    const [size, setSize] = useState("")

    const handleSize = (ProductQuery) => {
        setSize(ProductQuery);
        const filtered = data.filter((post) => {
            return post.size.toLowerCase().includes(ProductQuery.toLowerCase());
        });
        setFilteredCards(filtered);
    }

    //

    //     // here shows the code for creating a range slider 
    //     const [filter, setFilter] = useState(0)
    //     console.log(filter)
    //     const filterRange = (e) => {
    //         setFilter(e.target.value)
    //     }
    //     const flitteredCard2 =
    //         data.filter(itemz => {
    //             if (filter === 0) {
    //                 return itemz;
    //             } else if (itemz.price <= filter) {
    //                 return itemz;
    //             }
    //         }
    //        

    return (
        <section className='flex flex-row px-2 pt-20 xl:p-20 md:pt-28' >
            <div className="flex-col items-start hidden w-3/12 p-5 m-5 border-2 rounded-xl md:flex">
                <SearchBar data={data} onSearch={handleSearch} />
                <div className="flex flex-row items-center justify-between w-full py-5 border-b-2">

                    <h4 className="font-bold md:text-lg">Products</h4>
                    <VscSettings className="md:text-lg" />
                </div>
                <ProductType data={data} onType={handleColth} />

                <div className="flex-col items-center justify-between w-full py-5 border-b-2 ">
                    <div className="flex flex-row items-center justify-between">
                        <h4 className="font-bold md:text-lg">Price</h4>
                        <IoIosArrowUp className="md:text-lg" />
                    </div>
                    {/* <div>
                        <input type="range" className="accent-black range" name="filter" onChange={filterRange} min={50} max={5000} value={filter} id="" />
                    </div> */}
                    <Range data={data} onRange={handleRange} />
                    <h4>{filter}</h4>
                </div>
                <Size data={data} onSize={handleSize} />
                <Dress data={data} onDress={handleDress} />

                <a class=" rounded-full p-3 w-full text-center border-black border-2  hover:border-black hover:border-2 cursor-pointer hover:bg-white hover:text-black hover:bg-zinic-600 bg-black text-white " href="">Shop Now </a>
            </div>
            <div className="m-2 md:w-8/12">
                <div className="flex flex-col justify-between gap-2 md:items-center md:flex-row ">
                    <h4 className="hidden font-bold md:flex md:text-3xl">Products</h4>
                    <div className='flex flex-col gap-5 p-2'>
                        <div className="w-full md:hidden">
                            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                            <div class="relative">
                                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <FaMagnifyingGlass />
                                </div>
                                <input type="search" id="search" onChange={event => setQuery(event.target.value)} class=" w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-black focus:border-black  dark:border-gray-600 dark:placeholder-gray-400  " placeholder="Search" required />
                            </div>
                        </div>
                        <div className='flex flex-row justify-between gap-5'>
                            <h4 className="font-bold md:hidden md:text-3xl">Products</h4>
                            <button className="md:hidden"
                                href=""
                                type="button"
                                onClick={() => setShowModal(true)}><VscSettings className="md:text-lg" />
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
                                                        Filters
                                                    </h5>
                                                    <button
                                                        className="text-2xl text-zinic-600"
                                                        onClick={() => setShowModal(false)}
                                                    >
                                                        <IoClose />
                                                    </button>
                                                </div>
                                                <div className="flex-col items-start rounded-xl md:flex">
                                                    <div className="flex flex-col items-center justify-between w-full py-5 border-b-2">
                                                        <div className="flex flex-row items-center justify-between w-full py-2 cursor-pointer">
                                                            <button className="font-light md:text-lg relative text-md  w-fit block hover:text-black after:block after:content-[''] after:absolute after:h-[2px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">T-shirts</button>
                                                            <FaAngleRight className="font-light md:text-lg text-zinc-500" />
                                                        </div>
                                                        <div className="flex flex-row items-center justify-between w-full py-2 cursor-pointer">
                                                            <button className="font-light md:text-lg relative text-md  w-fit block hover:text-black after:block after:content-[''] after:absolute after:h-[2px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">Shorts</button>
                                                            <FaAngleRight className="font-light md:text-lg text-zinc-500" />
                                                        </div>
                                                        <div className="flex flex-row items-center justify-between w-full py-2 cursor-pointer">
                                                            <button className="font-light md:text-lg relative text-md  w-fit block hover:text-black after:block after:content-[''] after:absolute after:h-[2px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">Shirts</button>
                                                            <FaAngleRight className="font-light md:text-lg text-zinc-500" />
                                                        </div>
                                                        <div className="flex flex-row items-center justify-between w-full py-2 cursor-pointer">
                                                            <button className="font-light md:text-lg relative text-md  w-fit block hover:text-black after:block after:content-[''] after:absolute after:h-[2px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">Hoodie</button>
                                                            <FaAngleRight className="font-light md:text-lg text-zinc-500" />
                                                        </div>
                                                        <div className="flex flex-row items-center justify-between w-full py-2 cursor-pointer">
                                                            <button className="font-light md:text-lg relative text-md  w-fit block hover:text-black after:block after:content-[''] after:absolute after:h-[2px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">Jeans</button>
                                                            <FaAngleRight className="font-light md:text-lg text-zinc-500" />
                                                        </div>
                                                    </div>

                                                    <div className="flex-col items-center justify-between w-full py-5 border-b-2 ">
                                                        <div className="flex flex-row items-center justify-between">
                                                            <h4 className="font-bold md:text-lg">Price</h4>
                                                            <IoIosArrowUp className="md:text-lg" />
                                                        </div>
                                                        <div>
                                                            <input type="range" className="accent-black" name="" id="" />
                                                        </div>
                                                    </div>
                                                    <div className="flex-col items-center justify-between w-full py-5 border-b-2 ">
                                                        <div className="flex flex-row items-center justify-between">
                                                            <h4 className="font-bold md:text-lg">Colors</h4>
                                                            <IoIosArrowUp className="md:text-lg" />
                                                        </div>
                                                        <div className='flex flex-row gap-5'>
                                                            <button href="" className='w-10 p-3 text-center text-white rounded-full bg-stone-700' onClick={() => setShowTag1(!showTag1)}>{showTag1 && <IoMdCheckmark />} </button>
                                                            <button href="" className='w-10 p-3 text-center text-white bg-gray-700 rounded-full ' onClick={() => setShowTag2(!showTag2)}> {showTag2 && <IoMdCheckmark />}</button>
                                                            <button href="" className='w-10 p-3 text-center text-white rounded-full bg-slate-700' onClick={() => setShowTag3(!showTag3)}> {showTag3 && <IoMdCheckmark />}</button>
                                                            <button href="" className='w-10 p-3 text-center text-white bg-black rounded-full' onClick={() => setShowTag4(!showTag4)}> {showTag4 && <IoMdCheckmark />}</button>
                                                        </div>
                                                    </div>
                                                    <div className="flex-col items-center justify-between w-full gap-3 py-5 border-b-2 ">
                                                        <div className="flex flex-row items-center justify-between py-2">
                                                            <h4 className="font-bold md:text-lg">Size</h4>
                                                            <IoIosArrowUp className="md:text-lg" />
                                                        </div>
                                                        <div class="grid grid-cols-3 gap-5 ">
                                                            <button class="p-2 text-xs text-center text-black rounded-full cursor-pointer  border-zinc-200 bg-zinc-200 hover:bg-zinic-600 focus:bg-black focus:text-white" href=""> XX-Small</button>
                                                            <button class="p-2 text-xs text-center text-black rounded-full cursor-pointer  border-zinc-200 bg-zinc-200 hover:bg-zinic-600 focus:bg-black focus:text-white" href=""> X-Small</button>
                                                            <button class="p-2 text-xs text-center text-black rounded-full cursor-pointer  border-zinc-200 bg-zinc-200 hover:bg-zinic-600 focus:bg-black focus:text-white" href=""> Small</button>
                                                            <button class="p-2 text-xs text-center text-black rounded-full cursor-pointer  border-zinc-200 bg-zinc-200 hover:bg-zinic-600 focus:bg-black focus:text-white" href=""> Medium</button>
                                                            <button class="p-2 text-xs text-center text-black rounded-full cursor-pointer  border-zinc-200 bg-zinc-200 hover:bg-zinic-600 focus:bg-black focus:text-white" href=""> Large</button>
                                                            <button class="p-2 text-xs text-center text-black rounded-full cursor-pointer  border-zinc-200 bg-zinc-200 hover:bg-zinic-600 focus:bg-black focus:text-white" href=""> X-Large</button>
                                                            <button class="p-2 text-xs text-center text-black rounded-full cursor-pointer  border-zinc-200 bg-zinc-200 hover:bg-zinic-600 focus:bg-black focus:text-white" href=""> XX-Large</button>
                                                            <button class="p-2 text-xs text-center text-black rounded-full cursor-pointer  border-zinc-200 bg-zinc-200 hover:bg-zinic-600 focus:bg-black focus:text-white" href=""> 3X-Large</button>
                                                            <button class="p-2 text-xs text-center text-black rounded-full cursor-pointer  border-zinc-200 bg-zinc-200 hover:bg-zinic-600 focus:bg-black focus:text-white" href=""> 4X-Large</button>
                                                        </div>

                                                    </div>
                                                    <div className="flex-col items-center justify-between w-full py-5 ">
                                                        <div className="flex flex-row items-center justify-between">
                                                            <h4 className="font-bold md:text-lg">Dress Style</h4>
                                                            <IoIosArrowUp className="md:text-lg" />
                                                        </div>
                                                        <div>
                                                            <div className="flex flex-col items-center justify-between w-full py-5 ">
                                                                <div className="flex flex-row items-center justify-between w-full py-2 cursor-pointer">
                                                                    <button className="font-light md:text-lg relative text-md  w-fit block hover:text-black after:block after:content-[''] after:absolute after:h-[2px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">Casual</button>
                                                                    <FaAngleRight className="font-light md:text-lg text-zinc-500" />
                                                                </div>
                                                                <div className="flex flex-row items-center justify-between w-full py-2 cursor-pointer">
                                                                    <button className="font-light md:text-lg relative text-md  w-fit block hover:text-black after:block after:content-[''] after:absolute after:h-[2px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">Formal</button>
                                                                    <FaAngleRight className="font-light md:text-lg text-zinc-500" />
                                                                </div>
                                                                <div className="flex flex-row items-center justify-between w-full py-2 cursor-pointer">
                                                                    <button className="font-light md:text-lg relative text-md  w-fit block hover:text-black after:block after:content-[''] after:absolute after:h-[2px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">Party</button>
                                                                    <FaAngleRight className="font-light md:text-lg text-zinc-500" />
                                                                </div>
                                                                <div className="flex flex-row items-center justify-between w-full py-2 cursor-pointer">
                                                                    <button className="font-light md:text-lg relative text-md  w-fit block hover:text-black after:block after:content-[''] after:absolute after:h-[2px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">Gym</button>
                                                                    <FaAngleRight className="font-light md:text-lg text-zinc-500" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                                <button
                                                    className="p-2 text-center text-white bg-black border-2 border-black rounded-full cursor-pointer hover:border-black hover:border-2 hover:bg-white hover:text-black hover:bg-zinic-600"
                                                    type="button"
                                                    onClick={() => setShowModal(false)}
                                                >
                                                    Apply Filter
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ) : null}
                        </div>


                    </div>
                    <div className="flex flex-row gap-2">
                        <p className="text-sm">Showing  Products</p>

                        <p className="text-sm">Sort By:</p>
                        Sort by : <select name="sort" id="sort" value={sort} onChange={sortProduct}>

                            <option onClick={setSort} value="Most Popular">Most Popular</option>
                            <option onClick={setSort} value="Most Afforable">Most Afforable</option>
                            <option onClick={setSort} value="Most expensive">Most expensive</option>
                        </select>
                    </div>
                </div>
                <div className="grid justify-between grid-cols-2 grid-rows-1 gap-5 py-5 mx-2 sm:grid-cols-2 md:py-10 card-section md:mx-1 lg:grid-cols-3 md:grid-rows-1 md:gap-10">
                    {/* {filteredCards.map((post) => (
                        <ProductCard key={post.id} post={post} />
                    ))} */}
                    {
                        filteredCards.map((post) => (
                            <ProductCard key={post.id} post={post} />
                        ))
                    }
                </div>
            </div>

        </section>
    )
}