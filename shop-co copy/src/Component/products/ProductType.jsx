import { useState } from "react";
import { FaAngleRight } from "react-icons/fa";

export default function ProductType({data, onType}) {

    const [query, setCloth] = useState("");

    const handleCloth = (event) => {
        setCloth(event.target.value);
      onType(event.target.value);
    };
  

    return(
        <div className="flex flex-col items-center justify-between w-full py-5 border-b-2">
        <div className="flex flex-row items-center justify-between w-full py-2 cursor-pointer">
            <button className="font-light md:text-lg relative text-md  w-fit block hover:text-black after:block after:content-[''] after:absolute after:h-[2px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left" onClick={handleCloth} value={"t-shirt"}>T-shirts</button>
            <FaAngleRight className="font-light md:text-lg text-zinc-500" />
        </div>
        <div className="flex flex-row items-center justify-between w-full py-2 cursor-pointer">
            <button className="font-light md:text-lg relative text-md  w-fit block hover:text-black after:block after:content-[''] after:absolute after:h-[2px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left" onClick={handleCloth} value={"shorts"}>Shorts</button>
            <FaAngleRight className="font-light md:text-lg text-zinc-500" />
        </div>
        <div className="flex flex-row items-center justify-between w-full py-2 cursor-pointer">
            <button className="font-light md:text-lg relative text-md  w-fit block hover:text-black after:block after:content-[''] after:absolute after:h-[2px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left" onClick={handleCloth} value={"shirt"}>Shirts</button>
            <FaAngleRight className="font-light md:text-lg text-zinc-500" />
        </div>
        <div className="flex flex-row items-center justify-between w-full py-2 cursor-pointer">
            <button className="font-light md:text-lg relative text-md  w-fit block hover:text-black after:block after:content-[''] after:absolute after:h-[2px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left" onClick={handleCloth} value={"hoodie"}>Hoodie</button>
            <FaAngleRight className="font-light md:text-lg text-zinc-500" />
        </div>
        <div className="flex flex-row items-center justify-between w-full py-2 cursor-pointer">
            <button className="font-light md:text-lg relative text-md  w-fit block hover:text-black after:block after:content-[''] after:absolute after:h-[2px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left" onClick={handleCloth} value={"jeans"}>Jeans</button>
            <FaAngleRight className="font-light md:text-lg text-zinc-500" />
        </div>
    </div>
    )
}