const express = require('express');
const app = express();
const queries = require('./queries');

// Para poner rutas estaticas.
app.use(express.static('public'));
// Otra opcion para personalizar los links son:
// app.use('/rutaPersonalizada', express.static('public'));
// --> para igresar seria: localhost:9090/rutaPersonalizada/index.html

//* MIDDLEWARE - Sirve para parsear el body del POST para poderlo obtener.
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

//* MIDDLEWARE - Para darle acceso al core de que pueda manipular MYSQL.
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//! GET
const consultas = async () => {
    const mostrar = await queries.query;
    
    if(mostrar == 0) { // ARREGLAR MEJOR ESTA PARTE DEL CODIGO.
        app.get('/api/usuarios', (req, res) => {
            console.clear();
            res.end(JSON.stringify('no hay datos'));
            return console.log('Aún no hay ningún regisro en la Base de Datos.');
        });
    }
    else {
        app.get('/api/usuarios', (req, res) => {
            console.log(mostrar);
            res.send(JSON.stringify(mostrar));
        });
    }
}
consultas();

//! POST
const insertQuery = async () => {
    app.post('/submitPOST', (req, res) => {
        const nombre = req.body.nombre;
        const apellido = req.body.apellido;
        const usuario = req.body.usuario;
        const clave = req.body.clave;
        
        module.exports.nombre = nombre;
        module.exports.apellido = apellido;
        module.exports.usuario = usuario;
        module.exports.clave = clave;
        
        queries.insert();
        res.redirect('/');
    });
}
insertQuery();

//! PUT
const updateQuery = async () => {
    app.post('/submitPUT', (req, res) => {
        const id = req.body.id;
        const nombre = req.body.nombre;
        const apellido = req.body.apellido;
        const usuario = req.body.usuario;
        const clave = req.body.clave;

        module.exports.id = id;
        module.exports.nombre = nombre;
        module.exports.apellido = apellido;
        module.exports.usuario = usuario;
        module.exports.clave = clave;

        queries.update();
        res.redirect('/');

    });
}
updateQuery();

//! PATCH (ESTE HACERLO HASTA EL FINAL)
const patch = async () => {
    app.post('/submitPATCH', (req, res) => {
        
        const id = req.body.id;
        let nombre = req.body.nombre;
        let apellido = req.body.apellido;
        let usuario = req.body.usuario;
        let clave = req.body.clave;

        const obtenerDatos = async () => {
            try {
                const datos = await fetch('http://localhost:9090/api/usuarios');
                const resultados = await datos.json();
                for(let dato of resultados) {
                    if(dato.id_usuario == id) {
                        if(nombre.length == 0) nombre = dato.nombre;
                        if(apellido.length == 0) apellido = dato.apellido;
                        if(usuario.length == 0) usuario = dato.usuario;
                        if(clave.length == 0) clave = dato.clave;
                    }
                }
            }
            catch(err) {
                console.log("Hubo un error al obtener la API. ERROR ->" + err);
            }
            module.exports.id = id;
            module.exports.nombre = nombre;
            module.exports.apellido = apellido;
            module.exports.usuario = usuario;
            module.exports.clave = clave;
    
            queries.patch();
            res.redirect('/');
        }
        obtenerDatos();
    });
}
patch();

//! DELETE
const del = async () => {
    app.post('/submitDELETE', (req, res) => {
        const id_user = req.body.id_user;
        module.exports.id_user = id_user;

        queries.del();
        res.redirect('/');
    });
}
del();

const PORT = process.env.PORT || 9090;
app.listen(PORT, () => {
    console.log(`El servidor está escuchando en el puerto: ${PORT}`);
});