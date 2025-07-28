import { useContext, useEffect, useState } from "react";
import { LocationContext } from "../context/weatherContext";

const useWeather = () => {
    const [weatherData, setWeatherData] = useState({
        location: "",
        climate: "",
        temperature: "",
        maxTemperature: "",
        minTemperature: "",
        humidity: "",
        cloudPercentage: "",
        wind: "",
        time: "",
        longitude: "",
        latitude: ""
    });

    const [loading, setLoading] = useState({
        state: false,
        message: ""
    });

    const [error, setError] = useState(null);

    const { selectedLocation, setSelectedLocation } = useContext(LocationContext);


    const fetchWeatherData = async (latitude, longitude) => {
        try {
            setLoading({
                ...loading,
                state: true,
                message: "Fetching weather data..."
            });

            const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
            );
            

            if (!response.ok) {
                const errorMessage = `Fetching weather data failed: ${response.status}`;
                throw new Error(errorMessage);
            }

            const data = await response.json();

            const updateWeatherData = {
                ...weatherData,
                location: data?.name,
                climate: data?.weather?.[0]?.main,
                temperature: data?.main?.temp,
                maxTemperature: data?.main?.temp_max,
                minTemperature: data?.main?.temp_min,
                humidity: data?.main?.humidity,
                cloudPercentage: data?.clouds?.all,
                wind: data?.wind?.speed,
                time: data?.dt,
                longitude,
                latitude
            };

            setWeatherData(updateWeatherData);
            setError(null);
        } catch (err) {
            setError(err.message || "Something went wrong.");
        } finally {
            setLoading({
                ...loading,
                state: false,
                message: ""
            });
        }
    };

    useEffect(() => {
        setLoading({
            ...loading,
            state: true,
            message: "Finding location..."
        });

        if (selectedLocation.latitude && selectedLocation.longitude) {
            fetchWeatherData(selectedLocation.latitude, selectedLocation.longitude);
        } else {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    fetchWeatherData(latitude, longitude);
                }
            );
        }
    }, [selectedLocation.latitude, selectedLocation.longitude]);

    return { weatherData, error, loading };
};

export default useWeather;
