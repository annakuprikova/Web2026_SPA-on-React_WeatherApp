# Weather Dashboard SPA

A student Single Page Application (SPA) for a 5-day weather forecast with geolocation support, dynamic reverse geocoding, and cookie-based authentication.

## Tech Stack

- Frontend: React, Vite, React Router DOM, JSX
- Styling: CSS Modules / CSS Variables, BEM methodology, responsive layout (Flexbox / Grid)
- APIs & Services:
  - Open-Meteo API (weather data and meteorological metrics)
  - Nominatim OpenStreetMap API (reverse geocoding to determine city name by coordinates)
  - Browser Geolocation API
- State Management & Storage: React Hooks (`useState`, `useEffect`), browser Cookies (`document.cookie`)

## Key Features
> **Note:** This is an educational/portfolio project. Authentication is implemented in a simplified client-side manner using cookies for demonstration purposes and does not reflect production-level security standards.

1. Authorization: Protected access to the main screen using cookie tokens (routing implemented via private routes `ProtectedRoute`).
2. Interactive Geolocation:
   - Automatic forecast loading for Kyiv by default.
   - "Use my location" button that detects current user coordinates via the browser.
   - Automatic conversion of coordinates into the actual city name (e.g., Dnipro, Lviv, Odesa) using the OpenStreetMap API.
3. Detailed 5-Day Weather Forecast:
   - Dynamic display of maximum and minimum temperature.
   - Mapping of SVG weather icons based on Open-Meteo codes (`sunny`, `cloudy`, `rainy`, `snowy`, `windy`).
   - Advanced meteorological metrics for each card: maximum wind speed (`km/h`), precipitation amount (`mm`), and ultraviolet index (`UV`).

## How to Run Locally

1. Clone the repository:
   ```bash
   git clone [https://github.com/annakuprikova/Web2026_SPA-on-React_WeatherApp.git](https://github.com/annakuprikova/Web2026_SPA-on-React_WeatherApp.git)