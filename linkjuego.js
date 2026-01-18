// ========== DATOS DE JUEGOS ==========
const juegos = {
    "1": {
        nombre: "GEOMETRY DASH",
        descripcion: "Juego de ritmo y plataformas adictivo. Versión completa con todos los niveles.",
        icono: "fa-running",
        iconoColor: "linear-gradient(135deg, #00ff88, #00cc66)",
        categoria: "Plataformas",
        enlaces: {
            mega: "https://mega.nz/file/juego1",
            mediafire: "",
            drive: "https://drive.google.com/file/d/1YdUdiQacaXvg9jlM6YqMQQgvui8m9M49/view"
        },
        size: "95 MB",
        jugadores: "1 Jugador",
        version: "2.11",
        requisitos: [
            "Windows 7/8/10/11",
            "2 GB RAM",
            "200 MB espacio libre",
            "Tarjeta gráfica básica",
            "Resolución 1024x768"
        ],
        notas: "Versión completa con todos los niveles desbloqueados."
    },
    "2": {
        nombre: "BALATRO",
        descripcion: "Póker roguelike adictivo. Mod con recursos ilimitados y todas las cartas.",
        icono: "fa-dice",
        iconoColor: "linear-gradient(135deg, #FF6B6B, #4ECDC4)",
        categoria: "Roguelike",
        enlaces: {
            mega: "https://mega.nz/file/juego2",
            mediafire: "https://www.mediafire.com/file/juego2",
            drive: "https://drive.google.com/file/d/1SKe28oDJemYniB2da_dTrBx0tXsnflEh/view"
        },
        size: "85 MB",
        jugadores: "1 Jugador",
        version: "1.0.0",
        requisitos: [
            "Windows 10/11",
            "4 GB RAM",
            "100 MB espacio libre",
            "DirectX 11",
            "Resolución 1280x720"
        ],
        notas: "Mod con recursos ilimitados. Todos los mazos desbloqueados."
    },
    "3": {
        nombre: "GTA 3 OPTIMIZADO",
        descripcion: "Clásico de mundo abierto optimizado para PCs modernos. Texturas HD.",
        icono: "fa-car",
        iconoColor: "linear-gradient(135deg, #7209B7, #3A0CA3)",
        categoria: "Open World",
        enlaces: {
            mega: "https://mega.nz/file/juego3",
            mediafire: "https://www.mediafire.com/file/juego3",
            drive: "https://drive.google.com/file/d/1bPugJDhjborrq1yzUm3XKtyQnxWpooiF/view"
        },
        size: "1.2 GB",
        jugadores: "1 Jugador",
        version: "Optimizado",
        requisitos: [
            "Windows 10/11",
            "4 GB RAM",
            "2 GB espacio libre",
            "Tarjeta gráfica 1 GB",
            "Resolución 1280x720"
        ],
        notas: "Texturas HD, optimizado para Windows 10/11."
    },
    "4": {
        nombre: "HOLLOW KNIGHT",
        descripcion: "Aventura metroidvania con arte impresionante. Edición completa con DLCs.",
        icono: "fa-bug",
        iconoColor: "linear-gradient(135deg, #00BBF9, #00F5D4)",
        categoria: "Metroidvania",
        enlaces: {
            mega: "https://mega.nz/file/juego3",
            mediafire: "https://www.mediafire.com/file/juego3",
            drive: "https://drive.google.com/file/d/1RDECccRBRJLHuYq-rb0eOnIMK-sd2Tw4/view"
        },
        size: "2.8 GB",
        jugadores: "1 Jugador",
        version: "Godmaster",
        requisitos: [
            "Windows 7/8/10",
            "8 GB RAM",
            "9 GB espacio libre",
            "DirectX 10",
            "Resolución 1280x720"
        ],
        notas: "Incluye todos los DLC: Godmaster, Grimm Troupe, Lifeblood."
    },
    "5": {
        nombre: "LEGO ISLAND",
        descripcion: "Clásico de LEGO optimizado para Windows 10/11. Nostalgia garantizada.",
        icono: "fa-cube",
        iconoColor: "linear-gradient(135deg, #F72585, #B5179E)",
        categoria: "Aventura",
        enlaces: {
            mega: "https://mega.nz/file/juego3",
            mediafire: "https://www.mediafire.com/file/juego3",
            drive: "https://drive.google.com/file/d/1dggGrnV3uWVmdS49ZWWD8ARuRLJksl1c/view"
        },
        size: "650 MB",
        jugadores: "1 Jugador",
        version: "Optimizado",
        requisitos: [
            "Windows XP/Vista/7/8/10/11",
            "1 GB RAM",
            "700 MB espacio libre",
            "DirectX 9.0c",
            "Resolución 800x600"
        ],
        notas: "Optimizado para sistemas modernos. Compatibilidad total."
    },
    "6": {
        nombre: "GTA VICE CITY",
        descripcion: "Clásico de los 80s con soundtrack icónico. Versión HD optimizada.",
        icono: "fa-sun",
        iconoColor: "linear-gradient(135deg, #FF9E00, #FF6D00)",
        categoria: "Open World",
        enlaces: {
            mega: "https://mega.nz/file/juego3",
            mediafire: "https://www.mediafire.com/file/juego3",
            drive: "https://drive.google.com/file/d/1sXdnJJdTyiS65ciKydKeQsJIza-3_R7L/view"
        },
        size: "1.5 GB",
        jugadores: "1 Jugador",
        version: "Definitive",
        requisitos: [
            "Windows 10/11",
            "4 GB RAM",
            "2 GB espacio libre",
            "Tarjeta gráfica 512 MB",
            "Resolución 1280x720"
        ],
        notas: "Texturas mejoradas, soundtrack original incluido."
    },
    "7": {
        nombre: "ROBLOX STUDIO",
        descripcion: "Plataforma de creación de juegos. Versión completa sin límites.",
        icono: "fa-users",
        iconoColor: "linear-gradient(135deg, #FF595E, #FFCA3A)",
        categoria: "Sandbox",
        enlaces: {
            mega: "https://mega.nz/file/juego3",
            mediafire: "https://www.mediafire.com/file/juego3",
            drive: "https://drive.google.com/file/d/1J6bgVauBJpZWBo0yhm6ecCrKhg_mL-V_/view"
        },
        size: "280 MB",
        jugadores: "Online",
        version: "Studio",
        requisitos: [
            "Windows 7/8/10/11",
            "4 GB RAM",
            "1 GB espacio libre",
            "DirectX 9",
            "Conexión a Internet"
        ],
        notas: "Versión Studio para crear juegos. No requiere cuenta premium."
    },
    "8": {
        nombre: "CELESTE",
        descripcion: "Juego de plataformas indie aclamado. Historia emocionante y desafíos.",
        icono: "fa-mountain",
        iconoColor: "linear-gradient(135deg, #6A0572, #AB83A1)",
        categoria: "Plataformas",
        enlaces: {
            mega: "https://mega.nz/file/juego3",
            mediafire: "https://www.mediafire.com/file/juego3",
            drive: "https://drive.google.com/file/d/1ExJQ0kM-0ZyZyndPj-PaUQmMzXwlvdJU/view"
        },
        size: "1.2 GB",
        jugadores: "1 Jugador",
        version: "Farewell",
        requisitos: [
            "Windows 7/8/10",
            "2 GB RAM",
            "2 GB espacio libre",
            "DirectX 9.0",
            "Resolución 1280x720"
        ],
        notas: "Incluye capítulo Farewell. Modo asistencia incluido."
    },
    "9": {
        nombre: "CASTLE CRASHERS",
        descripcion: "Beat 'em up cooperativo para hasta 4 jugadores. Divertido y caótico.",
        icono: "fa-shield-alt",
        iconoColor: "linear-gradient(135deg, #2A9D8F, #E9C46A)",
        categoria: "Beat 'em up",
        enlaces: {
            mega: "https://mega.nz/file/juego3",
            mediafire: "https://www.mediafire.com/file/juego3",
            drive: "https://drive.google.com/file/d/1OX0XzLZPegpoSLLj6DythM0XUc3zSG0w/view"
        },
        size: "350 MB",
        jugadores: "4 Jugadores",
        version: "Remastered",
        requisitos: [
            "Windows 7/8/10",
            "2 GB RAM",
            "500 MB espacio libre",
            "DirectX 9.0c",
            "Resolución 1280x720"
        ],
        notas: "Cooperativo local y online. Todos los personajes desbloqueados."
    },
    "10": {
        nombre: "THE FOREST",
        descripcion: "Survival horror en primera persona. Construye, explora y sobrevive.",
        icono: "fa-tree",
        iconoColor: "linear-gradient(135deg, #E76F51, #F4A261)",
        categoria: "Survival",
        enlaces: {
            mega: "https://mega.nz/file/juego3",
            mediafire: "https://www.mediafire.com/file/juego3",
            drive: "https://drive.google.com/file/d/1P5i9IA1Zk8kBXi0qcLzjiS0X7seM7wIu/view"
        },
        size: "5.2 GB",
        jugadores: "Co-op",
        version: "1.12",
        requisitos: [
            "Windows 7/8/10",
            "8 GB RAM",
            "6 GB espacio libre",
            "DirectX 11",
            "Resolución 1280x720"
        ],
        notas: "Modo cooperativo funcional. Final alternativo incluido."
    },
    "11": {
        nombre: "ANGRY BIRDS",
        descripcion: "Clásico juego de física. Versión completa para PC con todos los niveles.",
        icono: "fa-dove",
        iconoColor: "linear-gradient(135deg, #264653, #2A9D8F)",
        categoria: "Casual",
        enlaces: {
            mega: "https://mega.nz/file/juego3",
            mediafire: "https://www.mediafire.com/file/juego3",
            drive: "https://drive.google.com/file/d/1bBY_8vTi5tb9L35dupF69UekseoELeMl/view"
        },
        size: "180 MB",
        jugadores: "1 Jugador",
        version: "PC Edition",
        requisitos: [
            "Windows XP/Vista/7/8/10",
            "1 GB RAM",
            "250 MB espacio libre",
            "DirectX 9.0",
            "Resolución 1024x768"
        ],
        notas: "Todos los episodios desbloquedos. Sin anuncios."
    },
    "12": {
        nombre: "FNAF 1, 2 & 3",
        descripcion: "Trilogía completa de terror. Sobrevive a las noches en la pizzería.",
        icono: "fa-ghost",
        iconoColor: "linear-gradient(135deg, #457B9D, #A8DADC)",
        categoria: "Terror",
        enlaces: {
            mega: "https://mega.nz/file/juego3",
            mediafire: "https://www.mediafire.com/file/juego3",
            drive: "https://drive.google.com/file/d/18aIxCo_Bdydytkimren5PoyO6_flr0n3/view"
        },
        size: "450 MB",
        jugadores: "1 Jugador",
        version: "Trilogy",
        requisitos: [
            "Windows 7/8/10",
            "2 GB RAM",
            "500 MB espacio libre",
            "DirectX 9.0",
            "Resolución 1280x720"
        ],
        notas: "Pack con los primeros 3 juegos. Noches personalizables."
    },
    "13": {
        nombre: "FIVE NIGHTS 4",
        descripcion: "La parte más terrorífica de la saga. En tu propia habitación.",
        icono: "fa-bed",
        iconoColor: "linear-gradient(135deg, #E63946, #F1FAEE)",
        categoria: "Terror",
        enlaces: {
            mega: "https://mega.nz/file/juego3",
            mediafire: "https://www.mediafire.com/file/juego3",
            drive: "https://drive.google.com/file/d/1RSn1hoKgQ74_utii_V65JiTXleY4u7ES/view"
        },
        size: "320 MB",
        jugadores: "1 Jugador",
        version: "Final Chapter",
        requisitos: [
            "Windows 7/8/10",
            "2 GB RAM",
            "400 MB espacio libre",
            "DirectX 9.0",
            "Resolución 1280x720"
        ],
        notas: "Modo noche personalizable. Easter eggs incluidos."
    },
    "14": {
        nombre: "TERRARIA",
        descripcion: "Aventura sandbox 2D. Excava, construye y lucha. Edición completa.",
        icono: "fa-gem",
        iconoColor: "linear-gradient(135deg, #FF9F1C, #FFBF69)",
        categoria: "Sandbox",
        enlaces: {
            mega: "https://mega.nz/file/juego3",
            mediafire: "https://www.mediafire.com/file/juego3",
            drive: "https://drive.google.com/file/d/1D0XSPeMWpD4zektQOBMbmpREJF9UksVx/view"
        },
        size: "250 MB",
        jugadores: "Co-op",
        version: "1.4.4.9",
        requisitos: [
            "Windows XP/Vista/7/8/10",
            "2.5 GB RAM",
            "500 MB espacio libre",
            "DirectX 9.0c",
            "Resolución 1024x768"
        ],
        notas: "Journey's End actualización. Multiplayer local y online."
    },
    "15": {
        nombre: "METAL SLUG",
        descripcion: "Clásico run and gun arcade. Gráficos pixel art y acción sin parar.",
        icono: "fa-gun",
        iconoColor: "linear-gradient(135deg, #4361EE, #3A0CA3)",
        categoria: "Arcade",
        enlaces: {
            mega: "https://mega.nz/file/juego3",
            mediafire: "https://www.mediafire.com/file/juego3",
            drive: "https://drive.google.com/file/d/10wh0iDt_tze_vASWTZ6Z94wLt5I4yVGD/view"
        },
        size: "180 MB",
        jugadores: "2 Jugadores",
        version: "Arcade",
        requisitos: [
            "Windows XP/Vista/7/8/10",
            "512 MB RAM",
            "200 MB espacio libre",
            "DirectX 8.0",
            "Resolución 640x480"
        ],
        notas: "Emulador MAME incluido. Controles configurados."
    },
    "16": {
        nombre: "GARRY'S MOD",
        descripcion: "Sandbox de física sin objetivos. Crea lo que imagines con miles de mods.",
        icono: "fa-cogs",
        iconoColor: "linear-gradient(135deg, #4CC9F0, #4895EF)",
        categoria: "Sandbox",
        enlaces: {
            mega: "https://mega.nz/file/juego3",
            mediafire: "https://www.mediafire.com/file/juego3",
            drive: "https://drive.google.com/file/d/1-dZun61rOrrjo8omBMafc5pQbch_ytyO/view"
        },
        size: "3.5 GB",
        jugadores: "Multiplayer",
        version: "GMod 13",
        requisitos: [
            "Windows 7/8/10",
            "4 GB RAM",
            "5 GB espacio libre",
            "DirectX 9.0",
            "Conexión a Internet"
        ],
        notas: "Requiere Source SDK. Addons populares preinstalados."
    },
    "17": {
        nombre: "SUPERMARKET SIMULATOR",
        descripcion: "Administra tu propio supermercado. Gestiona empleados, stock y finanzas.",
        icono: "fa-shopping-cart",
        iconoColor: "linear-gradient(135deg, #7209B7, #560BAD)",
        categoria: "Simulación",
        enlaces: {
            mega: "https://mega.nz/file/juego3",
            mediafire: "https://www.mediafire.com/file/juego3",
            drive: "https://drive.google.com/file/d/1QoDiRD6gARlAjiXZ4lf-sSW8URVy1bzX/view"
        },
        size: "1.8 GB",
        jugadores: "1 Jugador",
        version: "2024",
        requisitos: [
            "Windows 10/11",
            "8 GB RAM",
            "3 GB espacio libre",
            "DirectX 11",
            "Resolución 1920x1080"
        ],
        notas: "Simulación realista. Modo carrera y libre."
    },
    "18": {
        nombre: "SKLAUNCHER MINECRAFT",
        descripcion: "Launcher alternativo para Minecraft. Juega gratis con mods y skins.",
        icono: "fa-cube",
        iconoColor: "linear-gradient(135deg, #3A0CA3, #4361EE)",
        categoria: "Sandbox",
        enlaces: {
            mega: "https://mega.nz/file/juego3",
            mediafire: "https://www.mediafire.com/file/juego3",
            drive: "https://drive.google.com/file/d/1FRLqaGVaUyoGVzxz9Au7UiMOW0CPSARY/view"
        },
        size: "280 MB",
        jugadores: "Online",
        version: "3.0",
        requisitos: [
            "Windows 7/8/10/11",
            "4 GB RAM",
            "1 GB espacio libre",
            "Java 8+",
            "Conexión a Internet"
        ],
        notas: "No requiere cuenta original. Actualizaciones automáticas."
    },
    "19": {
        nombre: "OUTLAST",
        descripcion: "Survival horror de infiltración. Solo tienes una cámara y mucho miedo.",
        icono: "fa-video",
        iconoColor: "linear-gradient(135deg, #F72585, #B5179E)",
        categoria: "Survival Horror",
        enlaces: {
            mega: "https://mega.nz/file/juego3",
            mediafire: "https://www.mediafire.com/file/juego3",
            drive: "https://drive.google.com/file/d/103pFXh7AWVQX8l5zuzWI0uT9qgnzjlAW/view"
        },
        size: "5.5 GB",
        jugadores: "1 Jugador",
        version: "Whistleblower",
        requisitos: [
            "Windows Vista/7/8/10",
            "4 GB RAM",
            "6 GB espacio libre",
            "DirectX 10",
            "Resolución 1280x720"
        ],
        notas: "Incluye DLC Whistleblower. Alta calidad de gráficos."
    },
    "20": {
        nombre: "GTA SAN ANDREAS",
        descripcion: "El mejor GTA de la historia. Versión definitiva con mods gráficos.",
        icono: "fa-gangster",
        iconoColor: "linear-gradient(135deg, #FF6B6B, #4ECDC4)",
        categoria: "Open World",
        enlaces: {
            mega: "https://mega.nz/file/juego3",
            mediafire: "https://www.mediafire.com/file/juego3",
            drive: "https://drive.google.com/file/d/12kGEt9G0UXMVCbbUtRxKi-16xej6UCay/view"
        },
        size: "4.2 GB",
        jugadores: "1 Jugador",
        version: "Definitive",
        requisitos: [
            "Windows 10/11",
            "8 GB RAM",
            "5 GB espacio libre",
            "DirectX 9.0c",
            "Resolución 1920x1080"
        ],
        notas: "Mods gráficos preinstalados. Misiones secundarias completas."
    },
    "21": {
        nombre: "LEFT 4 DEAD 2",
        descripcion: "Cooperativo zombie para 4 jugadores. Mods y servidores comunitarios.",
        icono: "fa-skull-crossbones",
        iconoColor: "linear-gradient(135deg, #FF9E00, #FF6D00)",
        categoria: "Co-op",
        enlaces: {
            mega: "https://mega.nz/file/juego3",
            mediafire: "https://www.mediafire.com/file/juego3",
            drive: "https://drive.google.com/file/d/19bWlwfPPlxLnV8F5_o32ke5JZoUFTZs0/view"
        },
        size: "7.5 GB",
        jugadores: "4 Jugadores",
        version: "The Last Stand",
        requisitos: [
            "Windows 7/8/10",
            "4 GB RAM",
            "13 GB espacio libre",
            "DirectX 9.0c",
            "Resolución 1280x720"
        ],
        notas: "Actualización The Last Stand. Mods populares incluidos."
    },
    "22": {
        nombre: "LITTLE NIGHTMARES",
        descripcion: "Aventura de terror atmosférico. Escapa de pesadillas en un mundo extraño.",
        icono: "fa-child",
        iconoColor: "linear-gradient(135deg, #6A0572, #AB83A1)",
        categoria: "Horror",
        enlaces: {
            mega: "https://mega.nz/file/juego3",
            mediafire: "https://www.mediafire.com/file/juego3",
            drive: "https://drive.google.com/file/d/1n9r1Qebye-HCt5hjd0PjVQBYnAcBfg7b/view"
        },
        size: "3.8 GB",
        jugadores: "1 Jugador",
        version: "Complete",
        requisitos: [
            "Windows 7/8/10",
            "6 GB RAM",
            "10 GB espacio libre",
            "DirectX 11",
            "Resolución 1280x720"
        ],
        notas: "Incluye DLCs Secrets of the Maw. Alta calidad gráfica."
    }
};

