// Configuración con DPI 1200 y Sensibilidad 1200 para Free Fire
const SETTINGS = {
    normal: {
        dpi: 1200,
        sensitivity: 75,
        labelOn: "🔹 Modo Normal ON",
        labelOff: "🔹 Modo Normal OFF",
        descriptionOn: "Modo Normal activado - 1200 DPI | Sensibilidad 75%",
        descriptionOff: "Modo Normal desactivado"
    },
    game: {
        dpi: 1200,
        sensitivity: 95,
        labelOn: "🎮 Modo Juegos ON",
        labelOff: "🎮 Modo Juegos OFF",
        descriptionOn: "Modo Juegos activado - 1200 DPI | Sensibilidad 95%",
        descriptionOff: "Modo Juegos desactivado"
    },
    ff: {
        dpi: 1200,
        sensitivity: 1200,
        labelOn: "🔥 Modo Free Fire ON",
        labelOff: "🔥 Modo Free Fire OFF",
        descriptionOn: "Modo Free Fire activado - 1200 DPI | Sensibilidad 1200%",
        descriptionOff: "Modo Free Fire desactivado"
    }
};

// Estado de cada modo
let modeStates = {
    normal: false,
    game: false,
    ff: false
};

// Elementos del DOM
document.addEventListener('DOMContentLoaded', function() {
    const normalBtn = document.getElementById('normalMode');
    const gameBtn = document.getElementById('gameMode');
    const ffBtn = document.getElementById('ffMode');
    const statusDiv = document.getElementById('status');

    // Función de activación/desactivación
    function toggleMode(mode, button) {
        modeStates[mode] = !modeStates[mode];
        button.textContent = modeStates[mode] ? SETTINGS[mode].labelOn : SETTINGS[mode].labelOff;
        statusDiv.textContent = modeStates[mode] ? SETTINGS[mode].descriptionOn : SETTINGS[mode].descriptionOff;
        
        localStorage.setItem('tactileSettings_' + mode, JSON.stringify({
            active: modeStates[mode],
            dpi: SETTINGS[mode].dpi,
            sensitivity: SETTINGS[mode].sensitivity
        }));
    }

    // Eventos y carga de estado guardado
    if(normalBtn) {
        const saved = localStorage.getItem('tactileSettings_normal');
        if(saved) modeStates.normal = JSON.parse(saved).active;
        normalBtn.textContent = modeStates.normal ? SETTINGS.normal.labelOn : SETTINGS.normal.labelOff;
        normalBtn.addEventListener('click', () => toggleMode('normal', normalBtn));
    }

    if(gameBtn) {
        const saved = localStorage.getItem('tactileSettings_game');
        if(saved) modeStates.game = JSON.parse(saved).active;
        gameBtn.textContent = modeStates.game ? SETTINGS.game.labelOn : SETTINGS.game.labelOff;
        gameBtn.addEventListener('click', () => toggleMode('game', gameBtn));
    }

    if(ffBtn) {
        const saved = localStorage.getItem('tactileSettings_ff');
        if(saved) modeStates.ff = JSON.parse(saved).active;
        ffBtn.textContent = modeStates.ff ? SETTINGS.ff.labelOn : SETTINGS.ff.labelOff;
        ffBtn.addEventListener('click', () => toggleMode('ff', ffBtn));
    }
});
