import React from 'react'
import { useState } from 'react'
import { IoIosArrowUp } from "react-icons/io";
export default function Size({data, onSize}) {
    const [size, setSize] = useState("")
   let  handleSize = (e) =>{
    setSize(e.target.value)
    onSize(e.target.value)
   }
  return (
    <div className="flex-col items-center justify-between w-full gap-3 py-5 border-b-2 ">
    <div className="flex flex-row items-center justify-between py-2">
        <h4 className="font-bold md:text-lg">Size</h4>
        <IoIosArrowUp className="md:text-lg" />
    </div>
    <div class="grid grid-cols-3 gap-5 ">
        <button class="p-2 text-xs text-center text-black rounded-full cursor-pointer  border-zinc-200 bg-zinc-200 hover:bg-zinic-600 focus:bg-black focus:text-white" value={"XX-Small"} onClick={handleSize} href=""> XX-Small</button>
        <button class="p-2 text-xs text-center text-black rounded-full cursor-pointer  border-zinc-200 bg-zinc-200 hover:bg-zinic-600 focus:bg-black focus:text-white" value={"X-Small"} onClick={handleSize} href=""> X-Small</button>
        <button class="p-2 text-xs text-center text-black rounded-full cursor-pointer  border-zinc-200 bg-zinc-200 hover:bg-zinic-600 focus:bg-black focus:text-white" value={"Small"} onClick={handleSize} href=""> Small</button>
        <button class="p-2 text-xs text-center text-black rounded-full cursor-pointer  border-zinc-200 bg-zinc-200 hover:bg-zinic-600 focus:bg-black focus:text-white" value={"Medium"} onClick={handleSize} href=""> Medium</button>
        <button class="p-2 text-xs text-center text-black rounded-full cursor-pointer  border-zinc-200 bg-zinc-200 hover:bg-zinic-600 focus:bg-black focus:text-white" value={"Large"} onClick={handleSize} href=""> Large</button>
        <button class="p-2 text-xs text-center text-black rounded-full cursor-pointer  border-zinc-200 bg-zinc-200 hover:bg-zinic-600 focus:bg-black focus:text-white" value={"X-Large"} onClick={handleSize} href=""> X-Large</button>
        <button class="p-2 text-xs text-center text-black rounded-full cursor-pointer  border-zinc-200 bg-zinc-200 hover:bg-zinic-600 focus:bg-black focus:text-white" value={"XX-Large"} onClick={handleSize} href=""> XX-Large</button>
        <button class="p-2 text-xs text-center text-black rounded-full cursor-pointer  border-zinc-200 bg-zinc-200 hover:bg-zinic-600 focus:bg-black focus:text-white" value={"3X-Large"} onClick={handleSize} href=""> 3X-Large</button>
        <button class="p-2 text-xs text-center text-black rounded-full cursor-pointer  border-zinc-200 bg-zinc-200 hover:bg-zinic-600 focus:bg-black focus:text-white" value={"4X-Large"} onClick={handleSize} href=""> 4X-Large</button>
    </div>

</div>
  )
}
