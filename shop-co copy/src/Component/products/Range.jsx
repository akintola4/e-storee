import { useState } from "react"
import data from "../products";
export default function Range({data, onRange}){

    const [filter, setFilter] = useState()
    const filterRange = (e) => {
                setFilter(e.target.value)
                onRange(e.target.value)
            }
    return(
        <div>
        <input type="range" className="accent-black range" name="filter" onChange={filterRange} min={50} max={5000} step={5} value={filter !== undefined ? filter : 0}  />
    </div>
    )
}