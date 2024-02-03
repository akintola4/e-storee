import React from 'react';
import ReadOnlyStarRating from '../Star';
import { IoIosCheckmarkCircle } from "react-icons/io";

export default function Review(props) {

    return (
            <div className="p-5 border-2 cursor-pointer review border-neutral-100 rounded-2xl md:p-10 hover:shadow-lg">
tets
                <div className="flex flex-col gap-5 review1 clear-start ">
                    <div className='flex flex-col review-text'>
                    <div className="flex items-center gap-2 text-lg font-light review-text-1">
                        <ReadOnlyStarRating  rating={props.rating} />
                            {/* here inorder to source out the rating which is in a sub object of the main obejct (info) we use dot notation to do it 
        props.(main-object).(sub-object).(object) */}
                        </div>
                        <div className="flex flex-row items-center gap-2 review-text-3">
                            <h2 className="font-bold md:text-1xl"> {props.name}  </h2>
                            <IoIosCheckmarkCircle  className='text-green-500'/>
                        </div>
                    <div className="text-sm font-light review-text-2 md:text-md text-neutral-500">
                            <p className='text-justify'>{props.reviewInfo}
                            </p>
                        </div>
                        
                     
                        
                    </div>
                </div>
            </div>

    )
}