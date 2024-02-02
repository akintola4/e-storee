import { useState } from 'react'

import Nav from './Component/Nav'
import { IoClose } from "react-icons/io5";
import {IoMdCheckmark} from "react-icons/io"
import Home from './Component/landingPage'
import ProductContent from './Component/products/ProductPage'
import Rating from './Component/products/Rating'
import Faq from './Component/products/Faq'
import ProductInfo from './Component/products/ProductInfo'
import Cart from './Component/cart/Cart'

import { supabase } from './Component/supabase-context/client'
import ProductList from './Component/products/ProductList'

//this are for the path of user auth
import Login from './Component/auth/Login'
import Register from './Component/auth/SignUp'
// import Forget from './Component/auth/ForgotPassword'

import Footer from './Component/footer'
import Profile from './Component/auth/Profile'
import './App.css'

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ShopContextProvider from './Component/context/ShopContext'
import { useEffect } from 'react'

export default function App() {
  const [token, setToken] = useState(false)

    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchSession = async () => {
        try {
          const { data: sessionData } = await supabase.auth.getSession();
          if (sessionData.session !== null) {
            setToken(true)
          }if(sessionData.session == null){
            setToken(false)
          }
          
        } catch (err) {
          setError(err);
        }
      };
  
      fetchSession();
    }, []);



console.log(token)

const [fullName, setFullname] = useState('')
useEffect(()=>{
  const getUsername = async () => {
    const { data: {user} } = await supabase.auth.getUser()
    const fullname = `${user.user_metadata.first_name}  ${user.user_metadata.last_name}`
    setFullname(fullname)
  } 
  getUsername();
}
,[])


 
console.log(fullName)
  //to show an order confirmation modal
  const [showModal, setShowModal] = useState(true);
  return (

    <div className="App">
      <ShopContextProvider>

        <Nav setToken={setToken} />
        {showModal ?
          <div >
            <div>
            {token ?  <>
                                <div className="fixed inset-0 z-50 flex justify-end m-5 overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
                                    <div className="relative my-6">
                                        <div className="relative flex flex-col w-full p-5 bg-white border-0 shadow-lg outline-none rounded-xl focus:outline-none">
                                            <div
                                                class="flex flex-shrink-0 items-center justify-between rounded-t-md bg-info-600 gap-20 p-4 dark:border-b dark:border-neutral-500 dark:bg-transparent">
                                                <h5
                                                    class="text-sm md:text-xl font-medium leading-normal "
                                                    id="rightTopModalLabel">
                                                   Login status
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

                                                <h4 className='text-lg font-bold md:text-2xl'>Login Succssful</h4>
                                                <p className='text-sm md:text-md text-zinc-700'>Welcome {fullName}</p>
                                            </div>
                                            <Link
                                                className="p-2 text-center text-white bg-black border-2 border-black rounded-full cursor-pointer hover:border-black hover:border-2 hover:bg-white hover:text-black hover:bg-zinic-600"
                                                type="button"
                                                to={"/ProductList"}
                                                onClick={() => setShowModal(false)}
                                            >
                                                Close
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </> :  <>
                                <div className="fixed inset-0 z-50 flex justify-end m-5 overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
                                    <div className="relative my-6">
                                        <div className="relative flex flex-col w-full p-5 bg-white border-0 shadow-lg outline-none rounded-xl focus:outline-none">
                                            <div
                                                class="flex flex-shrink-0 items-center justify-between rounded-t-md bg-info-600 gap-20 p-4 dark:border-b dark:border-neutral-500 dark:bg-transparent">
                                                <h5
                                                    class="text-sm md:text-xl font-medium leading-normal "
                                                    id="rightTopModalLabel">
                                                   Login status
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

                                                <h4 className='text-lg font-bold md:text-2xl'>Not logged in</h4>
                                                <p className='text-sm md:text-md text-zinc-700'>Welcome {fullName}</p>
                                            </div>
                                            <Link
                                                className="p-2 text-center text-white bg-black border-2 border-black rounded-full cursor-pointer hover:border-black hover:border-2 hover:bg-white hover:text-black hover:bg-zinic-600"
                                                type="button"
                                                to={"/Login"}
                                                onClick={() => setShowModal(false)}
                                            >
                                                Close
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </>}
            </div>
           

          </div>

          : null}
        {/* react routes will contain all the routes we are going to use */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productDetail" element={<ProductContent />} >

          </Route>
          <Route path='/Profile' element={<Profile/>} />
          <Route path=':Id ' element={<ProductContent />}></Route>
          {token ? <Route path='ProductList' element={<ProductList />} /> : ''}

          <Route path='/productDetail/:productId' element={<ProductContent />}>
            <Route path="faq" element={<Faq />} />
            <Route path="rating" element={<Rating />} />
            <Route path="productInfo" element={<ProductInfo />} />
          </Route>
          <Route path='cart' element={<Cart />}></Route>
          <Route path="/login" element={<Login setToken={setToken} />} />
          <Route path="/Register" element={<Register />} />
          {/*         this are for the path we are yet to create
         <Route path="/products/productDetailPage" element={<productDetailPage />} />
        <Route path="/cart" element={<Cart />} />
        
        <Route path="/register" element={<Category Page />} /> */}

        </Routes>

        <Footer />
      </ShopContextProvider>

    </div>
  )
}
