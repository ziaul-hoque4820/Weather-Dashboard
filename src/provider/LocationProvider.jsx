import React, { useState } from 'react'
import { LocationContext } from '../context/weatherContext'


function LocationProvider({ children }) {
    const [selectedLocation, setSelectedLocation] = useState(
        {
            location: "",
            latitude: 0,
            longitude: 0,
        }
    )
    LocationContext
    return (
        <LocationContext.Provider value={{selectedLocation, setSelectedLocation}}>
            {children}
        </LocationContext.Provider>
    )
}

export default LocationProvider