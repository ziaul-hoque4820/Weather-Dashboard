import React, { useContext } from 'react'
import AddToFavourite from './AddToFavourite'
import WeatherHeadline from './WeatherHeadline'
import WeatherCondition from './WeatherCondition'
import { WeatherContext } from '../../context/weatherContext'

function WeatherBoard() {

    const { weatherData, loading } = useContext(WeatherContext);

    return (
        <div className="container mx-auto px-5">
            <div
                className="grid bg-black/20 rounded-xl backdrop-blur-md border-2 lg:border-[3px] border-white/[14%] px-4 lg:px-14 py-6 lg:py-10 min-h-[520px] max-w-[1058px] mx-auto">
                <div className="grid md:grid-cols-2 gap-10 md:gap-6">
                    {
                        loading.state
                            ?
                            (
                                <div className="relative flex justify-center items-center">
                                    <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
                                    <img src="https://www.svgrepo.com/show/509001/avatar-thinking-9.svg" className="rounded-full h-28 w-28" />
                                </div>
                            )
                            :
                            (
                                <>
                                    <AddToFavourite />
                                    <WeatherHeadline />
                                    <WeatherCondition />
                                </>
                            )
                    }

                </div>
            </div>

        </div>
    )
}

export default WeatherBoard