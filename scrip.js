// Configuración con DPI 1200 y Sensibilidad 1200 para Free Fire
const SETTINGS = {
    normal: {
        dpi: 1200,
        sensitivity: 75,
        description: "Modo Normal activado - 1200 DPI | Sensibilidad 75%"
    },
    game: {
        dpi: 1200,
        sensitivity: 95,
        description: "Modo Juegos activado - 1200 DPI | Sensibilidad 95%"
    },
    ff: {
        dpi: 1200,
        sensitivity: 1200,
        description: "Modo Free Fire activado - 1200 DPI | Sensibilidad 1200%"
    }
};

// Elementos del DOM
const normalBtn = document.getElementById('normalMode');
const gameBtn = document.getElementById('gameMode');
const ffBtn = document.getElementById('ffMode');
const statusDiv = document.getElementById('status');

// Funciones de activación
function activateMode(mode) {
    statusDiv.textContent = SETTINGS[mode].description;
    
    // Guarda la configuración en el navegador
    localStorage.setItem('tactileSettings', JSON.stringify(SETTINGS[mode]));
    
    // Efecto visual de confirmación
    statusDiv.style.color = "#FFEB3B";
    setTimeout(() => statusDiv.style.color = "#4CAF50", 2000);
}

// Eventos de los botones
normalBtn.addEventListener('click', () => activateMode('normal'));
gameBtn.addEventListener('click', () => activateMode('game'));
ffBtn.addEventListener('click', () => activateMode('ff'));

// Carga la configuración guardada al iniciar
window.onload = () => {
    const saved = localStorage.getItem('tactileSettings');
    if (saved) {
        const settings = JSON.parse(saved);
        statusDiv.textContent = `Configuración guardada - ${settings.dpi} DPI | Sensibilidad ${settings.sensitivity}%`;
    }
};
