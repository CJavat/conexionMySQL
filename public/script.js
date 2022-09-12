const get = document.getElementById('get');
const post = document.getElementById('post');
const put = document.getElementById('put');
const patch = document.getElementById('patch');
const del = document.getElementById('delete');

const divConsultas = document.getElementById('consultas');
const divResultado = document.getElementById('resultado');

const documentFragment = document.createDocumentFragment();

const crearNodo = (id_usuario, nombre, apellido, usuario, clave) => {
    const nodoPadre = document.createElement('DIV');
    const idF = document.createElement('H4');
    const nombreF = document.createElement('P');
    const apellidoF = document.createElement('P');
    const usuarioF = document.createElement('P');
    const claveF = document.createElement('P');

    idF.textContent = id_usuario;
    nombreF.textContent = nombre;
    apellidoF.textContent = apellido;
    usuarioF.textContent = usuario;
    claveF.textContent = clave;
    
    nodoPadre.appendChild(idF);
    nodoPadre.appendChild(nombreF);
    nodoPadre.appendChild(apellidoF);
    nodoPadre.appendChild(usuarioF);
    nodoPadre.appendChild(claveF);

    return nodoPadre;
}

//! GET
get.addEventListener("click", () => {
    const obtenerDatos = async () => {
        divResultado.innerHTML = '';

        const datos = await fetch('http://localhost:9090/api/usuarios');
        const resultados = await datos.json();

        if(resultados === 'no hay datos') {
            const nodoSinDatos = document.createElement('P');
            nodoSinDatos.textContent = 'AUN NO HAY DATOS EN BASE DE DATOS.';
            nodoSinDatos.style = `text-align: center; padding: 1rem;`;
            documentFragment.appendChild(nodoSinDatos);
            return divResultado.appendChild(documentFragment);
        }

        for(let dato of resultados) {
            const nuevoNodo = crearNodo(dato.id_usuario, dato.nombre, dato.apellido, dato.usuario, dato.clave);
            nuevoNodo.classList.add('datos');
            documentFragment.appendChild(nuevoNodo);
        }
        divResultado.appendChild(documentFragment);
    }
    obtenerDatos();
});

//! POST
post.addEventListener("click", () => {
    divConsultas.innerHTML = '';

    const formulario = document.createElement('FORM');
    const inputNombre = document.createElement('INPUT');
    const inputApellido = document.createElement('INPUT');
    const inputUsuario = document.createElement('INPUT');
    const inputClave = document.createElement('INPUT');
    const inputEnviar = document.createElement('INPUT');

    formulario.setAttribute('method','POST');
    formulario.setAttribute('action','/submitPOST');
    formulario.setAttribute('id','formulario');

    inputNombre.setAttribute('type', 'text');
    inputNombre.setAttribute('placeholder', 'ESCRIBE TU NOMBRE.');
    inputNombre.setAttribute('name', 'nombre');
    inputNombre.setAttribute('required', '');
    inputApellido.setAttribute('type', 'text');
    inputApellido.setAttribute('placeholder', 'ESCRIBE TU APELLIDO.');
    inputApellido.setAttribute('name', 'apellido');
    inputApellido.setAttribute('required', '');
    inputUsuario.setAttribute('type', 'text');
    inputUsuario.setAttribute('placeholder', 'ESCRIBE TU USUARIO.');
    inputUsuario.setAttribute('name', 'usuario');
    inputUsuario.setAttribute('required', '');
    inputClave.setAttribute('type', 'password');
    inputClave.setAttribute('placeholder', 'ESCRIBE TU CONTRASEÑA.');
    inputClave.setAttribute('name', 'clave');
    inputClave.setAttribute('autocomplete', 'on');
    inputClave.setAttribute('required', '');

    inputEnviar.setAttribute('type', 'submit');
    inputEnviar.textContent = 'ENVIAR';

    formulario.appendChild(inputNombre);
    formulario.appendChild(inputApellido);
    formulario.appendChild(inputUsuario);
    formulario.appendChild(inputClave);
    formulario.appendChild(inputEnviar);
    documentFragment.appendChild(formulario);

    divConsultas.appendChild(documentFragment);
});

