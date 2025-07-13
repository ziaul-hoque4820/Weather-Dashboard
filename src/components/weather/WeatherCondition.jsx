import React, { useContext } from 'react'
import TempMaxIcon from '../../assets/icons/temp-max.svg'
import TempMinIcon from '../../assets/icons/temp-min.svg'
import HumidityIcon from '../../assets/icons/humidity.svg'
import CloudIcon from '../../assets/icons/cloud.svg'
import WindIcon from '../../assets/icons/wind.svg'
import { WeatherContext } from '../../context/weatherContext'

function WeatherCondition() {
    const { weatherData } = useContext(WeatherContext);

    return (
        <div>
            <p className="text-sm lg:text-lg font-bold uppercase mb-8">The climate is {weatherData.climate}</p>
            <ul className="space-y-6 lg:space-y-6">
                <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
                    <span>Temp max</span>
                    <div className="inline-flex space-x-4">
                        <p>{Math.round(weatherData.maxTemperature)}°</p>
                        <img src={TempMaxIcon} alt="temp-max" />
                    </div>
                </li>
                <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
                    <span>Temp min</span>
                    <div className="inline-flex space-x-4">
                        <p>{Math.round(weatherData.minTemperature)}°</p>
                        <img src={TempMinIcon} alt="temp-min" />
                    </div>
                </li>
                <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
                    <span>Humadity</span>
                    <div className="inline-flex space-x-4">
                        <p>{weatherData.humidity}%</p>
                        <img src={HumidityIcon} alt="humidity" />
                    </div>
                </li>
                <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
                    <span>Cloudy</span>
                    <div className="inline-flex space-x-4">
                        <p>{weatherData.cloudPercentage}%</p>
                        <img src={CloudIcon} alt="cloudy" />
                    </div>
                </li>
                <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
                    <span>Wind</span>
                    <div className="inline-flex space-x-4">
                        <p>{weatherData.wind}km/h</p>
                        <img src={WindIcon} alt="wind" />
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default WeatherCondition