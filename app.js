const baseEndpoint = `https://api.github.com`;//cambie las comillas por esta`//
const usersEndpoint = '${baseEndpoint}/users'; // midifique las comillas simples//
const $n = document.querySelector('.name'); // le puse . al selector//
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location');
<p class="location">Cargando ubicación...</p> // agregar la locación//

async function displayUser(username) {
  try {
    $n.textContent = 'Cargando...';
    const response = await fetch(`${usersEndpoint}/${username}`);
    const data = await response.json();

    $n.textContent = data.name || 'Nombre no disponible';
    $b.textContent = data.blog || 'Blog no disponible';
    $l.textContent = data.location || 'Ubicación no disponible';
  } catch (error) { handleError(error);
  }
}



function handleError(err) {
  console.error('OH NO!', err);
  $n.textContent = `Algo salió mal: ${err.message}`;
}


displayUser('stolinski').catch(handleError);