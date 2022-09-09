const express = require('express');
const app = express();
const path = require('path');
const raiz = path.join(__dirname, '../');

app.use('/public', express.static(path.resolve(raiz+'/css', 'public')));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

const queries = require('./queries');

const consultas = async () => {
    const mostrar = await queries;
    app.get('/api/usuarios', (req, res) => {
        console.log(mostrar);
        res.send(JSON.stringify(mostrar));
    });
}
consultas();

app.get('/', (req, res) => {
    res.sendFile(path.resolve(raiz+'public/', 'index.html'));
    //res.send('Servidor Iniciado.');
});

//! POST
app.get('/submit', (req, res) => {
    
    res.send('hola');
});

const PORT = process.env.PORT || 9090;

app.listen(PORT, () => {
    console.log(`El servidor está escuchando en el puerto: ${PORT}`);
});
