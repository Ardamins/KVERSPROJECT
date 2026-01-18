// ========== DATOS DE JUEGOS ==========
const juegos = {
    "1": {
        nombre: "BALATRO",
        descripcion: "Juego de póker roguelike adictivo. Versión MOD con recursos ilimitados.",
        icono: "fa-dice",
        iconoColor: "linear-gradient(135deg, #00ff88, #00cc66)",
        enlaces: {
            mega: "https://mega.nz/file/ANDROID11",
            mediafire: "https://www.mediafire.com/file/hajn2a3unpidb5t/Balatro.apk/file",
            drive: "https://drive.google.com/file/d/ANDROID11"
        },
        size: "85 MB",
        version: "1.0.0",
        requerimientos: "Android 8.0+"
    },
    "2": {
        nombre: "GEOMETRY DASH",
        descripcion: "Juego de ritmo y plataformas. Versión completa con todos los niveles desbloqueados.",
        icono: "fa-running",
        iconoColor: "linear-gradient(135deg, #FF6B6B, #4ECDC4)",
        enlaces: {
            mega: "https://mega.nz/file/ANDROID12",
            mediafire: "https://www.mediafire.com/file/lbmezl2fdsdj9to/GeometryDash_2.207_b40.apk/file",
            drive: "https://drive.google.com/file/d/ANDROID12"
        },
        size: "92 MB",
        version: "2.207",
        requerimientos: "Android 7.0+"
    },
    "3": {
        nombre: "FIVE NIGHTS AT FREDDY'S 1",
        descripcion: "Juego de terror y supervivencia. Versión optimizada para móviles.",
        icono: "fa-ghost",
        iconoColor: "linear-gradient(135deg, #7209B7, #3A0CA3)",
        enlaces: {
            mega: "https://mega.nz/file/ANDROID13",
            mediafire: "https://www.mediafire.com/file/hcab79xei32u660/FNAF_1-_By_OptiJuegos.apk/file",
            drive: "https://drive.google.com/file/d/ANDROID13"
        },
        size: "78 MB",
        version: "1.0",
        requerimientos: "Android 6.0+"
    },
    "4": {
        nombre: "MINECRAFT PE",
        descripcion: "Edición Pocket completa. Sin conexión, con mods preinstalados.",
        icono: "fa-cube",
        iconoColor: "linear-gradient(135deg, #00BBF9, #00F5D4)",
        enlaces: {
            mega: "https://mega.nz/file/MINECRAFT1",
            mediafire: "https://www.mediafire.com/file/minecraftpe_mod",
            drive: "https://drive.google.com/file/d/MINECRAFT1"
        },
        size: "145 MB",
        version: "1.20.1",
        requerimientos: "Android 9.0+"
    },
    "5": {
        nombre: "STUMBLE GUYS",
        descripcion: "Battle royale multijugador. Mod con gemas y skins ilimitadas.",
        icono: "fa-users",
        iconoColor: "linear-gradient(135deg, #F72585, #B5179E)",
        enlaces: {
            mega: "https://mega.nz/file/STUMBLE1",
            mediafire: "https://www.mediafire.com/file/stumbleguys_mod",
            drive: "https://drive.google.com/file/d/STUMBLE1"
        },
        size: "210 MB",
        version: "0.58",
        requerimientos: "Android 8.0+"
    },
    "6": {
        nombre: "TERRARIA",
        descripcion: "Aventura sandbox 2D. Versión completa con todos los items desbloqueados.",
        icono: "fa-mountain",
        iconoColor: "linear-gradient(135deg, #FF9E00, #FF6D00)",
        enlaces: {
            mega: "https://mega.nz/file/TERRARIA1",
            mediafire: "https://www.mediafire.com/file/terraria_mod",
            drive: "https://drive.google.com/file/d/TERRARIA1"
        },
        size: "250 MB",
        version: "1.4.4.9",
        requerimientos: "Android 10.0+"
    }
};

