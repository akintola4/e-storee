
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import { LuShoppingCart } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FiLogOut } from "react-icons/fi";
import { useState } from "react";
import DarkModeToggle from './DarkModeToggle';
import { supabase } from './supabase-context/client'

//we need to import LINk in react-router dom to be ale to use the link tag 
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Nav({ setToken }) {
    // now we create a toogle menu for the navabr 
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }


    // console.log(token)
    let navigate = useNavigate()

    function handleLogout() {
     try {
         supabase.auth.signOut();
        // Redirect to login page or perform other actions after sign-out
        console.log('Logged out successfully!');
        setToken(null)
        navigate('/Login')
      } catch (error) {
        console.error('Error signing out:', error.message);
        // Display an error message to the user
      }
    }

    return (
        <header className="fixed inset-x-0 top-0 z-10 bg-gray-400 rounded-md md:px-10 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 w-12/12">

            <nav className="flex items-center justify-between p-4" aria-label="Global">

                <div className="flex flex-row items-center gap-2 mx md:w-2/12">
                    <button
                        className="flex p-2 rounded-md outline-none cursor-pointer mobile-menu-button lg:hidden hover:bg-none hover:text-black" onClick={toggleMenu}>
                        <RxHamburgerMenu className="text-2xl" /></button>
                    <img src="img/logo.svg" className="w-6/12 md:w-8/12" alt="" />
                </div>

                <ul className="flex flex-row items-center hidden gap-10 lg:flex">


                    <li className="relative text-md focus:text-black   block hover:text-black after:block after:content-[''] after:absolute after:h-[2px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
                        <Link to="/ProductList">
                            Shop
                        </Link>
                    </li>

                    <li><Link className="relative text-md  w-fit block hover:text-black after:block after:content-[''] after:absolute after:h-[2px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
                        to="/">Home</Link></li>
                        


                </ul>
                <div className="hidden w-4/12 lg:block">
                    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <FaMagnifyingGlass />
                        </div>
                        <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-black focus:border-black  dark:border-gray-600 dark:placeholder-gray-400  " placeholder="Search" required />
                    </div>
                </div>
                <div className="nav-3 ">
                    <ul className="flex flex-row items-center gap-5">

                        <Link className="p-2 text-2xl text-black rounded-md cursor-pointer hover:bg-black hover:text-white hover:bg-zinic-600 bg-none"
                            to="/Cart"><LuShoppingCart /></Link >
                        <Link
                            to="/Login"
                            className="p-2 text-2xl text-black rounded-md cursor-pointer hover:bg-black hover:text-white hover:bg-zinic-600 bg-none"
                            href=""><CgProfile /></Link>

                        <button
                            onClick={handleLogout}
                            className="p-2 text-2xl text-black rounded-md cursor-pointer hover:bg-black hover:text-white hover:bg-zinic-600 bg-none"
                        ><FiLogOut /></button>

                    </ul>
                </div>

            </nav>
            <div className={`lg:hidden mobile-menu ${isOpen ? "" : "hidden "}`}>
                <ul className="gap-20 mx-auto">
                    <li className="px-5 py-2 transition duration-300 "><Link to={"/"} >Home</Link></li>
                    <li className="px-5 py-2 transition duration-300 "><Link to="/ProductList" >Shop</Link></li>
                    <li className="px-5 py-2 transition duration-300 "><Link  >Services</Link></li>
                    <li className="px-5 py-2 transition duration-300 "><Link  >product tour</Link></li>
                    <li className="px-5 py-2 transition duration-300 "><Link  >blog</Link></li>
                </ul>
            </div>
            <div>

            </div>
        </header>
    )
}