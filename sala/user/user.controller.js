import { urlsUser } from './user.api.js';

const user = localStorage.getItem("user");
const urls = urlsUser();


function updatePassword(password) {
    const url = urls.password;
    const method = 'PUT';
    
     fetch(`${url}/${user}`, {
         mode: 'no-cors',
        method,
        headers: {
            //'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            contrasena: password
        })
    })
  .then(response => response.json())
  .then(data => {
        M.toast({ html: 'Actualizado', displayLength: 3000 });
        localStorage.clear();
        window.history.pushState({}, '', '/');
        window.location.href = '/';
    })
  .catch(error => {
        console.error(`Error al editar rol: ${error}`);
    });
  }

export { updatePassword };
