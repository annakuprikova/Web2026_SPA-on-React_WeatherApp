// Відображення п'яти карток
import WeatherCard from "./WeatherCard";

function WeatherList({ dailyData }) {
    if (!dailyData || !Array.isArray(dailyData.time)) {
        return null;
    }

    return (
        <section className="weather-list">
            {dailyData.time.map((date, index) => (
                <WeatherCard
                    key={date}
                    date={date}
                    maxTemp={dailyData.temperature_2m_max?.[index]}
                    minTemp={dailyData.temperature_2m_min?.[index]}
                    weatherCode={dailyData.weather_code?.[index]}
                    windSpeed={dailyData.wind_speed_10m_max?.[index]}
                    precipitation={dailyData.precipitation_sum?.[index]}
                    uvIndex={dailyData.uv_index_max?.[index]}               
                />
            ))}
        </section>
    );
}

export default WeatherList;