//! PUT
put.addEventListener("click", () => {
    divConsultas.innerHTML = '';

    const formulario = document.createElement('FORM');
    const inputId = document.createElement('INPUT');
    const inputNombre = document.createElement('INPUT');
    const inputApellido = document.createElement('INPUT');
    const inputUsuario = document.createElement('INPUT');
    const inputClave = document.createElement('INPUT');
    const inputEnviar = document.createElement('INPUT');

    formulario.setAttribute('method','POST');
    formulario.setAttribute('action','/submitPUT');
    formulario.setAttribute('id','formulario');

    inputId.setAttribute('type', 'number');
    inputId.setAttribute('placeholder', 'ESCRIBE TU ID');
    inputId.setAttribute('name', 'id');
    inputId.setAttribute('required', '');
    inputNombre.setAttribute('type', 'text');
    inputNombre.setAttribute('placeholder', 'ESCRIBE TU NOMBRE.');
    inputNombre.setAttribute('name', 'nombre');
    inputNombre.setAttribute('required', '');
    inputApellido.setAttribute('type', 'text');
    inputApellido.setAttribute('placeholder', 'ESCRIBE TU APELLIDO.');
    inputApellido.setAttribute('name', 'apellido');
    inputApellido.setAttribute('required', '');
    inputUsuario.setAttribute('type', 'text');
    inputUsuario.setAttribute('placeholder', 'ESCRIBE TU USUARIO.');
    inputUsuario.setAttribute('name', 'usuario');
    inputUsuario.setAttribute('required', '');
    inputClave.setAttribute('type', 'password');
    inputClave.setAttribute('placeholder', 'ESCRIBE TU CONTRASEÑA.');
    inputClave.setAttribute('name', 'clave');
    inputClave.setAttribute('autocomplete', 'on');
    inputClave.setAttribute('required', '');

    inputEnviar.setAttribute('type', 'submit');
    inputEnviar.textContent = 'ENVIAR';

    formulario.appendChild(inputId);
    formulario.appendChild(inputNombre);
    formulario.appendChild(inputApellido);
    formulario.appendChild(inputUsuario);
    formulario.appendChild(inputClave);
    formulario.appendChild(inputEnviar);
    documentFragment.appendChild(formulario);

    divConsultas.appendChild(documentFragment);
});

//! PATCH
patch.addEventListener("click", () => {
    divConsultas.innerHTML = '';

    const formulario = document.createElement('FORM');
    const inputId = document.createElement('INPUT');
    const inputNombre = document.createElement('INPUT');
    const inputApellido = document.createElement('INPUT');
    const inputUsuario = document.createElement('INPUT');
    const inputClave = document.createElement('INPUT');
    const inputEnviar = document.createElement('INPUT');

    formulario.setAttribute('method','POST');
    formulario.setAttribute('action','/submitPATCH');
    formulario.setAttribute('id','formulario');

    inputId.setAttribute('type', 'number');
    inputId.setAttribute('placeholder', 'ID DEL DOCUMENTO A ACTUALIZAR');
    inputId.setAttribute('name', 'id');
    inputId.setAttribute('required', '');
    inputNombre.setAttribute('type', 'text');
    inputNombre.setAttribute('placeholder', 'ESCRIBE TU NOMBRE.');
    inputNombre.setAttribute('name', 'nombre');
    inputApellido.setAttribute('type', 'text');
    inputApellido.setAttribute('placeholder', 'ESCRIBE TU APELLIDO.');
    inputApellido.setAttribute('name', 'apellido');
    inputUsuario.setAttribute('type', 'text');
    inputUsuario.setAttribute('placeholder', 'ESCRIBE TU USUARIO.');
    inputUsuario.setAttribute('name', 'usuario');
    inputClave.setAttribute('type', 'password');
    inputClave.setAttribute('placeholder', 'ESCRIBE TU CONTRASEÑA.');
    inputClave.setAttribute('name', 'clave');
    inputClave.setAttribute('autocomplete', 'on');

    inputEnviar.setAttribute('type', 'submit');
    inputEnviar.textContent = 'ENVIAR';

    formulario.appendChild(inputId);
    formulario.appendChild(inputNombre);
    formulario.appendChild(inputApellido);
    formulario.appendChild(inputUsuario);
    formulario.appendChild(inputClave);
    formulario.appendChild(inputEnviar);
    documentFragment.appendChild(formulario);

    divConsultas.appendChild(documentFragment);
});

//! DELETE
del.addEventListener("click", () => {
    divConsultas.innerHTML = '';
    
    const formulario = document.createElement('FORM');
    const inputId = document.createElement('INPUT');
    const inputEnviar = document.createElement('INPUT');

    formulario.setAttribute('method','POST');
    formulario.setAttribute('action','/submitDELETE');
    formulario.setAttribute('id','formulario');

    inputId.setAttribute('type', 'number');
    inputId.setAttribute('placeholder', 'ESCRIBE TU ID');
    inputId.setAttribute('name', 'id_user');
    inputId.setAttribute('required', '');

    inputEnviar.setAttribute('type', 'submit');
    inputEnviar.textContent = 'ENVIAR';

    formulario.appendChild(inputId);
    formulario.appendChild(inputEnviar);
    documentFragment.appendChild(formulario);

    divConsultas.appendChild(documentFragment);
});