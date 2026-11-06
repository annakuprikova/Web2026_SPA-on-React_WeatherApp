// Головний компонент і налаштування маршрутизації

import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import ProtectedRoute from './routes/ProtectedRoute';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LoginPage />} />

                {/* Захищений маршрут для Dashboard */}
                <Route
                    path='/dashboard'
                    element={
                        <ProtectedRoute>
                            <DashboardPage />
                        </ProtectedRoute>
                    }
                />

                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App