import React, { useContext } from 'react'
import { FavouriteContext } from '../../context/weatherContext';

function FavouriteListModal() {
        const { favourites } = useContext(FavouriteContext);


        return (
            <div className="max-w-xs py-4 bg-white rounded-md border-gray-500 absolute right-0 top-16 text-black shadow-lg ">
                <h3 className="text-lg font-bold px-4">Favourite Locations</h3>
                <ul className="space-y-2 mt-4 *:py-2 *:px-4 *:cursor-pointer">
                    {
                        favourites.length > 0 ? (
                            favourites.map((fav, index) => (
                                <li key={index} className="hover:bg-gray-200">{fav.location}</li>
                            ))
                        ) 
                        : (
                            <p className="font-semibold">Nothinf to added to Favourites!</p>
                        )
                    }
                </ul>
            </div>
        )
    }

export default FavouriteListModal