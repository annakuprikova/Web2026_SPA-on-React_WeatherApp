// Перевірка авторизації
import { Navigate } from "react-router-dom";
import { getAuthCookie } from "../utils/auth";

function ProtectedRoute({ children }) {
    const isAuthenticated = getAuthCookie();

    if (!isAuthenticated) {
        return <Navigate to="/" replace />
    }

    return children;
}

export default ProtectedRoute;