import React from 'react'
import { FavouriteProvider, LocationProvider, WeatherProvider } from './provider'
import Page from './Page'

function App() {
    return (
        <LocationProvider>
            <WeatherProvider>
                <FavouriteProvider>
                    <Page />
                </FavouriteProvider>
            </WeatherProvider>
        </LocationProvider>
    )
}

export default App