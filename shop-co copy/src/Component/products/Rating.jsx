
import { IoIosArrowDown } from "react-icons/io";
import Review from '../rev/ReviewBody'
import { VscSettings } from "react-icons/vsc";

export default function Rating() {
    return (
        <section>
            <section className='flex flex-col items-center justify-between gap-5 my-5 md:my-10 md:flex-row'>
                <div className='flex flex-row items-center gap-2 md:w-4/12'>
                    <h4 className='text-2xl font-bold'>All Reviews</h4>
                    {/* this should be dynamic: had the change later on */}
                    <p className='text-slate-400'>(451)</p>
                </div>
                <div className='flex flex-row items-center gap-10 md:w-4/12'>
                    <button className="p-2 text-center text-black border-2 rounded-full cursor-pointer md:text-3xl md:p-3 border-zinc-200 bg-zinc-200 hover:border-black hover:border-2 hover:bg-black hover:text-white hover:bg-zinic-600"
                        href=""> <VscSettings /> </button>
                    <div className="text-center text-black border-2 rounded-full cursor-pointer md:p-2 border-zinc-200 bg-zinc-200 hover:border-black hover:border-2 hover:bg-black hover:text-white hover:bg-zinic-600">
                        <details className="group">

                            <summary
                                className="flex items-center justify-between gap-2 p-2 marker:content-none hover:cursor-pointer">

                                <span className="flex gap-2 ">
                                    <span>
                                        Latest
                                    </span>
                                </span>
                                <IoIosArrowDown />
                            </summary>

                            <article className="absolute px-4 py-4 text-black bg-white rounded-md ">
                                <ul className="flex flex-col gap-2 ">
                                    <li><button className="relative text-md   block hover:text-black after:block after:content-[''] after:absolute after:h-[2px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left" href="">Document </button></li>
                                    <li><button className="relative text-md   block hover:text-black after:block after:content-[''] after:absolute after:h-[2px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left" href="">Document </button></li>
                                    <li><button className="relative text-md   block hover:text-black after:block after:content-[''] after:absolute after:h-[2px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left" href="">Document </button></li>
                                </ul>
                            </article>

                        </details>
                    </div>
                    <button className="p-3 text-center text-white bg-black border-2 border-black rounded-full cursor-pointer md:w-4/12 hover:border-black hover:border-2 hover:bg-white hover:text-black hover:bg-zinic-600"
                        href="">Write a Review </button>
                </div>
            </section>
            <section className='grid grid-cols-1 grid-rows-3 gap-5 px-5 md:grid-cols-2 md:grid-rows-3 md:gap-10'>
                <Review />
            </section>
            <div className='flex justify-center my-10'>
                <button className="px-16 py-3 text-center text-black bg-white border-2 rounded-full cursor-pointer border-zinc-20 hover:border-black hover:border-2 hover:bg-black hover:text-white"
                    href="">Load More Reviews</button>
            </div>
        </section>
    )
}