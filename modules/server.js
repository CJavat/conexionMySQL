const express = require('express');
const app = express();


// Para poner rutas estaticas.
app.use(express.static('public'));
// Otra opcion para personalizar los links son:
// app.use('/rutaPersonalizada', express.static('public'));
// --> para igresar seria: localhost:9090/rutaPersonalizada/index.html

// MIDDLEWARE - Sirve para parsear el body del POST para poderlo obtener.
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

const queries = require('./queries');

const consultas = async () => {
    const mostrar = await queries.query;
    app.get('/api/usuarios', (req, res) => {
        console.log(mostrar);
        res.send(JSON.stringify(mostrar));
    });
}
consultas();

//! POST
const insertQuery = async () => {
    app.post('/submit', (req, res) => {

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

//! PATCH (ESTE HACERLO HASTA EL FINAL)

//! DELETE

const PORT = process.env.PORT || 9090;

app.listen(PORT, () => {
    console.log(`El servidor está escuchando en el puerto: ${PORT}`);
});
