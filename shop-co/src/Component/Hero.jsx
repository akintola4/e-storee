import { Link } from "react-router-dom"
export default function Hero() {
    return (
        <><section className="flex flex-col items-center justify-between gap-20 py-10 pt-24 align-middle hero md:pt-28 lg:flex-row ">

            <div className="flex flex-col gap-2 mx-5 hero-1 lg:mx-10 lg:w-7/12">
                <h4 className="text-2xl font-extrabold lg:text-6xl" data-aos="zoom-in-up">FIND CLOTHES THAT MATCHES YOUR STYLE
                </h4>

                <div className="flex flex-col gap-10 py-5" data-aos="fade-right">
                    <p className="text-justify text-md text-slate-500 md:w-11/12">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
                    </p>
                    <div className="flex flex-row gap-5">
                        <Link className="w-11/12 p-3 text-center text-white bg-black border-2 border-black rounded-full cursor-pointer md:w-4/12 hover:border-black hover:border-2 hover:bg-white hover:text-black hover:bg-zinic-600"
                          to="/ProductList"  href="">Shop Now </Link>

                    </div>
                    <div className="grid justify-center grid-cols-2 gap-10 md:grid-cols-3 md:flex-row" data-aos="fade-right">
                        <div className="flex flex-col">
                            <p className="text-3xl font-semibold">200+</p>
                            <p className="text-gray-500">International Brands</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-3xl font-semibold">2,000+</p>
                            <p className="text-gray-500">High-Quality Products</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-3xl font-semibold">30,000+</p>
                            <p className="text-gray-500">Happy Customers</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero-2 md:w-8/12" data-aos="zoom-in-up">
                <img src="img/hero.svg" alt="" className="lg:w-12/12 " />
            </div>
        </section>
        <section className="px-10 py-10 bg-black ">
        <div className="grid justify-between grid-cols-3 gap-10 md:grid-cols-5">
                <img src="img/hero-1.svg" alt=""  data-aos="fade-right"/>
                <img src="img/hero-2.svg" alt=""  data-aos="fade-right"/>
                <img src="img/hero-3.svg" alt=""  data-aos="fade-right"/>
                <img src="img/hero-4.svg" alt=""  data-aos="fade-right"/>
                <img src="img/hero-5.svg" alt=""  data-aos="fade-right"/>
            </div>
        </section>
        </>
    )
}