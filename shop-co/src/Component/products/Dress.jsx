import { useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";

export default function Dress({data, onDress}) {

    const [query, setDress] = useState("");

    const handleDress = (event) => {
        setDress(event.target.value);
      onDress(event.target.value);
    };
  

    return(
        <div className="flex-col items-center justify-between w-full py-5 ">
        <div className="flex flex-row items-center justify-between">
            <h4 className="font-bold md:text-lg">Dress Style</h4>
            <IoIosArrowUp className="md:text-lg" />
        </div>
        <div>
        <div className="flex flex-row items-center justify-between w-full py-2 cursor-pointer">
            <button className="font-light md:text-lg relative text-md  w-fit block hover:text-black after:block after:content-[''] after:absolute after:h-[2px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left" onClick={handleDress} value={"Casual"}>Casual</button>
            <FaAngleRight className="font-light md:text-lg text-zinc-500" />
        </div>
        <div className="flex flex-row items-center justify-between w-full py-2 cursor-pointer">
            <button className="font-light md:text-lg relative text-md  w-fit block hover:text-black after:block after:content-[''] after:absolute after:h-[2px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left" onClick={handleDress} value={"Formal"}>Formal</button>
            <FaAngleRight className="font-light md:text-lg text-zinc-500" />
        </div>
        <div className="flex flex-row items-center justify-between w-full py-2 cursor-pointer">
            <button className="font-light md:text-lg relative text-md  w-fit block hover:text-black after:block after:content-[''] after:absolute after:h-[2px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left" onClick={handleDress} value={"Party"}>Party</button>
            <FaAngleRight className="font-light md:text-lg text-zinc-500" />
        </div>
        <div className="flex flex-row items-center justify-between w-full py-2 cursor-pointer">
            <button className="font-light md:text-lg relative text-md  w-fit block hover:text-black after:block after:content-[''] after:absolute after:h-[2px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left" onClick={handleDress} value={"Gym"}>Gym</button>
            <FaAngleRight className="font-light md:text-lg text-zinc-500" />
        </div>
    </div>
    </div>
    )
}