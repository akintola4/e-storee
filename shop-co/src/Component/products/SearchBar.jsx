import { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import data from "../products";
import { Link } from 'react-router-dom';
import ReadOnlyStarRating from '../Star';
export default function Search({data, onSearch}) {


    const [query, setQuery] = useState("");

    const handleSearch = (event) => {
      setQuery(event.target.value);
      onSearch(event.target.value);
    };
  
    return (
      <div className="w-full">
        <label for="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3">
            <FaMagnifyingGlass />
          </div>
          <input
            type="search"
            id="search"
            onChange={handleSearch}
            className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg ps-10 bg-gray-50 focus:ring-black focus:border-black dark:border-gray-600 dark:placeholder-gray-400"
            placeholder="Search"
            required
          />
        </div>
      </div>
    );
  }