const get = document.getElementById('get');
const post = document.getElementById('post');
const put = document.getElementById('put');
const del = document.getElementById('delete');

const divResultado = document.getElementById('resultado');
const divConsultas = document.getElementById('consultas');

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

get.addEventListener("click", () => {
    const obtenerDatos = async () => {
        divResultado.innerHTML = '';

        const datos = await fetch('http://localhost:9090/api/usuarios');
        const resultados = await datos.json();

        for(let dato of resultados) {
            const nuevoNodo = crearNodo(dato.id_usuario, dato.nombre, dato.apellido, dato.usuario, dato.clave);
            nuevoNodo.classList.add('datos');
            documentFragment.appendChild(nuevoNodo);
        }
        divResultado.appendChild(documentFragment);
    }
    obtenerDatos();
});

post.addEventListener("click", () => {
    divConsultas.innerHTML = '';

    const formulario = document.createElement('FORM');
    const inputNombre = document.createElement('INPUT');
    const inputApellido = document.createElement('INPUT');
    const inputUsuario = document.createElement('INPUT');
    const inputClave = document.createElement('INPUT');
    const inputEnviar = document.createElement('INPUT');

    formulario.setAttribute('method','POST');
    formulario.setAttribute('action','/submit');
    formulario.setAttribute('id','formulario');

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

// put.addEventListener("click", () => {});
// del.addEventListener("click", () => {});