// ========== FUNCIÓN PARA ABRIR MODAL ==========
function abrirModal(juegoId) {
    const modal = document.getElementById('downloadModal');
    const juego = juegos[juegoId];
    
    if (!juego) {
        mostrarError('⚠️ Juego no encontrado. Intenta nuevamente.');
        return;
    }
    
    // Actualizar información del modal
    document.getElementById('modalGameTitle').textContent = juego.nombre;
    document.getElementById('modalGameDescription').textContent = juego.descripcion;
    document.getElementById('modalGameSize').textContent = juego.size;
    document.getElementById('modalGamePlayers').textContent = juego.jugadores;
    
    // Actualizar icono del modal
    const modalIcon = document.getElementById('modalGameIcon');
    modalIcon.innerHTML = `<i class="fas ${juego.icono}"></i>`;
    modalIcon.style.background = juego.iconoColor;
    
    // Actualizar requisitos
    const requisitosList = document.getElementById('modalRequirements');
    requisitosList.innerHTML = '';
    juego.requisitos.forEach(req => {
        const li = document.createElement('li');
        li.textContent = req;
        requisitosList.appendChild(li);
    });
    
    // Actualizar enlaces
    document.getElementById('linkMega').href = juego.enlaces.mega;
    document.getElementById('linkMediafire').href = juego.enlaces.mediafire;
    document.getElementById('linkdrive').href = juego.enlaces.drive;
    
    // Validar y ajustar enlaces vacíos
    const enlaces = document.querySelectorAll('.download-option');
    enlaces.forEach((enlace, index) => {
        const provider = enlace.querySelector('strong').textContent.toLowerCase();
        const sizeInfo = enlace.querySelector('.size');
        
        if (sizeInfo) {
            sizeInfo.textContent = `${juego.size} • ${juego.version}`;
        }
        
        // Si el enlace está vacío, deshabilitarlo
        const url = enlace.href;
        if (!url || url.includes('undefined') || url === window.location.href + '#') {
            enlace.style.opacity = '0.5';
            enlace.style.pointerEvents = 'none';
            enlace.querySelector('.download-btn').innerHTML = '<i class="fas fa-times"></i> NO DISPONIBLE';
            enlace.querySelector('.download-btn').style.background = '#ff4444';
        } else {
            enlace.style.opacity = '1';
            enlace.style.pointerEvents = 'auto';
            enlace.querySelector('.download-btn').innerHTML = '<i class="fas fa-download"></i> DESCARGAR';
            enlace.querySelector('.download-btn').style.background = 'var(--primary-color)';
        }
    });
    
    // Mostrar modal con animación
    modal.style.display = 'flex';
    
    // Efecto de aparición
    setTimeout(() => {
        modal.style.opacity = '1';
    }, 10);
    
    // Registrar evento de descarga en consola
    console.log(`🎮 Iniciando descarga de ${juego.nombre}`);
    console.log(`📁 Tamaño: ${juego.size} | Jugadores: ${juego.jugadores}`);
    
    // Bloquear scroll del body
    document.body.style.overflow = 'hidden';
    
    // Guardar estadística (simulada)
    guardarEstadisticaDescarga(juegoId, juego.nombre);
}

