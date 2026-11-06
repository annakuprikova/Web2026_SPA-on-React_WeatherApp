// Сторінка входу
import LoginForm from "../components/LoginForm";
import { useNavigate } from "react-router-dom";

function LoginPage() {
    const navigate = useNavigate();

    const handleLoginSuccess = () => {
        navigate('/dashboard');
    };

    return (
        <div className="auth-page">
            <main className="auth-card">
                <header className="auth-card__header">
                    <h1 className="auth-card__title">Weather App</h1>
                    <p className="auth-card__subtitle">Увійдіть, щоб продовжити</p>
                </header>
                <LoginForm onSuccess={handleLoginSuccess} />
            </main>
        </div>
    );
}

export default LoginPage;