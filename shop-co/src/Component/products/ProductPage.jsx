//import the card component with a slider
import CardSwipper from '../card/CardSwipper'
import CardBody from '../card/CardBody';

//import the product component
import Product from './Product'

//import the usestate
import { useState } from 'react';

import Rating from './Rating';

//here i imported Links
import { Link, Outlet } from 'react-router-dom'

import { useParams } from 'react-router-dom'

//import the data we go to use 

export default function ProductFull() {
    return (
        <div className='gap-20 py-5 pt-24 md:px-20 hero md:pt-28'>
            <Product />

            <section className='flex flex-row my-5 border-b-2 md:my-10'>
                <Link className="relative text-md text-center w-4/12 block hover:text-black after:block after:content-[''] after:absolute after:h-[2px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
                    to="ProductInfo">Product Details</Link>
                <Link className="relative text-md text-center w-4/12 block hover:text-black after:block after:content-[''] after:absolute after:h-[2px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
                    to="Rating">Rating & Reviews</Link>
                <Link className="relative text-md text-center w-4/12 block hover:text-black after:block after:content-[''] after:absolute after:h-[2px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
                    to="Faq">FAQs</Link>
            </section>
           
            <Outlet />
            <section className='py-5 md:py-10'>
                <h4 className="text-4xl font-extrabold text-center md:text-6xl" >YOU MIGHT ALSO LIKE
                </h4>
                <CardSwipper />
            </section>

        </div>
    )
}