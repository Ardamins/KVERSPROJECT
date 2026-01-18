// ========== DATOS DE EMULADORES ==========
const emuladores = {
    "1": {
        nombre: "BLUESTACKS 5",
        descripcion: "El emulador Android más rápido y estable. Optimizado para gaming con teclado y ratón.",
        icono: "fab fa-android",
        iconoColor: "linear-gradient(135deg, #00ff88, #00cc66)",
        categoria: "Android",
        tipo: "Android Emulator",
        enlaces: {
            mega: "https://mega.nz/file/bluestacks5",
            mediafire: "https://www.mediafire.com/file/bluestacks5",
            drive: "https://drive.google.com/file/d/bluestacks5"
        },
        size: "5.2 GB",
        ram: "4 GB mínima",
        version: "5.20.101",
        requisitos: [
            "Windows 7/8/10/11 (64-bit)",
            "4 GB RAM mínimo (8 GB recomendado)",
            "5 GB espacio libre en SSD",
            "Intel VT-x/AMD-V activado en BIOS",
            "DirectX 11 o superior",
            "Administrador para instalación"
        ],
        caracteristicas: [
            "Multi-instancia (ejecutar varios Android)",
            "Game Controls personalizados",
            "Bajo consumo de RAM",
            "Soporte para macros",
            "Compatibilidad con juegos exigentes"
        ],
        notas: "Versión limpia sin bloatware. Requiere virtualización activada."
    },
    "2": {
        nombre: "LDPLAYER 9",
        descripcion: "Emulador ligero y rápido. Perfecto para PCs con recursos limitados.",
        icono: "fas fa-tachometer-alt",
        iconoColor: "linear-gradient(135deg, #FF6B6B, #4ECDC4)",
        categoria: "Android",
        tipo: "Android Emulator",
        enlaces: {
            mega: "https://mega.nz/file/ldplayer9",
            mediafire: "https://www.mediafire.com/file/ldplayer9",
            drive: "https://drive.google.com/file/d/ldplayer9"
        },
        size: "1.8 GB",
        ram: "2 GB mínima",
        version: "9.0.57",
        requisitos: [
            "Windows 10/11 (64-bit)",
            "2 GB RAM mínimo (4 GB recomendado)",
            "2 GB espacio libre",
            "Virtualización activada",
            "DirectX 11",
            "Resolución 1920x1080"
        ],
        caracteristicas: [
            "Arranque ultra rápido",
            "Soporte para 120 FPS",
            "Android 9 Pie",
            "Macro scripting avanzado",
            "Optimizado para gaming"
        ],
        notas: "Ideal para PCs de gama media/baja. Configuración fácil."
    },
    "3": {
        nombre: "NOXPLAYER 7",
        descripcion: "Altamente personalizable con soporte para root y scripts avanzados.",
        icono: "fas fa-sliders-h",
        iconoColor: "linear-gradient(135deg, #7209B7, #3A0CA3)",
        categoria: "Android",
        tipo: "Android Emulator",
        enlaces: {
            mega: "https://mega.nz/file/noxplayer7",
            mediafire: "https://www.mediafire.com/file/noxplayer7",
            drive: "https://drive.google.com/file/d/noxplayer7"
        },
        size: "2.5 GB",
        ram: "1.5 GB mínima",
        version: "7.0.5.9",
        requisitos: [
            "Windows 7/8/10/11",
            "1.5 GB RAM mínimo",
            "3 GB espacio libre",
            "Intel/AMD CPU",
            "OpenGL 2.0+",
            "Resolución 1366x768"
        ],
        caracteristicas: [
            "Root incluido por defecto",
            "Soporte para scripts (.lua)",
            "Grabación de pantalla",
            "Ventana flexible/resizable",
            "Multi-instancia"
        ],
        notas: "Perfecto para desarrolladores y usuarios avanzados."
    },
    "4": {
        nombre: "MEMU PLAY 9",
        descripcion: "Excelente estabilidad y compatibilidad. Ideal para juegos exigentes.",
        icono: "fas fa-shield-alt",
        iconoColor: "linear-gradient(135deg, #00BBF9, #00F5D4)",
        categoria: "Android",
        tipo: "Android Emulator",
        enlaces: {
            mega: "https://mega.nz/file/memuplay9",
            mediafire: "https://www.mediafire.com/file/memuplay9",
            drive: "https://drive.google.com/file/d/memuplay9"
        },
        size: "3.2 GB",
        ram: "2 GB mínima",
        version: "9.0.3",
        requisitos: [
            "Windows 8/10/11 (64-bit)",
            "2 GB RAM mínimo",
            "4 GB espacio libre",
            "Virtualización activada",
            "DirectX 11+",
            "Resolución 1280x720"
        ],
        caracteristicas: [
            "Alta compatibilidad con juegos",
            "VPN integrado",
            "Modo escritorio optimizado",
            "Screenshot fácil",
            "Estabilidad garantizada"
        ],
        notas: "Menos bugs que otros emuladores. Muy estable."
    },
    "5": {
        nombre: "RETROARCH",
        descripcion: "Frontend unificado para emular +50 consolas retro. Altamente personalizable.",
        icono: "fas fa-history",
        iconoColor: "linear-gradient(135deg, #F72585, #B5179E)",
        categoria: "Retro",
        tipo: "Multi-system Emulator",
        enlaces: {
            mega: "https://mega.nz/file/retroarch",
            mediafire: "https://www.mediafire.com/file/retroarch",
            drive: "https://drive.google.com/file/d/retroarch"
        },
        size: "350 MB",
        ram: "512 MB mínima",
        version: "1.17.0",
        requisitos: [
            "Windows 7/8/10/11",
            "512 MB RAM mínimo",
            "500 MB espacio libre",
            "OpenGL 3.3 o Direct3D 11",
            "Cualquier CPU moderna",
            "Resolución 800x600"
        ],
        caracteristicas: [
            "+50 sistemas emulados",
            "Shaders gráficos avanzados",
            "Save states ilimitados",
            "Logros RetroAchievements",
            "Netplay (multijugador online)"
        ],
        notas: "Necesitas ROMs por separado. Interface curva de aprendizaje."
    },
    "6": {
        nombre: "PCSX2",
        descripcion: "Emulador de PlayStation 2. Soporte completo para juegos en HD.",
        icono: "fab fa-playstation",
        iconoColor: "linear-gradient(135deg, #FF9E00, #FF6D00)",
        categoria: "Retro",
        tipo: "PS2 Emulator",
        enlaces: {
            mega: "https://mega.nz/file/pcsx2",
            mediafire: "https://www.mediafire.com/file/pcsx2",
            drive: "https://drive.google.com/file/d/pcsx2"
        },
        size: "120 MB",
        ram: "4 GB mínima",
        version: "1.7.0",
        requisitos: [
            "Windows 10/11 (64-bit)",
            "4 GB RAM mínimo",
            "2 GB espacio libre",
            "GPU compatible Direct3D11/OpenGL",
            "CPU SSE4.1",
            "BIOS de PS2"
        ],
        caracteristicas: [
            "Resolución 4K/HD",
            "Soporte para cheats",
            "Compatibilidad alta",
            "Save states",
            "DualShock 2 emulado"
        ],
        notas: "Requiere BIOS de PS2 (no incluido). Juegos en formato ISO."
    },
    "7": {
        nombre: "DOLPHIN",
        descripcion: "Emulador de Nintendo GameCube y Wii. Alta compatibilidad y rendimiento.",
        icono: "fas fa-dolphin",
        iconoColor: "linear-gradient(135deg, #FF595E, #FFCA3A)",
        categoria: "Retro",
        tipo: "GameCube/Wii Emulator",
        enlaces: {
            mega: "https://mega.nz/file/dolphin",
            mediafire: "https://www.mediafire.com/file/dolphin",
            drive: "https://drive.google.com/file/d/dolphin"
        },
        size: "45 MB",
        ram: "2 GB mínima",
        version: "5.0",
        requisitos: [
            "Windows 7/8/10/11",
            "2 GB RAM mínimo",
            "500 MB espacio libre",
            "DirectX 11 o OpenGL 4.4",
            "CPU dual-core 3.0 GHz+",
            "Resolución 1280x720"
        ],
        caracteristicas: [
            "Soporte Wiimote/Wii U Pro",
            "Netplay integrado",
            "Resolución aumentada",
            "Save states",
            "Cheats compatibles"
        ],
        notas: "El mejor emulador para GC/Wii. Altamente optimizado."
    },
    "8": {
        nombre: "CITRA",
        descripcion: "Emulador de Nintendo 3DS. Soporte completo para juegos 3D.",
        icono: "fas fa-gamepad",
        iconoColor: "linear-gradient(135deg, #6A0572, #AB83A1)",
        categoria: "Handheld",
        tipo: "3DS Emulator",
        enlaces: {
            mega: "https://mega.nz/file/citra",
            mediafire: "https://www.mediafire.com/file/citra",
            drive: "https://drive.google.com/file/d/citra"
        },
        size: "85 MB",
        ram: "4 GB mínima",
        version: "2024",
        requisitos: [
            "Windows 8/10/11 (64-bit)",
            "4 GB RAM mínimo",
            "1 GB espacio libre",
            "OpenGL 3.3 o DirectX 11",
            "CPU quad-core",
            "Resolución 1920x1080"
        ],
        caracteristicas: [
            "3D estereoscópico",
            "Resolución personalizable",
            "Save states",
            "Screenshot",
            "Custom textures"
        ],
        notas: "Requiere firmware de 3DS. Juegos en formato .cia o .3ds"
    }
};

