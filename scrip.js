// Configuración con DPI 1200 y Sensibilidad 1200 para Free Fire
const SETTINGS = {
    normal: {
        dpi: 1200,
        sensitivity: 75,
        labelOn: "Modo Normal ON",
        labelOff: "Modo Normal OFF",
        descriptionOn: "Modo Normal activado - 1200 DPI | Sensibilidad 75%",
        descriptionOff: "Modo Normal desactivado"
    },
    game: {
        dpi: 1200,
        sensitivity: 95,
        labelOn: "Modo Juegos ON",
        labelOff: "Modo Juegos OFF",
        descriptionOn: "Modo Juegos activado - 1200 DPI | Sensibilidad 95%",
        descriptionOff: "Modo Juegos desactivado"
    },
    ff: {
        dpi: 1200,
        sensitivity: 1200,
        labelOn: "Modo Free Fire ON",
        labelOff: "Modo Free Fire OFF",
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
        // Cambia el estado
        modeStates[mode] = !modeStates[mode];
        
        // Actualiza el texto del botón
        button.textContent = modeStates[mode] ? SETTINGS[mode].labelOn : SETTINGS[mode].labelOff;
        
        // Actualiza el mensaje
        statusDiv.textContent = modeStates[mode] ? SETTINGS[mode].descriptionOn : SETTINGS[mode].descriptionOff;
        
        // Guarda la configuración
        const saveData = {
            mode: mode,
            active: modeStates[mode],
            dpi: SETTINGS[mode].dpi,
            sensitivity: SETTINGS[mode].sensitivity
        };
        localStorage.setItem('tactileSettings_' + mode, JSON.stringify(saveData));
    }

    // Eventos de los botones
    if(normalBtn) {
        normalBtn.addEventListener('click', () => toggleMode('normal', normalBtn));
        // Carga estado guardado
        const saved = localStorage.getItem('tactileSettings_normal');
        if(saved) {
            const data = JSON.parse(saved);
            modeStates.normal = data.active;
            normalBtn.textContent = data.active ? SETTINGS.normal.labelOn : SETTINGS.normal.labelOff;
        }
    }

    if(gameBtn) {
        gameBtn.addEventListener('click', () => toggleMode('game', gameBtn));
        // Carga estado guardado
        const saved = localStorage.getItem('tactileSettings_game');
        if(saved) {
            const data = JSON.parse(saved);
            modeStates.game = data.active;
            gameBtn.textContent = data.active ? SETTINGS.game.labelOn : SETTINGS.game.labelOff;
        }
    }

    if(ffBtn) {
        ffBtn.addEventListener('click', () => toggleMode('ff', ffBtn));
        // Carga estado guardado
        const saved = localStorage.getItem('tactileSettings_ff');
        if(saved) {
            const data = JSON.parse(saved);
            modeStates.ff = data.active;
            ffBtn.textContent = data.active ? SETTINGS.ff.labelOn : SETTINGS.ff.labelOff;
        }
    }
});
