// Головна сторінка
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Loader from "../components/Loader";
import WeatherList from "../components/WeatherList";

import { getWeatherData, getCityName } from "../services/weatherService";
import { removeAuthCookie } from "../utils/auth";

import geoIcon from "../assets/icons/geo-icon.png"

function DashboardPage() {
    const [weather, setWeather] = useState(null);
    const [cityName, setCityName] = useState("Київ");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const handleLogout = () => {
        removeAuthCookie();
        navigate("/");
    }

    const fetchWeatherByCoords = async (lat, lon, cityName) => {
        try {
            setLoading(true);
            setError(null);

            const [weatherData, resolvedCity] = await Promise.all([
                getWeatherData(lat, lon),
                cityName ? Promise.resolve(cityName) : getCityName(lat, lon)
            ]);

            setWeather(weatherData);
            setCityName(resolvedCity);
        } catch {
            setError("Не вдалося отримати дані про погоду.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchWeatherByCoords(50.4501, 30.5234, "Київ");
    }, []);

    const handleGetLocation = () => {
        if (!navigator.geolocation) {
            setError("Геолокація не підтримується вашим браузером.");
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;

                fetchWeatherByCoords(lat, lon);
            },
            () => {
                setError("Доступ до геолокації заборонено або сталася помилка.");
            }
        );
    };

    return (
        <div className="dashboard-layout">
            <header className="dashboard-header">

                <div className="dashboard-header__container">
                    <h1 className="dashboard-header__title">Weather Dashboard</h1>
                    <button className="dashboard-header__logout-button" onClick={handleLogout}>Log out</button>
                </div>

            </header>

            <main className="dashboard-content">
                <div className="dashboard-actions">
                    <div className="dashboard-city">
                        <h2 className="dashboard-city__name">{cityName}</h2>
                        <h3 className="dashboard-city__description">Прогноз погоди на 5 днів</h3>
                    </div>

                    <button className="button-use-my-location" onClick={handleGetLocation}>
                        <img src={geoIcon} alt="Іконка" className="button-container-icon" />
                        Use my location
                    </button>

                </div>

                {loading && <Loader />}
                {error && <p className="error-message">{error}</p>}
                {!loading && !error && weather && weather.daily && (
                    <WeatherList dailyData={weather.daily} />
                )}
            </main>
        </div>
    );
}

export default DashboardPage;