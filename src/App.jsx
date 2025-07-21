import React from 'react'
import Header from './components/header/Header'
import WeatherBoard from './components/weather/WeatherBoard'
import { FavouriteProvider, LocationProvider, WeatherProvider } from './provider'

function App() {
    return (
        <LocationProvider>
            <WeatherProvider>
                <FavouriteProvider>
                    <div className='grid place-items-center h-screen'>
                        <Header />
                        <main>
                            <section>
                                <WeatherBoard />
                            </section>
                        </main>
                    </div>
                </FavouriteProvider>
            </WeatherProvider>
        </LocationProvider>
    )
}

export default App