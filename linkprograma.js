// ========== DATOS DE PROGRAMAS ==========
const programas = {
    "1": {
        nombre: "CINEMA 4D 2021",
        descripcion: "Software profesional de modelado y animación 3D. Versión completa con crack.",
        icono: "fa-cube",
        iconoColor: "linear-gradient(135deg, #00ff88, #00cc66)",
        categoria: "Diseño 3D",
        enlaces: {
            mega: "https://mega.nz/file/winrar",
            mediafire: "https://mediafire.com/winrar",
            drive: "https://drive.google.com/file/d/1KbpC2YQhjpuZC9eWWzfwjaOCfKIwdIOC/view"
        },
        size: "2.5 GB",
        sistema: "Windows 10/11 64-bit",
        version: "2021",
        requisitos: [
            "Windows 10/11 (64-bit)",
            "8 GB RAM mínimo (16 GB recomendado)",
            "Tarjeta gráfica OpenGL 4.1",
            "10 GB espacio en disco",
            "Procesador multi-core 64-bit"
        ],
        notas: "Incluye crack y keygen. Desactivar antivirus."
    },
    "2": {
        nombre: "NITRO PDF PRO 2024",
        descripcion: "Suite completa para edición y creación de PDFs. Activación permanente.",
        icono: "fa-file-pdf",
        iconoColor: "linear-gradient(135deg, #FF6B6B, #4ECDC4)",
        categoria: "PDF Editor",
        enlaces: {
            mega: "https://mega.nz/file/photoshop",
            mediafire: "https://www.mediafire.com/file/l08cklt6xfd79pi/NITRO_PRO_14.rar/file",
            drive: "https://drive.google.com/file/d/1QO0YDMJZML3uMLLAP4GyyD1mScLlAQI_/view"
        },
        size: "450 MB",
        sistema: "Windows 8/10/11",
        version: "14.xx",
        requisitos: [
            "Windows 8/10/11",
            "4 GB RAM",
            "1 GB espacio en disco",
            "Resolución 1280x768",
            ".NET Framework 4.7.2"
        ],
        notas: "Activador incluido. Ejecutar como administrador."
    },
    "3": {
        nombre: "CISCO PACKET TRACER",
        descripcion: "Simulador de redes Cisco para prácticas de configuración.",
        icono: "fa-network-wired",
        iconoColor: "linear-gradient(135deg, #7209B7, #3A0CA3)",
        categoria: "Redes",
        enlaces: {
            mega: "https://mega.nz/file/office2019",
            mediafire: "https://www.mediafire.com/file/r41rxewnwpgg0md/Cisco_Packet_Tracer_8.0.0.0212x64.rar/file",
            drive: "https://drive.google.com/file/d/1JOtFftI2i4lEi2uxYM32ZWux1e6ItlsH/view"
        },
        size: "680 MB",
        sistema: "Windows 7/8/10/11",
        version: "8.0.0",
        requisitos: [
            "Windows 7/8/10/11",
            "2 GB RAM",
            "1.5 GB espacio en disco",
            "Tarjeta gráfica compatible DirectX 9",
            "Resolución 1024x768"
        ],
        notas: "No requiere instalación. Versión portable."
    },
    "4": {
        nombre: "ARCHITECT ENTERPRISE",
        descripcion: "Herramienta de modelado empresarial y arquitectura de software.",
        icono: "fa-code",
        iconoColor: "linear-gradient(135deg, #00BBF9, #00F5D4)",
        categoria: "Desarrollo",
        enlaces: {
            mega: "https://mega.nz/file/vscode",
            mediafire: "https://mediafire.com/vscode",
            drive: "https://drive.google.com/file/d/1K713JKo0lA-nAIbqzojj_jYL-6ZbNkjE/view"
        },
        size: "1.2 GB",
        sistema: "Windows 10/11",
        version: "Enterprise",
        requisitos: [
            "Windows 10/11 64-bit",
            "8 GB RAM",
            "5 GB espacio en disco",
            "Java Runtime Environment",
            "Resolución 1280x1024"
        ],
        notas: "Requiere Java instalado. Incluye licencia."
    },
    "5": {
        nombre: "PHOTOSHOP CS6",
        descripcion: "Clásico editor de imágenes profesional. Versión portable activada.",
        icono: "fa-paint-brush",
        iconoColor: "linear-gradient(135deg, #F72585, #B5179E)",
        categoria: "Diseño Gráfico",
        enlaces: {
            mega: "https://mega.nz/file/javajdk",
            mediafire: "https://mediafire.com/javajdk",
            drive: "https://www.mediafire.com/file/3pbmbimm7bo6jmj/Photoshop_CS6.rar/file"
        },
        size: "1.8 GB",
        sistema: "Windows 7/8/10/11",
        version: "CS6 Extended",
        requisitos: [
            "Windows 7/8/10/11",
            "2 GB RAM",
            "2 GB espacio en disco",
            "Tarjeta gráfica 128 MB",
            "Resolución 1024x768"
        ],
        notas: "Versión portable. No requiere instalación."
    },
    "6": {
        nombre: "IBM SPSS STATISTICS",
        descripcion: "Software de análisis estadístico para investigación científica.",
        icono: "fa-chart-bar",
        iconoColor: "linear-gradient(135deg, #FF9E00, #FF6D00)",
        categoria: "Análisis",
        enlaces: {
            mega: "https://mega.nz/file/python",
            mediafire: "https://mediafire.com/python",
            drive: "https://drive.google.com/file/d/10iK7E3iHhJqjCulgSTKiR4kGbtcvTc1O/view"
        },
        size: "2.1 GB",
        sistema: "Windows 10/11",
        version: "28",
        requisitos: [
            "Windows 10/11 64-bit",
            "8 GB RAM",
            "8 GB espacio en disco",
            ".NET Framework 4.8",
            "Resolución 1280x800"
        ],
        notas: "Incluye crack y licencia permanente."
    },
    "7": {
        nombre: "CINEMA 4D 2012",
        descripcion: "Versión estable para hardware antiguo. Ideal para PCs con recursos limitados.",
        icono: "fa-cube",
        iconoColor: "linear-gradient(135deg, #4361EE, #3A0CA3)",
        categoria: "Diseño 3D",
        enlaces: {
            mega: "https://mega.nz/file/python",
            mediafire: "https://mediafire.com/python",
            drive: "https://drive.google.com/file/d/1JB69hQ_kHuEQt2XsVW1al1r3vAkj-qV8/view"
        },
        size: "1.8 GB",
        sistema: "Windows XP/Vista/7/8",
        version: "R14",
        requisitos: [
            "Windows XP SP3 o superior",
            "2 GB RAM",
            "5 GB espacio en disco",
            "Tarjeta gráfica OpenGL",
            "Procesador SSE2"
        ],
        notas: "Compatible con Windows antiguos. Crack incluido."
    },
    "8": {
        nombre: "CINEMA 4D 2021 PORTABLE",
        descripcion: "Versión portable sin instalación. Llévalo en tu USB y úsalo en cualquier PC.",
        icono: "fa-laptop",
        iconoColor: "linear-gradient(135deg, #4CC9F0, #4895EF)",
        categoria: "Diseño 3D Portable",
        enlaces: {
            mega: "https://mega.nz/file/python",
            mediafire: "https://mediafire.com/python",
            drive: "https://drive.google.com/file/d/19lsX9xU-8a_h6WH8whx2UOwUVWpedTMu/view"
        },
        size: "3.2 GB",
        sistema: "Windows 10/11",
        version: "2021 Portable",
        requisitos: [
            "Windows 10/11 64-bit",
            "8 GB RAM",
            "15 GB espacio en USB/Disco",
            "Tarjeta gráfica OpenGL 4.1",
            "USB 3.0 recomendado"
        ],
        notas: "No deja registro en el sistema. 100% portable."
    },
    "9": {
        nombre: "FL STUDIO 21",
        descripcion: "DAW profesional para producción musical. Signature Bundle activado.",
        icono: "fa-music",
        iconoColor: "linear-gradient(135deg, #FF595E, #FFCA3A)",
        categoria: "Producción Musical",
        enlaces: {
            mega: "https://mega.nz/file/python",
            mediafire: "https://mediafire.com/python",
            drive: "https://drive.google.com/file/d/1OZyuueboCtXgLH9_62EM_yU-H8tvHbBJ/view"
        },
        size: "850 MB",
        sistema: "Windows 10/11",
        version: "21 Signature",
        requisitos: [
            "Windows 10/11 64-bit",
            "4 GB RAM (8 GB recomendado)",
            "4 GB espacio en disco",
            "Tarjeta de sonido ASIO",
            "Resolución 1280x800"
        ],
        notas: "Incluye todos los plugins. Activador incluido."
    },
    "10": {
        nombre: "PROTEUS 7.1 PORTABLE",
        descripcion: "Simulación de circuitos electrónicos y diseño de PCBs.",
        icono: "fa-microchip",
        iconoColor: "linear-gradient(135deg, #6A0572, #AB83A1)",
        categoria: "Electrónica",
        enlaces: {
            mega: "https://mega.nz/file/python",
            mediafire: "https://www.mediafire.com/file/qmfbesij6xg6g8p/PROTEUS_portable_7.1.rar/file",
            drive: "https://drive.google.com/file/d/1xsmwA_ldSOlzGOAWlGdP6BOg-xDL0kWe/view"
        },
        size: "520 MB",
        sistema: "Windows 7/8/10/11",
        version: "7.1 SP2",
        requisitos: [
            "Windows 7/8/10/11",
            "2 GB RAM",
            "1 GB espacio en disco",
            "Resolución 1024x768",
            ".NET Framework 2.0"
        ],
        notas: "Versión portable. No requiere instalación."
    },
    "11": {
        nombre: "ARCGIS 10.3",
        descripcion: "Sistema de Información Geográfica para análisis espacial.",
        icono: "fa-globe-americas",
        iconoColor: "linear-gradient(135deg, #2A9D8F, #E9C46A)",
        categoria: "GIS",
        enlaces: {
            mega: "https://mega.nz/file/python",
            mediafire: "https://mediafire.com/python",
            drive: "https://drive.google.com/file/d/1KH_IBS5FSbevn7eguXlXAp5Fg_upW6Ty/view"
        },
        size: "3.5 GB",
        sistema: "Windows 7/8/10",
        version: "10.3",
        requisitos: [
            "Windows 7/8/10 64-bit",
            "8 GB RAM",
            "10 GB espacio en disco",
            "Tarjeta gráfica 64 MB",
            ".NET Framework 3.5 SP1"
        ],
        notas: "Incluye crack y licencia. Versión completa."
    },
    "12": {
        nombre: "ERWIN DATA MODELER",
        descripcion: "Herramienta de modelado de bases de datos y diseño conceptual.",
        icono: "fa-database",
        iconoColor: "linear-gradient(135deg, #E76F51, #F4A261)",
        categoria: "Bases de Datos",
        enlaces: {
            mega: "https://mega.nz/file/python",
            mediafire: "https://mediafire.com/python",
            drive: "https://drive.google.com/file/d/1RC5KDjLvOkVSoi6Om4BoD1rIZa_4ywXg/view"
        },
        size: "780 MB",
        sistema: "Windows 10/11",
        version: "r9.7",
        requisitos: [
            "Windows 10/11 64-bit",
            "4 GB RAM",
            "2 GB espacio en disco",
            "Resolución 1280x1024",
            "Java Runtime Environment"
        ],
        notas: "Requiere Java. Incluye licencia enterprise."
    },
    "13": {
        nombre: "PC/LAPTOP SIMULATOR",
        descripcion: "Simulador de ensamblaje y configuración de computadoras.",
        icono: "fa-desktop",
        iconoColor: "linear-gradient(135deg, #264653, #2A9D8F)",
        categoria: "Educativo",
        enlaces: {
            mega: "https://mega.nz/file/python",
            mediafire: "https://mediafire.com/python",
            drive: "https://drive.google.com/file/d/1XKxF2ibhlJ937Pqiow8hE4oR3gyc-F4c/view"
        },
        size: "320 MB",
        sistema: "Windows 8/10/11",
        version: "2024",
        requisitos: [
            "Windows 8/10/11",
            "2 GB RAM",
            "1 GB espacio en disco",
            "Tarjeta gráfica DirectX 9",
            "Resolución 1024x768"
        ],
        notas: "Simulador educativo. No requiere activación."
    },
    "14": {
        nombre: "DRIVER BOOSTER PRO",
        descripcion: "Actualizador automático de drivers con base de datos actualizada.",
        icono: "fa-cogs",
        iconoColor: "linear-gradient(135deg, #457B9D, #A8DADC)",
        categoria: "Mantenimiento",
        enlaces: {
            mega: "https://mega.nz/file/python",
            mediafire: "https://mediafire.com/python",
            drive: "https://drive.google.com/file/d/1qHxS4AQ-EnW7PP9TxOHGFEX1QBeQlrFn/view"
        },
        size: "45 MB",
        sistema: "Windows 7/8/10/11",
        version: "PRO 10",
        requisitos: [
            "Windows 7/8/10/11",
            "1 GB RAM",
            "200 MB espacio en disco",
            "Conexión a Internet",
            "Resolución 800x600"
        ],
        notas: "Activador incluido. Versión PRO completa."
    },
    "15": {
        nombre: "COREL DRAW 2021",
        descripcion: "Suite de diseño gráfico vectorial profesional.",
        icono: "fa-pencil-alt",
        iconoColor: "linear-gradient(135deg, #E63946, #F1FAEE)",
        categoria: "Diseño Gráfico",
        enlaces: {
            mega: "https://mega.nz/file/python",
            mediafire: "https://mediafire.com/python",
            drive: "https://drive.google.com/file/d/1vklF3Wk3eDlWUvutECV4oxvqLW5H68Yx/view"
        },
        size: "1.5 GB",
        sistema: "Windows 10/11",
        version: "2021 Graphics Suite",
        requisitos: [
            "Windows 10/11 64-bit",
            "4 GB RAM",
            "3 GB espacio en disco",
            "Resolución 1280x768",
            "Mouse o tablet"
        ],
        notas: "Incluye todos los componentes. Crack incluido."
    },
    "16": {
        nombre: "AUTOCAD 2025",
        descripcion: "Software de diseño asistido por computadora más reciente.",
        icono: "fa-drafting-compass",
        iconoColor: "linear-gradient(135deg, #FF9F1C, #FFBF69)",
        categoria: "CAD",
        enlaces: {
            mega: "https://mega.nz/file/python",
            mediafire: "https://mediafire.com/python",
            drive: "https://drive.google.com/file/d/10Njlt79Pgsasd3GktkJEbugf0ax7bMcx/view"
        },
        size: "4.2 GB",
        sistema: "Windows 11",
        version: "2025",
        requisitos: [
            "Windows 11 64-bit",
            "16 GB RAM",
            "10 GB espacio en disco",
            "Tarjeta gráfica 4 GB",
            "Resolución 1920x1080"
        ],
        notas: "Versión más reciente. Requiere crack especial."
    },
    "17": {
        nombre: "AUTOCAD 2020",
        descripcion: "Versión estable de AutoCAD para proyectos profesionales.",
        icono: "fa-drafting-compass",
        iconoColor: "linear-gradient(135deg, #FF9F1C, #CBF3F0)",
        categoria: "CAD",
        enlaces: {
            mega: "https://mega.nz/file/python",
            mediafire: "https://mediafire.com/python",
            drive: "https://drive.google.com/file/d/19-c0KWAhZg263zDFstoo5tkVNif4QC6N/view"
        },
        size: "3.8 GB",
        sistema: "Windows 10/11",
        version: "2020",
        requisitos: [
            "Windows 10/11 64-bit",
            "8 GB RAM",
            "7 GB espacio en disco",
            "Tarjeta gráfica 1 GB",
            "Resolución 1360x768"
        ],
        notas: "Versión estable y probada. Crack incluido."
    }
};

