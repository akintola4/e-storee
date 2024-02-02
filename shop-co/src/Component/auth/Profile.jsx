import React from 'react'
import { Link } from 'react-router-dom'

import {supabase} from '../supabase-context/client'
import { useState, useEffect } from 'react'


export default function Profile (){

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

console.log(fullName, 'for text')
  return (
    <div className='flex flex-col justify-center gap-5 py-40 text-center align-middle'>
        <h4 className='text-3xl font-light lg:text-8xl'>Welcome to shop.co</h4>
        <p className='text-lg uppercase lg:text-2xl'>{fullName}</p>
        <p className='w-10/12 mx-auto text-sm text-center lg:w-5/12 text-zinc-500'>Craving must-haves? Dive into a treasure trove of finds, all handpicked for YOU. Shop smart, smile wide. Welcome!  ✨️</p>
    <Link to="/ProductList" className='p-2 mx-auto text-center text-white bg-black border-2 border-black rounded-full cursor-pointer lg:w-2/12 hover:border-black hover:border-2 hover:bg-white hover:text-black hover:bg-zinic-600'>Shop Now</Link>
    </div>
  )
}
