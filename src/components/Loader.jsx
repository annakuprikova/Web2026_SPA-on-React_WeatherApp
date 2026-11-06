// Індикатор завантаження

function Loader() {
    return (
    <div className="loader-container">
        <div className="loader-spinner"></div>
        <p className="loader-text">Завантаження прогнозу погоди...</p>
    </div>
    );
}

export default Loader;