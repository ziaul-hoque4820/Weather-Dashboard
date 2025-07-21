import React, { useContext, useState } from 'react'
import search from '../../assets/search.svg'
import { LocationContext } from '../../context/weatherContext';
import getLocationByName from '../../data/location-data';

function Search() {
    const [searchTerm, setSearchTerm] = useState("");
    const { setSelectedLocation } = useContext(LocationContext);


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(searchTerm);
        const fetchedLocation = getLocationByName(searchTerm);
        console.log(fetchedLocation);
        if (fetchedLocation) {
            setSelectedLocation({ ...fetchedLocation });
        } else {
            console.error("Location not found or invalid!");
        }



    }
    return (
        <form action="#" onSubmit={handleSubmit}>
            <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
                <input
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
                    type="search" placeholder="Search Location" required />
                <button type="submit">
                    <img src={search} alt='search-icon' />
                </button>
            </div>
        </form>
    )
}

export default Search