// ========== FUNCIÓN PARA ABRIR MODAL ==========
function abrirModal(programaId) {
    const modal = document.getElementById('downloadModal');
    const programa = programas[programaId];
    
    if (!programa) {
        mostrarError('⚠️ Programa no encontrado. Intenta nuevamente.');
        return;
    }
    
    // Actualizar información del modal
    document.getElementById('modalProgramTitle').textContent = programa.nombre;
    document.getElementById('modalProgramDescription').textContent = programa.descripcion;
    document.getElementById('modalProgramSize').textContent = programa.size;
    document.getElementById('modalProgramOS').textContent = programa.sistema;
    
    // Actualizar icono del modal
    const modalIcon = document.getElementById('modalProgramIcon');
    modalIcon.innerHTML = `<i class="fas ${programa.icono}"></i>`;
    modalIcon.style.background = programa.iconoColor;
    
    // Actualizar requisitos
    const requisitosList = document.getElementById('modalRequirements');
    requisitosList.innerHTML = '';
    programa.requisitos.forEach(req => {
        const li = document.createElement('li');
        li.textContent = req;
        requisitosList.appendChild(li);
    });
    
    // Actualizar enlaces
    document.getElementById('linkMega').href = programa.enlaces.mega;
    document.getElementById('linkMediafire').href = programa.enlaces.mediafire;
    document.getElementById('linkDrive').href = programa.enlaces.drive;
    
    // Añadir información adicional a los enlaces
    const enlaces = document.querySelectorAll('.download-option');
    enlaces.forEach((enlace, index) => {
        const sizeInfo = enlace.querySelector('.size');
        if (sizeInfo) {
            sizeInfo.textContent = `${programa.size} • ${programa.version}`;
        }
    });
    
    // Mostrar modal con animación
    modal.style.display = 'flex';
    
    // Efecto de aparición
    setTimeout(() => {
        modal.style.opacity = '1';
    }, 10);
    
    // Registrar evento de descarga en consola
    console.log(`💾 Iniciando descarga de ${programa.nombre} v${programa.version}`);
    console.log(`📁 Tamaño: ${programa.size} | Sistema: ${programa.sistema}`);
    
    // Bloquear scroll del body
    document.body.style.overflow = 'hidden';
    
    // Guardar estadística (simulada)
    guardarEstadisticaDescarga(programaId, programa.nombre);
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
    const estadisticas = JSON.parse(localStorage.getItem('kvers_downloads') || '[]');
    const nuevaDescarga = {
        id: id,
        nombre: nombre,
        fecha: new Date().toISOString(),
        usuarioAgent: navigator.userAgent
    };
    
    estadisticas.push(nuevaDescarga);
    localStorage.setItem('kvers_downloads', JSON.stringify(estadisticas.slice(-100))); // Guardar solo las últimas 100
    
    console.log(`📊 Estadística guardada: ${nombre}`);
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
                mostrarError('⚠️ El enlace de descarga no está disponible temporalmente. Por favor, intenta con otro servidor.');
                return false;
            }
            
            // Validar si es un enlace de error (placeholder)
            if (url.includes('error, seleccioan bien p webon')) {
                e.preventDefault();
                mostrarError('⚠️ Esta versión del programa no está disponible. Por favor, selecciona otro programa.');
                return false;
            }
            
            // Mostrar mensaje de confirmación
            const programaNombre = document.getElementById('modalProgramTitle').textContent;
            const confirmacion = confirm(
                `¿Estás seguro de que quieres descargar "${programaNombre}"?\n\n` +
                `• Tamaño: ${document.getElementById('modalProgramSize').textContent}\n` +
                `• Sistema: ${document.getElementById('modalProgramOS').textContent}\n\n` +
                `Se abrirá una nueva ventana.`
            );
            
            if (!confirmacion) {
                e.preventDefault();
                return false;
            }
            
            // Registrar descarga exitosa
            console.log(`⬇️ Descargando: ${programaNombre}`);
            console.log(`🔗 Servidor: ${this.querySelector('strong').textContent}`);
            
            // Simular inicio de descarga
            mostrarNotificacion(`Iniciando descarga de ${programaNombre}...`, 'success');
            
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

