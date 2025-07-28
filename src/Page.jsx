import React, { useContext, useEffect, useState } from 'react'
import WeatherBoard from './components/weather/WeatherBoard'
import Header from './components/header/Header'
import { WeatherContext } from './context/weatherContext'
import ClearSkyImage from './assets/backgrounds/clear-sky.jpg'
import FewCloudsImage from './assets/backgrounds/clear-sky.jpg'
import MistImage from './assets/backgrounds/mist.jpeg'
import RainyDayImage from './assets/backgrounds/rainy-day.jpg'
import CloudsImage from './assets/backgrounds/scattered-clouds.jpg'
import SnowImage from './assets/backgrounds/snow.jpg'
import ThunderStromImage from './assets/backgrounds/thunderstorm.jpg'
import WinterImage from './assets/backgrounds/winter.jpg'

function Page() {

    const { weatherData, loading } = useContext(WeatherContext);
    const [climateImage, setClimateImage] = useState("");

    function getBackgroundImage(climate) {
        switch (climate) {
            case "Rain":
                return RainyDayImage;
            case "Clouds":
                return CloudsImage;
            case "Clear":
                return ClearSkyImage;
            case "Snow":
                return SnowImage;
            case "Thunder":
                return ThunderStromImage;
            case "Fog":
                return WinterImage;
            case "Haze":
                return FewCloudsImage;
            case "Mist":
                return MistImage;
            default:
                return ClearSkyImage
        }
    }

    useEffect(() => {
        const bgImage = getBackgroundImage(weatherData.climate);
        setClimateImage(bgImage);
    }, [weatherData.climate])


    return (
        loading.state
            ?
            (
                <div className="h-screen w-screen flex justify-center items-center">
                    <div className="relative">
                        <div className="absolute inset-0 animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
                        <img src="https://www.svgrepo.com/show/509001/avatar-thinking-9.svg" className="rounded-full h-28 w-28" alt="Loading" />
                    </div>
                </div>
            )
            :
            (
                <div
                    style={{
                        backgroundImage: `url('${climateImage}')`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center center',
                        minHeight: '100vh',
                        width: '100%',
                    }}
                    className='grid place-items-center'
                >
                    <Header />
                    <main>
                        <section>
                            <WeatherBoard />
                        </section>
                    </main>
                </div>

            )
    )
}

export default Page