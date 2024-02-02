import { useState } from 'react'

import Hero from './Hero'
import CardBody from './card/CardBody'
import Land3 from './land-3'
import ReviewBody from './rev/ReviewBody'
import ReviewSwiper from './rev/ReviewSwiper'



export default function App() {

  return (
    <div className="App">
      <Hero />
      <section>
        <h4 className="py-5 text-4xl font-extrabold text-center md:py-10 md:text-6xl" >NEW ARRIVALS
        </h4>
        <CardBody />
        <div className='flex justify-center'>
          <a className="px-16 py-3 text-center text-black bg-white border-2 rounded-full cursor-pointer border-zinc-20 hover:border-black hover:border-2 hover:bg-black hover:text-white"
            href="">View All</a>
        </div>
      </section>

      <section>
        <h4 className="py-5 text-4xl font-extrabold text-center md:py-5 md:text-6xl" >TOP SELLING
        </h4>
        <CardBody />
        <div className='flex justify-center'>
          <a className="px-16 py-3 text-center text-black bg-white border-2 rounded-full cursor-pointer border-zinc-20 hover:border-black hover:border-2 hover:bg-black hover:text-white"
            href="">View All</a>
        </div>
      </section>

      <Land3 />
      <ReviewSwiper />
    </div>
  )
}
