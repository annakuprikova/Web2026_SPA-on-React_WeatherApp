import sunny from "../assets/icons/sunny.png";
import cloudy from "../assets/icons/cloudy.png";

import rainy from "../assets/icons/rainy.png";
import snowy from "../assets/icons/snow.png";

import foggy from "../assets/icons/foggy.png";
import thunder from "../assets/icons/thunder.png";


export function getWeatherIcon(code) {
    if (code === 0) {
        return { icon: sunny, label: "Сонячно" };
    }

    if ([1, 2, 3].includes(code)) {
        return { icon: cloudy, label: "Хмарно" };
    }

    if ([45, 48].includes(code)) {
        return { icon: foggy, label: "Туман" };
    }

    if ([51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82].includes(code)) {
        return { icon: rainy, label: "Дощ" };
    }

    if ([71, 73, 75, 77, 85, 86].includes(code)) {
        return { icon: snowy, label: "Сніг" };
    }

    if ([95, 96, 99].includes(code)) {
        return { icon: thunder, label: "Гроза" };
    }

    return { icon: cloudy, label: "Невідомі погодні умови" };
}