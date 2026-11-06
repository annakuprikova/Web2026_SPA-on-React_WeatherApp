// Запити до погодного API
// https://api.open-meteo.com/v1/forecast?latitude=50.4501&longitude=30.5234&daily=weather_code,temperature_2m_max,temperature_2m_min,wind_speed_10m_max,precipitation_sum,uv_index_max&forecast_days=5
// https://nominatim.openstreetmap.org/reverse?format=json&lat=50.4501&lon=30.5234&accept-language=uk`;

const WEATHER_API_URL = "https://api.open-meteo.com/v1/forecast";
const GEOCODING_API_URL = "https://nominatim.openstreetmap.org/reverse";

export async function getWeatherData(lat = 50.4501, lon = 30.5234) {
    const params = new URLSearchParams({
        latitude: lat,
        longitude: lon,
        daily: [
            "weather_code",
            "temperature_2m_max",
            "temperature_2m_min",
            "wind_speed_10m_max",
            "precipitation_sum",
            "uv_index_max"
        ].join(","),
        forecast_days: "5",
        timezone: "auto"
    });

    try {
        const response = await fetch(`${WEATHER_API_URL}?${params}`);

        if (!response.ok) {
            throw new Error('Не вдалося отримати дані про погоду');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Помилка завантаження сервера:", error);
        throw error;
    }
}



// Функція для визначення назви міста за координатами
export async function getCityName(lat, lon) {
    const params = new URLSearchParams({
        format: "jsonv2",
        lat,
        lon,
        "accept-language": "uk"
    });

    try {
        const response = await fetch(`${GEOCODING_API_URL}?${params}`);

        if (!response.ok) {
            throw new Error('Не вдалося отримати назву міста');
        }

        const data = await response.json();
        const address = data.address;

        if (!address) {
            return "Поточне місцезнаходження";
        }

        return (
            address.city ||
            address.town ||
            address.village ||
            address.municipality ||
            address.county ||
            "Поточне місцезнаходження"
        );
    } catch (error) {
        console.error("Помилка геокодування:", error);
        return "Поточне місцезнаходження";
    }
}