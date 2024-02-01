import reviewData from "../../reviews";
import Review from "./Review";
//to use aos libary
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

//to use swiper 
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";


//here i imported the code for aan icons for the arrows in the button
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

export default function ReviewSwiper() {
    //this for the swiper
    const [swiperRef, setSwiperRef] = useState(null);
    const prevHandler = () => {
        swiperRef.slidePrev();
      };
    
      const nextHandler = () => {
        swiperRef.slideNext();
      };
    //this for aos
    useEffect(() => {
        AOS.init();
    }, [])

    //this for the review data
    const review = reviewData.map(info => {
        return <SwiperSlide > <Review
            //the unqiue id for the data a unqiue key prop
            key={info.id}
            //{/images/product-1.svg"}
            // it like this info is an object containig all the data in the data.js file
            //we then put info() inside our prop thus when we want to soruce the data 
            //we use prop.info."name of the data"
            //remember info is an object so we use dot notation to source our data from it
            reviewInfo={info.review}
            name={info.name}
            rating={info.stats.rating}
        //this contains all the data we need 


        //we can also use the spread operator to access the object 
        // {...info}
        //if you use this method remove all the .info we used in our review component
        /></SwiperSlide>
    })
    return (

        <section className='m-5 review-1 md:m-10'>
           
            <div className="flex flex-row items-center justify-between">
            <h4 className="text-2xl font-extrabold md:text-6xl" >OUR HAPPY CUSTOMERS
            </h4>
            <div className="flex flex-row gap-10 text-2xl">
            <button onClick={prevHandler}><FaArrowLeftLong /></button>
                <button onClick={nextHandler}><FaArrowRight /></button>
            </div>
                
            </div>
            <Swiper
                onSwiper={setSwiperRef}
                direction={"horizontal"}
                slidesPerView={3}
                centeredSlides={true}
                spaceBetween={20}
                mousewheel={true}
                pagination={{
                    dynamicBullets: true,
                }}
                breakpoints={{
                    375: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="p-5 my-5 mySwiper md:my-10 md:px-20 md:p-10"
            >
                {review}
            </Swiper>
        </section>
    )
}
