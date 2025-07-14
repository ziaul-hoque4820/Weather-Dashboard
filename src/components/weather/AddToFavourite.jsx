import React, { useContext, useEffect, useState } from 'react'
import ReadHeartIcon from '../../assets/heart-red.svg'
import HeartIcon from '../../assets/heart.svg'
import { FavouriteContext, WeatherContext } from '../../context/weatherContext'

function AddToFavourite() {
    const { addToFavourites, removeFromFavourites, favourites } = useContext(FavouriteContext);
    const { weatherData } = useContext(WeatherContext);
    const { latitude, longitude, location } = weatherData;

    const [isFavourite, toggleFavourite] = useState(false);

    useEffect(() => {
        const found = favourites.find((fav) => fav.location === location);
        toggleFavourite(found);
    }, [])

    const handleFavourite = () => {
        const found = favourites.find((fav) => fav.location === location);
        
        if(!found) {
            addToFavourites(latitude, longitude, location);
        } else {
            removeFromFavourites(location);
        }
        toggleFavourite(!isFavourite); 
    }

    return (
        <div className="md:col-span-2">
            <div className="flex items-center justify-end space-x-6">
                <button 
                onClick={handleFavourite}
                className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#4e49494d]">
                    <span>Add to Favourite</span>
                    <img src={isFavourite ? ReadHeartIcon :  HeartIcon} alt="heart_icon" />
                </button>

            </div>
        </div>
    )
}

export default AddToFavourite