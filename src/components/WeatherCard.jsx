import { getWeatherIcon } from "../utils/weatherIcons";

import windIcon from "../assets/icons/wind.png";
import precipitationIcon from "../assets/icons/rain.png";
import uvIcon from "../assets/icons/uv.png";

// Одна картка погоди
function WeatherCard({ date, maxTemp, minTemp, weatherCode, windSpeed, precipitation, uvIndex }) {
    const { icon, label } = getWeatherIcon(weatherCode);

    const formattedDate = new Date(`${date}T12:00:00`).toLocaleDateString("uk-UA", {
        day: "numeric",
        month: "short",
        weekday: "short"
    });

    return (
        <article className="weather-card">
            <header className="weather-card__header">
                <time dateTime={date} className="weather-card__date">{formattedDate}</time>
            </header>

            <div className="weather-card__body">
                <img src={icon} alt={label} className="weather-card__icon" />
                <span className="weather-card__status">{label}</span>
            </div>

            <div className="weather-card__details">
                <div className="weather-card__detail-item">
                    <img src={windIcon} alt="Вітер" className="detail-icon" />
                    <span>{windSpeed ?? "—"} км/год</span>
                </div>
                <div className="weather-card__detail-item">
                    <img src={precipitationIcon} alt="Опади" className="detail-icon" />
                    <span>{precipitation ?? "—"} мм</span>
                </div>
                <div className="weather-card__detail-item">
                    <img src={uvIcon} alt="УФ-індекс" className="detail-icon" />
                    <span>УФ: {uvIndex ?? "—"}</span>
                </div>
            </div>

            <footer className="weather-card__footer">
                <div className="weather-card__temp">
                    <span className="temp-label">Макс:</span>
                    <span className="temp-value">
                        {maxTemp != null ? `${Math.round(maxTemp)}°C` : "—"}
                    </span>
                </div>
                <div className="weather-card__temp">
                    <span className="temp-label">Мін:</span>
                    <span className="temp-value">
                        {minTemp != null ? `${Math.round(minTemp)}°C` : "—"}
                    </span>
                </div>
            </footer>
        </article>
    );
}

export default WeatherCard;