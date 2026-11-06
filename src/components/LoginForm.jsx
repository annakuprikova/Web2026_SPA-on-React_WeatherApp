// Поля логіна, пароля, перевірка введення
import { useState } from "react";
import { setAuthCookie } from "../utils/auth";

const VALID_LOGIN = "mark5";
const VALID_PASSWORD = "12345";

function LoginForm({ onSuccess }) {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!login.trim()) {
            setError("Введіть свій логін");
            return;
        }

        if (!password.trim()) {
            setError("Введіть свій пароль");
            return;
        }

        if (login === VALID_LOGIN && password === VALID_PASSWORD) {
            setError("");
            setAuthCookie();
            onSuccess();
        } else {
            setError("Неправильний логін або пароль");
        }
    };

    const handleLoginChange = (event) => {
        setLogin(event.target.value);
        setError("");
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        setError("");
    };

    return (
        <form className="login-form" onSubmit={handleSubmit} noValidate>
            <div className="login-form__field">
                <label htmlFor="login-input" className="login-form__label">Login</label>
                <input
                    id="login-input"
                    className="login-form__input"
                    type="text"
                    value={login}
                    onChange={handleLoginChange}
                    placeholder="Enter login"
                    autoComplete="username"
                />
            </div>

            <div className="login-form__field">
                <label htmlFor="password-input" className="login-form__label">Password</label>
                <input
                    id="password-input"
                    className="login-form__input"
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="Enter password"
                    autoComplete="current-password"
                />
            </div>

            {error && <p className="login-form__error">{error}</p>}

            <button type="submit" className="login-form__button">Log in</button>
        </form>
    );
}

export default LoginForm;