import { FaGoogle } from "react-icons/fa";
//this will import the module we want to use 
import { supabase } from '../supabase-context/client'
import { useNavigate } from "react-router-dom";


import { Link } from "react-router-dom";
import { useState } from "react";
export default function Register() {
    const [formData, setFormData] = useState(
        {
            firstname: "",
            lastName: "",
            email: "",
            password: ""
        }
    )

    // console.log(formData)
    function handleChange(e) {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            const { data, error } = await supabase.auth.signUp(
                {
                    email: formData.email,
                    password: formData.password,
                    options: {
                        data: {
                            first_name: formData.firstname,
                            last_name: formData.lastName,
                        }
                    }
                }
            )
            alert('Check your email for verification link')
        } catch (error) {
            alert(error)
        }
    }
  async function withGoogle() {
         const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
              queryParams: {
                access_type: 'offline',
                prompt: 'consent',
              },
            },
          })
          
          
    }
return (
    <div>
        <main className="flex flex-col gap-5 px-5 mx-auto my-32 xl:px-60 md:pt-20 accent-green-950 md:my-14">
            <section className="flex items-center justify-center gap-10 rounded-lg md:justify-normal ">
            <div className="hidden w-6/12 title md:block ">
                    <img src="img/register.svg" className="" alt="" />
                </div>
                <div className="flex flex-col gap-5 lg:w-4/12 xl:w-6/12 infomation ">
                    <img src="img/logo.svg" className="w-6/12 md:p-5" alt="" />

                    <form action="" className="flex flex-col gap-5 md:p-5"
                        onSubmit={handleSubmit}
                    >
                        <h4 className="text-3xl font-bold" >Create an account</h4>
                        
                        <h4 className="flex flex-row gap-5 text-zinc-400">Already have an account? <Link to="/login" className="relative text-md  w-fit block hover:text-black text-black after:block after:content-[''] after:absolute after:h-[2px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"> Login</Link></h4>
                        <div className="flex flex-col gap-2">
                            <label for="Email">First name</label>
                            <input
                                type="text"
                                name="firstName"
                                onChange={handleChange}
                                className="p-3 border-2 rounded-lg text-green-950 focus:outline-none border-zinc-200 focus:ring-black focus:ring-2 placeholder:text-green-950"
                                id="firstName" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label for="Email">Last name</label>
                            <input
                                type="text"
                                name="lastName"
                                onChange={handleChange}
                                className="p-3 border-2 rounded-lg text-green-950 focus:outline-none border-zinc-200 focus:ring-black focus:ring-2 placeholder:text-green-950"
                                id="lastName" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label for="Email">Email</label>
                            <input
                                type="email"
                                name="email"
                                onChange={handleChange}
                                required={true}
                                className="p-3 border-2 rounded-lg text-green-950 focus:outline-none border-zinc-200 focus:ring-black focus:ring-2 placeholder:text-green-950"
                                placeholder="name@mail.com"
                                id="email" />
                        </div>
                        <div className="flex flex-col gap-2 ">
                            <label for="Password">Password</label>
                            <input
                                type="password"
                                className="p-3 border-2 rounded-lg shadow-sm text-green-950 focus:outline-none border-zinc-200 focus:ring-black focus:ring-2 placeholder:text-green-950 "
                                name="password"
                                onChange={handleChange}
                                
                                placeholder="••••••••" id="password" />
                        </div>
                        <div className="flex flex-row items-center gap-5 md:w-10/12">
                            <input type="checkbox" name="" id="checkbox" />
                            <h4 className="text-sm md:text-md text-zinc-500">By creating an account, I agree to our Terms of use
                                and Privacy Policy </h4>
                        </div>
                        <button
                            className="p-3 text-center text-black bg-white border border-black rounded-lg hover:border-white hover:bg-black hover:text-white "
                            type="submit"
                        >
                            Create an account
                        </button>
                        {/* <div className="flex flex-col gap-5 pt-5">
                            <button 
                            onClick={withGoogle}
                            className="flex flex-row items-center gap-10 p-3 text-center text-black bg-white border border-black rounded-lg cursor-pointer hover:border-white hover:bg-black hover:text-white ">
                                <FaGoogle className="text-2xl" />
                                <h4 className="text-center">Continue with Google</h4>
                            </button>
                        </div> */}
                    </form>
                </div>
            </section>
        </main>

    </div>
)

}