// linkextra.js - Contiene los enlaces reales de descarga

const extraLinks = {
  'iconos': {
    mega: 'https://mega.nz/file/ejemplo-iconos',
    mediafire: 'https://www.mediafire.com/file/ejemplo-iconos',
    drive: 'https://drive.google.com/file/d/ejemplo-iconos/view'
  },
  'curso': {
    mega: 'https://mega.nz/file/ejemplo-curso',
    mediafire: 'https://www.mediafire.com/file/ejemplo-curso',
    drive: 'https://drive.google.com/file/d/ejemplo-curso/view'
  },
  'fondos': {
    mega: 'https://mega.nz/file/ejemplo-fondos',
    mediafire: 'https://www.mediafire.com/file/ejemplo-fondos',
    drive: 'https://drive.google.com/file/d/ejemplo-fondos/view'
  },
  'fuentes': {
    mega: 'https://mega.nz/file/ejemplo-fuentes',
    mediafire: 'https://www.mediafire.com/file/ejemplo-fuentes',
    drive: 'https://drive.google.com/file/d/ejemplo-fuentes/view'
  },
  'herramientas': {
    mega: 'https://mega.nz/file/ejemplo-herramientas',
    mediafire: 'https://www.mediafire.com/file/ejemplo-herramientas',
    drive: 'https://drive.google.com/file/d/ejemplo-herramientas/view'
  },
  'sonidos': {
    mega: 'https://mega.nz/file/ejemplo-sonidos',
    mediafire: 'https://www.mediafire.com/file/ejemplo-sonidos',
    drive: 'https://drive.google.com/file/d/ejemplo-sonidos/view'
  }
};

// Función para actualizar enlaces en el modal (se llama desde el HTML principal)
function actualizarEnlacesModal(tipo) {
  const links = extraLinks[tipo];
  if (!links) return;
  
  document.getElementById('linkMega').href = links.mega;
  document.getElementById('linkMediafire').href = links.mediafire;
  document.getElementById('linkDrive').href = links.drive;
}