// ========== FUNCIÓN PARA ABRIR MODAL ==========
function abrirModal(emuladorId) {
    const modal = document.getElementById('downloadModal');
    const emulador = emuladores[emuladorId];
    
    if (!emulador) {
        mostrarError('⚠️ Emulador no encontrado. Intenta nuevamente.');
        return;
    }
    
    // Actualizar información del modal
    document.getElementById('modalEmulatorTitle').textContent = emulador.nombre;
    document.getElementById('modalEmulatorDescription').textContent = emulador.descripcion;
    document.getElementById('modalEmulatorSize').textContent = emulador.size;
    document.getElementById('modalEmulatorRAM').textContent = emulador.ram;
    
    // Actualizar icono del modal
    const modalIcon = document.getElementById('modalEmulatorIcon');
    modalIcon.innerHTML = `<i class="${emulador.icono}"></i>`;
    modalIcon.style.background = emulador.iconoColor;
    
    // Actualizar requisitos
    const requisitosList = document.getElementById('modalRequirements');
    requisitosList.innerHTML = '';
    emulador.requisitos.forEach(req => {
        const li = document.createElement('li');
        li.textContent = req;
        requisitosList.appendChild(li);
    });
    
    // Actualizar enlaces
    document.getElementById('linkMega').href = emulador.enlaces.mega;
    document.getElementById('linkMediafire').href = emulador.enlaces.mediafire;
    document.getElementById('linkDrive').href = emulador.enlaces.drive;
    
    // Validar y ajustar enlaces
    const enlaces = document.querySelectorAll('.download-option');
    enlaces.forEach((enlace, index) => {
        const provider = enlace.querySelector('strong').textContent.toLowerCase();
        const sizeInfo = enlace.querySelector('.size');
        
        if (sizeInfo) {
            sizeInfo.textContent = `${emulador.size} • ${emulador.version}`;
        }
        
        // Si el enlace es fake, deshabilitarlo
        const url = enlace.href;
        if (url.includes('fake_') || !url || url.includes('undefined')) {
            enlace.style.opacity = '0.5';
            enlace.style.pointerEvents = 'none';
            enlace.querySelector('.download-btn').innerHTML = '<i class="fas fa-times"></i> PRÓXIMAMENTE';
            enlace.querySelector('.download-btn').style.background = '#ff9e00';
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
    
    // Registrar evento en consola
    console.log(`🎮 Emulador seleccionado: ${emulador.nombre}`);
    console.log(`📁 Tamaño: ${emulador.size} | RAM: ${emulador.ram}`);
    console.log(`🔧 Tipo: ${emulador.tipo} | Categoría: ${emulador.categoria}`);
    
    // Bloquear scroll del body
    document.body.style.overflow = 'hidden';
    
    // Guardar estadística
    guardarEstadisticaEmulador(emuladorId, emulador.nombre);
    
    // Mostrar consejo específico
    mostrarConsejoEmulador(emulador.categoria);
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

// ========== CONSEJOS POR CATEGORÍA ==========
function mostrarConsejoEmulador(categoria) {
    const consejos = {
        "android": [
            "💡 Android Tip: Activa la virtualización en BIOS para mejor rendimiento",
            "🎮 Para gaming Android: Asigna 4-8 GB RAM y 2-4 núcleos de CPU",
            "⚡ Usa SSD para reducir tiempos de carga en emuladores Android",
            "🔄 Cierra programas innecesarios antes de usar emuladores Android"
        ],
        "retro": [
            "🎮 Retro Tip: Configura shaders para mejor apariencia gráfica",
            "💾 Para emuladores retro: Save states son tu mejor amigo",
            "🎯 Usa CRT shaders para auténtica experiencia retro",
            "🎵 Ajusta sincronización de audio para evitar lag"
        ],
        "handheld": [
            "📱 Handheld Tip: Configura pantalla táctil si tu juego la requiere",
            "🎮 Para DS/3DS: Configura pantalla dual correctamente",
            "🔧 Ajusta controles para imitar controles originales",
            "📊 Monitoriza FPS para óptimo rendimiento"
        ]
    };
    
    if (consejos[categoria]) {
        const consejoAleatorio = consejos[categoria][Math.floor(Math.random() * consejos[categoria].length)];
        console.log(consejoAleatorio);
    }
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

// ========== ESTADÍSTICAS (SIMULADO) ==========
function guardarEstadisticaEmulador(id, nombre) {
    const estadisticas = JSON.parse(localStorage.getItem('kvers_emulators_stats') || '[]');
    const nuevaEstadistica = {
        id: id,
        nombre: nombre,
        fecha: new Date().toISOString(),
        categoria: emuladores[id].categoria
    };
    
    estadisticas.push(nuevaEstadistica);
    localStorage.setItem('kvers_emulators_stats', JSON.stringify(estadisticas.slice(-100)));
    
    console.log(`📊 Estadística de emulador guardada: ${nombre}`);
    
    // Actualizar popularidad si existe el elemento
    updatePopularityChart();
}

function updatePopularityChart() {
    const stats = JSON.parse(localStorage.getItem('kvers_emulators_stats') || '[]');
    if (stats.length === 0) return;
    
    // Contar por emulador
    const conteo = {};
    stats.forEach(stat => {
        conteo[stat.id] = (conteo[stat.id] || 0) + 1;
    });
    
    // Encontrar el más popular
    const masPopular = Object.entries(conteo).sort((a, b) => b[1] - a[1])[0];
    if (masPopular && emuladores[masPopular[0]]) {
        console.log(`🏆 Emulador más popular: ${emuladores[masPopular[0]].nombre} (${masPopular[1]} vistas)`);
    }
}

// ========== VALIDACIÓN DE ENLACES ==========
function validarEnlaces() {
    const enlaces = document.querySelectorAll('.download-option');
    
    enlaces.forEach(enlace => {
        enlace.addEventListener('click', function(e) {
            const url = this.href;
            
            // Validar URL fake
            if (url.includes('fake_')) {
                e.preventDefault();
                mostrarNotificacion('⚠️ Este emulador estará disponible próximamente', 'warning');
                return false;
            }
            
            // Validar URL vacía
            if (!url || url === '#' || url.includes('undefined')) {
                e.preventDefault();
                mostrarError('⚠️ Este servidor de descarga no está disponible temporalmente.');
                return false;
            }
            
            // Obtener información del emulador
            const emuladorNombre = document.getElementById('modalEmulatorTitle').textContent;
            const emuladorSize = document.getElementById('modalEmulatorSize').textContent;
            const emuladorRAM = document.getElementById('modalEmulatorRAM').textContent;
            const servidor = this.querySelector('strong').textContent;
            
            // Mostrar confirmación
            const confirmacion = confirm(
                `¿Estás seguro de que quieres descargar "${emuladorNombre}"?\n\n` +
                `• Tamaño: ${emuladorSize}\n` +
                `• RAM requerida: ${emuladorRAM}\n` +
                `• Servidor: ${servidor}\n\n` +
                `Revisa que tu PC cumple los requisitos mínimos.`
            );
            
            if (!confirmacion) {
                e.preventDefault();
                return false;
            }
            
            // Registrar descarga
            console.log(`⬇️ Descargando emulador: ${emuladorNombre}`);
            console.log(`🔗 Servidor: ${servidor}`);
            
            // Mostrar notificación
            mostrarNotificacion(`Iniciando descarga de ${emuladorNombre}...`, 'success');
            
            return true;
        });
    });
}

// ========== NOTIFICACIONES ==========
function mostrarNotificacion(mensaje, tipo = 'info') {
    const notificacion = document.createElement('div');
    const color = tipo === 'success' ? '#00ff88' : tipo === 'error' ? '#ff4444' : tipo === 'warning' ? '#ff9e00' : '#00bbf9';
    
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
            <i class="fas ${tipo === 'success' ? 'fa-check-circle' : tipo === 'error' ? 'fa-exclamation-circle' : tipo === 'warning' ? 'fa-exclamation-triangle' : 'fa-info-circle'}" 
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
function verificarVirtualizacion() {
    // Esta es una función simulada
    // En realidad necesitarías una API del sistema
    console.log('🔍 Verificando estado de virtualización...');
    console.log('💡 Tip: Activa Intel VT-x/AMD-V en BIOS para mejor rendimiento');
    return true; // Simular que está activada
}

function obtenerRequisitosPC() {
    // Función simulada para obtener specs del PC
    const specs = {
        ram: navigator.deviceMemory || 'Desconocido',
        cores: navigator.hardwareConcurrency || 'Desconocido',
        os: navigator.platform,
        userAgent: navigator.userAgent
    };
    
    console.log('💻 Especificaciones detectadas:');
    console.log(`   RAM: ${specs.ram} GB`);
    console.log(`   Núcleos: ${specs.cores}`);
    console.log(`   SO: ${specs.os}`);
    
    return specs;
}

// ========== INICIALIZACIÓN ==========
document.addEventListener('DOMContentLoaded', function() {
    console.log('🕹️ KverSProject - Emuladores cargado');
    console.log(`📚 Total de emuladores disponibles: ${Object.keys(emuladores).length}`);
    
    // Mostrar estadísticas iniciales
    const stats = JSON.parse(localStorage.getItem('kvers_emulators_stats') || '[]');
    if (stats.length > 0) {
        console.log(`📈 Total de vistas de emuladores: ${stats.length}`);
        updatePopularityChart();
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
    
    // Verificar virtualización (simulado)
    verificarVirtualizacion();
    
    // Obtener specs del PC (simulado)
    obtenerRequisitosPC();
    
    // Verificar si es primera visita
    if (!localStorage.getItem('kvers_first_visit_emulators')) {
        mostrarNotificacion('¡Bienvenido a KverSProject Emuladores! Configura virtualización para mejor rendimiento.', 'info');
        localStorage.setItem('kvers_first_visit_emulators', 'true');
    }
    
    // Inicializar animaciones de tarjetas
    const cards = document.querySelectorAll('.emulator-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
    
    // Configurar tooltips para la tabla
    document.querySelectorAll('.rating-bar').forEach(bar => {
        bar.title = 'Puntuación de rendimiento';
    });
});

// ========== FUNCIÓN PARA COPIAR ENLACE ==========
function copiarEnlace(servidor) {
    const emuladorId = Object.keys(emuladores).find(id => 
        document.getElementById('modalEmulatorTitle').textContent === emuladores[id].nombre
    );
    
    if (emuladorId) {
        const url = emuladores[emuladorId].enlaces[servidor];
        
        // Validar URL
        if (!url || url.includes('undefined') || url.includes('fake_')) {
            mostrarNotificacion('⚠️ Este enlace no está disponible para copiar.', 'warning');
            return;
        }
        
        // Usar Clipboard API
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
    
    .emulator-card {
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