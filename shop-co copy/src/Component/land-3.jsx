export default function Land3() {
    return (
        <section className="bg-zinc-200 p-2 md:p-10 mt-10 mx-10 rounded-xl">
            <h4 className="text-4xl text-center py-5 md:py-10 md:text-6xl font-extrabold" >NEW ARRIVALS
            </h4>
            <div class="grid grid-col-1  md:grid-cols-3 grid-row-3 md:grid-rows-1 mx-5 md:mx-10 gap-4">
                <div class="md:col-start-1 flex flex-col border-2   relative rounded-2xl bg-white  gap-5 hover:shadow-lg cursor-pointer" data-aos="zoom-in-up">
                    <img src="img/hero-6.svg"  className="m-0 rounded-2xl " alt="" />
                    <h4 class="font-bold absolute p-5 md:p-10    md:text-3xl">Casual</h4>



                </div>
                <div class=" md:col-span-2 flex flex-col border-2   rounded-2xl bg-white  gap-5 hover:shadow-lg cursor-pointer" data-aos="zoom-in-up">
                <img src="img/hero-7.svg" className="m-0 rounded-2xl" alt="" />
                    <h4 class="font-bold absolute p-5 md:p-10 md:text-3xl">Formal</h4>
                    


                </div>
                <div class="md:col-span-2 flex flex-col border-2    rounded-2xl bg-white  gap-5 hover:shadow-lg cursor-pointer" data-aos="zoom-in-up">
                <img src="img/hero-8.svg" className="m-0 rounded-2xl " alt="" />

                    <h4 class="font-bold absolute p-5 md:p-10 md:text-3xl">Party</h4>
                    

                </div>
                <div class="md:col-start-3 flex flex-col border-2   rounded-2xl bg-white  gap-5 hover:shadow-lg cursor-pointer" data-aos="zoom-in-up">
                <img src="img/hero-9.svg" className="m-0 rounded-2xl" alt="" />
                    <h4 class="font-bold absolute p-5 md:p-10 md:text-3xl">Gym </h4>
                   


                </div>
            </div>
        </section>
    )
}