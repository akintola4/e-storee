import React from 'react';
import ReadOnlyStarRating from '../Star';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function ProductCard({post}) {
    return (
        <main>
                                <div key={post.id} className="flex flex-col gap-5 p-2 rounded-lg cursor-pointer card1 clear-start hover:shadow-lg md:p-5">

                                    <Link to={`/productDetail/${post.id}`}>
                                        <img className="card-image " src={`img/${post.img}`} alt="avatar" />
                                    </Link>
                                    <div className='flex flex-col card-text'>
                                        <div className="text-sm font-bold card-text-2 md:text-lg">
                                            <p>{post.title}
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-2 text-lg font-light card-text-1">
                                            <ReadOnlyStarRating rating={post.rating} />
                                            {/* here inorder to source out the rating which is in a sub object of the div obejct (info) we use dot notation to do it 
                props.(div-object).(sub-object).(object) */}
                                            <p className="text-sm rating md:text-md">{post.reviewCount} </p>
                                        </div>

                                        <div className="flex flex-row items-center gap-3 card-text-3">
                                            <h2 className="font-semibold md:text-2xl"> ${post.price}</h2>
                                            <h2 className="font-semibold line-through text-zinc-500 md:text-2xl"> {post.previousPrice}</h2>


                                        </div>
                                    </div>
                                </div>
        </main>

    )
}