// ========== INICIALIZACIÓN ==========
document.addEventListener('DOMContentLoaded', function() {
    console.log('💻 KverSProject - Programas cargado');
    console.log(`📚 Total de programas disponibles: ${Object.keys(programas).length}`);
    
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
    
    // Mostrar estadísticas al cargar
    const estadisticas = JSON.parse(localStorage.getItem('kvers_downloads') || '[]');
    if (estadisticas.length > 0) {
        console.log(`📈 Total de descargas registradas: ${estadisticas.length}`);
    }
    
    // Verificar si es primera visita
    if (!localStorage.getItem('kvers_first_visit_programs')) {
        mostrarNotificacion('¡Bienvenido a KverSProject Programas!', 'info');
        localStorage.setItem('kvers_first_visit_programs', 'true');
    }
});

// ========== FUNCIÓN PARA COPIAR ENLACE ==========
function copiarEnlace(servidor) {
    const programaId = Object.keys(programas).find(id => 
        document.getElementById('modalProgramTitle').textContent === programas[id].nombre
    );
    
    if (programaId) {
        const url = programas[programaId].enlaces[servidor];
        
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
                // Fallback para navegadores antiguos
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

// ========== FUNCIONES DE UTILIDAD ==========
function obtenerProgramaPorNombre(nombre) {
    return Object.values(programas).find(programa => programa.nombre === nombre);
}

function filtrarPorCategoria(categoria) {
    return Object.values(programas).filter(programa => 
        programa.categoria.toLowerCase().includes(categoria.toLowerCase())
    );
}

function obtenerProgramasRecientes(limite = 5) {
    const estadisticas = JSON.parse(localStorage.getItem('kvers_downloads') || '[]');
    return estadisticas.slice(-limite).map(descarga => ({
        ...descarga,
        programa: programas[descarga.id]
    }));
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
`;
document.head.appendChild(style);