// ========== FUNCIÓN PARA CERRAR MODAL ==========
function cerrarModal() {
    const modal = document.getElementById('downloadModal');
    
    // Efecto de desaparición
    modal.style.opacity = '0';
    
    setTimeout(() => {
        modal.style.display = 'none';
        // Restaurar scroll del body
        document.body.style.overflow = 'auto';
    }, 300);
}

// ========== MANEJO DE ERRORES ==========
function mostrarError(mensaje) {
    // Crear overlay de error
    const errorOverlay = document.createElement('div');
    errorOverlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 3000;
    `;
    
    const errorContent = document.createElement('div');
    errorContent.style.cssText = `
        background: #141923;
        padding: 2rem;
        border-radius: 12px;
        border: 2px solid #ff4444;
        text-align: center;
        max-width: 400px;
        width: 90%;
    `;
    
    errorContent.innerHTML = `
        <i class="fas fa-exclamation-circle" style="color: #ff4444; font-size: 3rem; margin-bottom: 1rem;"></i>
        <h3 style="color: #fff; margin-bottom: 1rem;">Error</h3>
        <p style="color: #b0b0c0; margin-bottom: 1.5rem;">${mensaje}</p>
        <button onclick="this.parentElement.parentElement.remove()" 
                style="background: #ff4444; color: white; border: none; padding: 0.8rem 2rem; 
                       border-radius: 6px; cursor: pointer; font-weight: bold;">
            Cerrar
        </button>
    `;
    
    errorOverlay.appendChild(errorContent);
    document.body.appendChild(errorOverlay);
}

// ========== ESTADÍSTICAS DE DESCARGA (SIMULADO) ==========
function guardarEstadisticaDescarga(id, nombre) {
    // En un entorno real, aquí enviarías los datos a un servidor
    const estadisticas = JSON.parse(localStorage.getItem('kvers_games_downloads') || '[]');
    const nuevaDescarga = {
        id: id,
        nombre: nombre,
        fecha: new Date().toISOString(),
        plataforma: 'PC'
    };
    
    estadisticas.push(nuevaDescarga);
    localStorage.setItem('kvers_games_downloads', JSON.stringify(estadisticas.slice(-100))); // Guardar solo las últimas 100
    
    console.log(`📊 Estadística de juego guardada: ${nombre}`);
    
    // Actualizar contador en la interfaz si existe
    const downloadCount = document.getElementById('downloadCount');
    if (downloadCount) {
        downloadCount.textContent = estadisticas.length;
    }
}

// ========== VALIDACIÓN DE ENLACES ==========
function validarEnlaces() {
    const enlaces = document.querySelectorAll('.download-option');
    
    enlaces.forEach(enlace => {
        enlace.addEventListener('click', function(e) {
            const url = this.href;
            
            // Validar URL
            if (!url || url === '#' || url.includes('undefined')) {
                e.preventDefault();
                mostrarError('⚠️ Este servidor de descarga no está disponible para este juego. Por favor, selecciona otro servidor.');
                return false;
            }
            
            // Validar si es un enlace de error
            if (url.includes('error, seleccioan bien p webon')) {
                e.preventDefault();
                mostrarError('⚠️ Esta versión del juego no está disponible. Por favor, selecciona otro juego.');
                return false;
            }
            
            // Obtener información del juego
            const juegoNombre = document.getElementById('modalGameTitle').textContent;
            const juegoSize = document.getElementById('modalGameSize').textContent;
            const jugadores = document.getElementById('modalGamePlayers').textContent;
            const servidor = this.querySelector('strong').textContent;
            
            // Mostrar mensaje de confirmación
            const confirmacion = confirm(
                `¿Estás seguro de que quieres descargar "${juegoNombre}"?\n\n` +
                `• Tamaño: ${juegoSize}\n` +
                `• Jugadores: ${jugadores}\n` +
                `• Servidor: ${servidor}\n\n` +
                `Se abrirá una nueva ventana.`
            );
            
            if (!confirmacion) {
                e.preventDefault();
                return false;
            }
            
            // Registrar descarga exitosa
            console.log(`⬇️ Descargando: ${juegoNombre}`);
            console.log(`🔗 Servidor: ${servidor}`);
            
            // Mostrar notificación
            mostrarNotificacion(`Iniciando descarga de ${juegoNombre} desde ${servidor}...`, 'success');
            
            return true;
        });
    });
}

// ========== NOTIFICACIONES ==========
function mostrarNotificacion(mensaje, tipo = 'info') {
    const notificacion = document.createElement('div');
    const color = tipo === 'success' ? '#00ff88' : tipo === 'error' ? '#ff4444' : '#00bbf9';
    
    notificacion.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #141923;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        border-left: 4px solid ${color};
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        z-index: 4000;
        max-width: 350px;
        animation: slideIn 0.3s ease;
    `;
    
    notificacion.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px;">
            <i class="fas ${tipo === 'success' ? 'fa-check-circle' : tipo === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}" 
               style="color: ${color}; font-size: 1.2rem;"></i>
            <span>${mensaje}</span>
        </div>
    `;
    
    document.body.appendChild(notificacion);
    
    // Remover después de 5 segundos
    setTimeout(() => {
        notificacion.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            notificacion.remove();
        }, 300);
    }, 5000);
}

// ========== FUNCIONES DE UTILIDAD ==========
function buscarJuegoPorNombre(nombre) {
    return Object.values(juegos).find(juego => 
        juego.nombre.toLowerCase().includes(nombre.toLowerCase())
    );
}

function filtrarJuegosPorCategoria(categoria) {
    return Object.values(juegos).filter(juego => 
        juego.categoria.toLowerCase().includes(categoria.toLowerCase())
    );
}

function obtenerJuegosRecientes(limite = 5) {
    const estadisticas = JSON.parse(localStorage.getItem('kvers_games_downloads') || '[]');
    return estadisticas.slice(-limite).map(descarga => ({
        ...descarga,
        juego: juegos[descarga.id]
    }));
}

function verificarEspacioDisco(tamañoNecesario) {
    // Esta es una función simulada
    // En un entorno real, usarías una API del sistema
    console.log(`💾 Verificando espacio para: ${tamañoNecesario}`);
    return true; // Simular que siempre hay espacio
}

// ========== INICIALIZACIÓN ==========
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎮 KverSProject - Juegos PC cargado');
    console.log(`📚 Total de juegos disponibles: ${Object.keys(juegos).length}`);
    
    // Mostrar estadísticas iniciales
    const estadisticas = JSON.parse(localStorage.getItem('kvers_games_downloads') || '[]');
    if (estadisticas.length > 0) {
        console.log(`📈 Total de descargas de juegos: ${estadisticas.length}`);
        
        // Mostrar juego más descargado
        const conteo = {};
        estadisticas.forEach(d => {
            conteo[d.id] = (conteo[d.id] || 0) + 1;
        });
        
        const masDescargado = Object.entries(conteo).sort((a, b) => b[1] - a[1])[0];
        if (masDescargado) {
            const juego = juegos[masDescargado[0]];
            if (juego) {
                console.log(`🏆 Juego más descargado: ${juego.nombre} (${masDescargado[1]} descargas)`);
            }
        }
    }
    
    // Validar enlaces
    validarEnlaces();
    
    // Configurar cierre del modal con Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            cerrarModal();
        }
    });
    
    // Configurar cierre del modal al hacer clic fuera
    const modal = document.getElementById('downloadModal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                cerrarModal();
            }
        });
    }
    
    // Verificar si es primera visita
    if (!localStorage.getItem('kvers_first_visit_games')) {
        mostrarNotificacion('¡Bienvenido a KverSProject Juegos! Explora más de 20 títulos gratuitos.', 'info');
        localStorage.setItem('kvers_first_visit_games', 'true');
    }
    
    // Añadir efecto de carga inicial
    const cards = document.querySelectorAll('.game-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.05}s`;
    });
});

