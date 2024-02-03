import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Link, Navigate } from "react-router-dom";
import Profile from "./Profile";
import { useState } from "react";
import { supabase } from '../supabase-context/client'
import { useNavigate } from "react-router-dom";
export default function Login({ setToken }) {

    const navigate = useNavigate()
    const [formData, setFormData] = useState(
        {
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
            const { data, error } = await supabase.auth.signInWithPassword({
                email: formData.email,
                password: formData.password,
            })
            console.log(data)
            setToken(data)
            if (data.user) {
                navigate('/Profile')
            }
            else if (data.user == null) {
                alert("Invalid Credentials")
            }
        } catch (error) {
            alert(error)
        }
    }
    function withGoogle() {
        supabase.auth.signInWithOAuth({
            provider: 'google',
        })

    }
    return (
        <div>
            <main className="flex flex-col gap-5 px-5 mx-auto my-32 xl:px-60 md:pt-20 accent-green-950 md:my-14">
                <section className="flex items-center justify-center gap-10 rounded-lg md:justify-normal ">
                    <div className="hidden w-6/12 title md:block ">
                        <img src="img/login.svg" className="" alt="" />
                    </div>
                    <div className="flex flex-col gap-5 lg:w-4/12 xl:w-6/12 infomation ">
                        <img src="img/logo.svg" className="w-6/12 md:p-5" alt="" />

                        <form action="" className="flex flex-col gap-5 md:p-5"
                            onSubmit={handleSubmit}
                            providers={["google"]}
                        >
                            <h4 className="text-3xl font-bold" >Sign in</h4>
                            <h4 className="flex flex-row gap-5 text-zinc-400">Don't have an account? <Link to="/register" className="relative text-md text-black  w-fit block hover:text-black after:block after:content-[''] after:absolute after:h-[2px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"> Create one</Link></h4>
                            <div className="flex flex-col gap-2">
                                <label for="Email">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    onChange={handleChange}

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
                            <button
                                className="p-3 text-center text-black bg-white border border-black rounded-lg hover:border-white hover:bg-black hover:text-white "
                                type="submit"
                            >
                                Login
                            </button>
                            <div className="flex flex-col gap-5 pt-5">
                                {/* <button
                                    onClick={withGoogle}
                                    className="flex flex-row items-center gap-10 p-3 text-center text-black bg-white border border-black rounded-lg cursor-pointer hover:border-white hover:bg-black hover:text-white ">
                                    <FaGoogle className="text-2xl" />
                                    <h4 className="text-center">Continue with Google</h4>
                                </button> */}
                                <div
                                    id="g_id_onload"
                                    data-client_id="<client ID>"
                                    data-context="signin"
                                    data-ux_mode="popup"
                                    data-callback="handleSignInWithGoogle"
                                    data-nonce=""
                                    data-auto_select="true"
                                    data-itp_support="true"
                                ></div>

                                <div
                                    class="g_id_signin"
                                    data-type="standard"
                                    data-shape="pill"
                                    data-theme="outline"
                                    data-text="signin_with"
                                    data-size="large"
                                    data-logo_alignment="left"
                                ></div>

                            </div>
                        </form>
                    </div>
                </section>
            </main>

        </div>
    )

}