// Сервіс для роботи з куками (Cookies)

export function setAuthCookie() {
    document.cookie = "isAuth=true; path=/; max-age=86400"; // діє 1 день
}

export function getAuthCookie() {
    return document.cookie
        .split("; ")
        .some(cookie => cookie === "isAuth=true");
}

export function removeAuthCookie() {
    document.cookie = "isAuth=false; path=/; max-age=0";
}