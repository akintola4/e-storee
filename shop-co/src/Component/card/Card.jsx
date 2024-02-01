import React from 'react';
import ReadOnlyStarRating from '../Star';
import { Link } from 'react-router-dom';

export default function Card(props) {

    return (
        <main className="card">

            <div className="flex flex-col gap-5 p-2 rounded-lg cursor-pointer card1 clear-start hover:shadow-lg md:p-5">

              <Link to={`/productDetail/${props.info.id}`}>
                <img className="card-image " src={`/img/${props.info.img}`} alt="avatar" />
                </Link> 
                <div className='flex flex-col card-text'>
                    <div className="text-sm font-bold card-text-2 md:text-lg">
                        <p>{props.info.title}
                        </p>
                    </div>
                    <div className="flex items-center gap-2 text-lg font-light card-text-1">
                        <ReadOnlyStarRating rating={props.info.rating} />
                        {/* here inorder to source out the rating which is in a sub object of the main obejct (info) we use dot notation to do it 
        props.(main-object).(sub-object).(object) */}
                        <p className="text-sm rating md:text-md">{props.info.reviewCount} </p>
                    </div>

                    <div className="flex flex-row items-center gap-3 card-text-3">
                        <h2 className="font-semibold md:text-2xl"> ${props.info.price}</h2>
                        <h2 className="font-semibold line-through text-zinc-500 md:text-2xl"> {props.info.previousPrice}</h2>
                       {props.info.perOff === null || props.info.perOff === "" || props.info.perOff.length === 0 ? (
                            <p className='hidden'></p>
                        ) : (
                            <p className="p-2 text-sm text-red-500 bg-red-100 rounded-full md:text-md">{props.info.perOff}</p>
                        )}

                    </div>
                </div>
            </div>
        </main>

    )
}