// ========== FUNCIÓN PARA COPIAR ENLACE ==========
function copiarEnlace(servidor) {
    const juegoId = Object.keys(juegos).find(id => 
        document.getElementById('modalGameTitle').textContent === juegos[id].nombre
    );
    
    if (juegoId) {
        const url = juegos[juegoId].enlaces[servidor];
        
        // Validar URL
        if (!url || url.includes('undefined') || url.includes('error')) {
            mostrarError('⚠️ Este enlace no está disponible para copiar.');
            return;
        }
        
        // Usar Clipboard API si está disponible
        if (navigator.clipboard) {
            navigator.clipboard.writeText(url).then(() => {
                mostrarNotificacion(`✅ Enlace de ${servidor} copiado al portapapeles`, 'success');
            }).catch(err => {
                console.error('Error al copiar:', err);
                copiarEnlaceFallback(url, servidor);
            });
        } else {
            copiarEnlaceFallback(url, servidor);
        }
    }
}

// Fallback para navegadores sin Clipboard API
function copiarEnlaceFallback(texto, servidor) {
    const textArea = document.createElement('textarea');
    textArea.value = texto;
    document.body.appendChild(textArea);
    textArea.select();
    
    try {
        document.execCommand('copy');
        mostrarNotificacion(`✅ Enlace de ${servidor} copiado al portapapeles`, 'success');
    } catch (err) {
        console.error('Error al copiar:', err);
        mostrarError('❌ No se pudo copiar el enlace. Copia manualmente la URL.');
    }
    
    document.body.removeChild(textArea);
}

// ========== EXPORTAR FUNCIONES GLOBALES ==========
window.abrirModal = abrirModal;
window.cerrarModal = cerrarModal;
window.copiarEnlace = copiarEnlace;

// Añadir estilos CSS para animaciones
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .game-card {
        animation: cardAppear 0.5s ease forwards;
        animation-play-state: paused;
    }
    
    @keyframes cardAppear {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);