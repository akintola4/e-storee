import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
export default function Footer() {
    return (
        <footer className="footer ">
            <div className="flex flex-col justify-between gap-10 p-5 mx-5 text-white bg-black md:mx-32 rounded-2xl md:flex-row md:p-10">
                <h4 className="font-extrabold text-1xl md:text-4xl md:w-6/12">STAY UPTO DATE ABOUT OUR LATEST OFFERS</h4>
                <div className="flex flex-col gap-3 md:w-4/12">
                    <input type="email" name="" placeholder="Enter your email address" className="px-16 py-3 rounded-full " id="" />
                    <button className="px-16 py-3 text-center text-black bg-white border-2 rounded-full cursor-pointer border-zinc-20 hover:border-black hover:border-2 hover:bg-black hover:text-white" href="">View All</button>
                </div>
            </div>
            <div className="p-5 md:p-10 bg-neutral-100">
            <div className="flex flex-col gap-1 md:flex-row sm:justify-between">
            <div className="flex flex-col gap-5 sm:gap-10">
                <div className="flex flex-col gap-5 md:w-6/12">
                    <img className="w-4/12 fill-white md:w-6/12" src="/img/logo.svg"   alt="" />
                    <p className="text-sm ">We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                    <div className="flex flex-row gap-5 py-5 text-1xl">
                    <button className="p-2 text-center text-black bg-white border-2 rounded-full cursor-pointer border-zinc-20 hover:border-black hover:border-2 hover:bg-black hover:text-white" href=""><FaTwitter /></button>
                    <button className="p-2 text-center text-black bg-white border-2 rounded-full cursor-pointer border-zinc-20 hover:border-black hover:border-2 hover:bg-black hover:text-white" href=""><FaFacebookF /></button>
                    <button className="p-2 text-center text-black bg-white border-2 rounded-full cursor-pointer border-zinc-20 hover:border-black hover:border-2 hover:bg-black hover:text-white" href=""><FaInstagram /></button>
                    <button className="p-2 text-center text-black bg-white border-2 rounded-full cursor-pointer border-zinc-20 hover:border-black hover:border-2 hover:bg-black hover:text-white" href=""><FaGithub /></button>
                </div>
                </div>
            </div>
            <div className="grid grid-cols-2 grid-rows-2 gap-10 md:grid-cols-5 md:grid-rows-1 sm:gap-20">
                <ul className="flex flex-col gap-2 text-left">
                    <h4 className="font-bold">Product</h4>
                    <li><button>Marketing</button></li>
                    <li><button> Distribution</button></li>
                    <li><button>Sessions</button></li>
                    <li><button>Pricing</button></li>
                </ul>
                <ul className="flex flex-col gap-2 text-left">
                    <h4 className="font-bold">SpeedUp</h4>
                    <li><button>About</button></li>
                    <li><button> Blog</button></li>
                    <li><button>Help center</button></li>
                    <li><button> Careers</button></li>
                </ul>
                <ul className="flex flex-col gap-2 text-left">
                    <h4 className="font-bold">Policies</h4>
                    <li><button>Terms</button></li>
                    <li><button> Privacy policy</button></li>
                    <li><button>Cookies</button></li>
                </ul>
                <ul className="flex flex-col gap-2 text-left">
                    <h4 className="font-bold">Policies</h4>
                    <li><button>Terms of Service</button></li>
                    <li><button> Privacy policy</button></li>
                    <li><button>Cookies</button></li>
                </ul>
            </div>
        </div>

        <div class="flex flex-col md:flex-row items-center justify-between border-t-2 py-5 gap-2 md:gap-10">
            <h4>Shop.co © 2000-2023, All Rights Reserved</h4>

           <img src="/img/footer-2.svg" alt="" />
        </div>
            </div>
            
        </footer>

    )
}