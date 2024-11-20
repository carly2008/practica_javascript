// Cambia la URL a la ubicación de tu archivo JSON
const jsonUrl = '/directories.json';

// Función para obtener y mostrar los directorios
async function fetchDirectories() {
  const directoryList = document.getElementById('directory-list');
  directoryList.innerHTML = ''; // Limpiar contenido previo

  try {
    const response = await fetch(jsonUrl);

    if (!response.ok) {
      throw new Error('No se pudo cargar el archivo JSON.');
    }

    const data = await response.json();

    if (data.directories && Array.isArray(data.directories)) {
      data.directories.forEach((dir, index) => {
        const li = document.createElement('li');
        
        // Crear enlace al archivo ejecicio_X.html en cada directorio
        const a = document.createElement('a');
        a.href = `${dir}/ejecicio_${index + 1}.html`;  // Enlace al ejecicio_X.html
        a.textContent = `${dir}/ejecicio_${index + 1}.html`;

        li.appendChild(a);
        directoryList.appendChild(li);
      });
    } else {
      directoryList.innerHTML = '<li>No hay directorios disponibles.</li>';
    }
  } catch (error) {
    console.error(error);
    directoryList.innerHTML = '<li>Error al cargar la lista de directorios.</li>';
  }
}

// Ejecutar la función al cargar la página
fetchDirectories();