// ========== FUNCIÓN PARA ABRIR MODAL ==========
function abrirModal(versionId) {
    const modal = document.getElementById('downloadModal');
    const juego = juegos[versionId];
    
    if (!juego) {
        alert('⚠️ Juego no encontrado. Intenta nuevamente.');
        return;
    }
    
    // Actualizar información del modal
    document.getElementById('modalGameTitle').textContent = juego.nombre;
    document.getElementById('modalGameDescription').textContent = juego.descripcion;
    
    // Actualizar icono del modal
    const modalIcon = document.getElementById('modalGameIcon');
    modalIcon.innerHTML = `<i class="fas ${juego.icono}"></i>`;
    modalIcon.style.background = juego.iconoColor;
    
    // Actualizar enlaces
    document.getElementById('linkMega').href = juego.enlaces.mega;
    document.getElementById('linkMediafire').href = juego.enlaces.mediafire;
    document.getElementById('linkDrive').href = juego.enlaces.drive;
    
    // Añadir información adicional a los enlaces
    const enlaces = document.querySelectorAll('.download-option');
    enlaces.forEach((enlace, index) => {
        const sizeInfo = enlace.querySelector('.size');
        if (sizeInfo) {
            sizeInfo.textContent = `${juego.size} • ${juego.version}`;
        }
    });
    
    // Mostrar modal con animación
    modal.style.display = 'flex';
    
    // Efecto de aparición
    setTimeout(() => {
        modal.style.opacity = '1';
    }, 10);
    
    // Registrar evento de descarga en consola (para debugging)
    console.log(`🔗 Iniciando descarga de ${juego.nombre} v${juego.version}`);
    
    // Bloquear scroll del body
    document.body.style.overflow = 'hidden';
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

// ========== DETECCIÓN DE DISPOSITIVO ==========
function detectarDispositivo() {
    const esMovil = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (esMovil) {
        console.log('📱 Dispositivo móvil detectado');
        // Podrías añadir funcionalidades específicas para móvil aquí
    } else {
        console.log('💻 Dispositivo de escritorio detectado');
    }
    
    return esMovil;
}

// ========== CONTADOR DE DESCARGAS (simulado) ==========
function simularContadorDescargas() {
    const botonesDescarga = document.querySelectorAll('.game-btn');
    
    botonesDescarga.forEach(boton => {
        boton.addEventListener('click', function() {
            // Simular incremento de contador
            const contador = this.querySelector('.contador-descargas');
            if (!contador) {
                const contadorSpan = document.createElement('span');
                contadorSpan.className = 'contador-descargas';
                contadorSpan.textContent = ' ✓';
                contadorSpan.style.color = '#00ff88';
                contadorSpan.style.marginLeft = '5px';
                contadorSpan.style.fontWeight = 'bold';
                this.appendChild(contadorSpan);
                
                // Remover después de 3 segundos
                setTimeout(() => {
                    contadorSpan.remove();
                }, 3000);
            }
        });
    });
}

// ========== VALIDACIÓN DE ENLACES ==========
function validarEnlaces() {
    const enlaces = document.querySelectorAll('.download-option');
    
    enlaces.forEach(enlace => {
        enlace.addEventListener('click', function(e) {
            const url = this.href;
            
            if (!url || url === '#' || url.includes('undefined')) {
                e.preventDefault();
                alert('⚠️ El enlace de descarga no está disponible temporalmente. Por favor, intenta con otro servidor.');
                return false;
            }
            
            // Mostrar mensaje de confirmación
            const juegoNombre = document.getElementById('modalGameTitle').textContent;
            if (confirm(`¿Estás seguro de que quieres descargar "${juegoNombre}"?\n\nSe abrirá una nueva ventana.`)) {
                // Registrar descarga
                console.log(`⬇️ Descargando: ${juegoNombre} desde ${this.querySelector('strong').textContent}`);
            } else {
                e.preventDefault();
            }
        });
    });
}

// ========== INICIALIZACIÓN ==========
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎮 KverSProject - Celulares cargado');
    
    // Detectar dispositivo
    detectarDispositivo();
    
    // Configurar contador de descargas
    simularContadorDescargas();
    
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
    
    // Mostrar información de compatibilidad
    const esAndroid = /Android/i.test(navigator.userAgent);
    if (!esAndroid && !/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        console.log('💡 Estos juegos son para Android. En PC necesitarás un emulador como BlueStacks.');
    }
});

// ========== FUNCIÓN PARA COPIAR ENLACE ==========
function copiarEnlace(servidor) {
    const juegoId = Object.keys(juegos).find(id => 
        document.getElementById('modalGameTitle').textContent === juegos[id].nombre
    );
    
    if (juegoId) {
        const url = juegos[juegoId].enlaces[servidor];
        
        // Usar Clipboard API si está disponible
        if (navigator.clipboard) {
            navigator.clipboard.writeText(url).then(() => {
                alert(`✅ Enlace de ${servidor} copiado al portapapeles`);
            }).catch(err => {
                console.error('Error al copiar:', err);
                // Fallback para navegadores antiguos
                copiarEnlaceFallback(url);
            });
        } else {
            copiarEnlaceFallback(url);
        }
    }
}

// Fallback para navegadores sin Clipboard API
function copiarEnlaceFallback(texto) {
    const textArea = document.createElement('textarea');
    textArea.value = texto;
    document.body.appendChild(textArea);
    textArea.select();
    
    try {
        document.execCommand('copy');
        alert('✅ Enlace copiado al portapapeles');
    } catch (err) {
        console.error('Error al copiar:', err);
        alert('❌ No se pudo copiar el enlace. Copia manualmente la URL.');
    }
    
    document.body.removeChild(textArea);
}

// ========== EXPORTAR FUNCIONES GLOBALES ==========
window.abrirModal = abrirModal;
window.cerrarModal = cerrarModal;
window.copiarEnlace = copiarEnlace;