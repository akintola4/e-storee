import React from 'react';
import ReadOnlyStarRating from '../Star';
import { IoIosCheckmarkCircle } from "react-icons/io";

export default function Review(props) {

    return (
            <div className="review border-2 border-neutral-100 rounded-2xl p-5 md:p-10 hover:shadow-lg cursor-pointer">

                <div className="review1 clear-start gap-5 flex flex-col ">
                    <div className='review-text flex flex-col'>
                    <div className="review-text-1 flex text-lg font-light gap-2 items-center">
                        <ReadOnlyStarRating  rating={props.rating} />
                            {/* here inorder to source out the rating which is in a sub object of the main obejct (info) we use dot notation to do it 
        props.(main-object).(sub-object).(object) */}
                        </div>
                        <div className="review-text-3 flex flex-row items-center gap-2">
                            <h2 className="md:text-1xl font-bold"> {props.name}  </h2>
                            <IoIosCheckmarkCircle  className='text-green-500'/>
                        </div>
                    <div className="review-text-2 font-light text-sm md:text-md text-neutral-500">
                            <p className='text-justify'>{props.reviewInfo}
                            </p>
                        </div>
                        
                     
                        
                    </div>
                </div>
            </div>

    )
}