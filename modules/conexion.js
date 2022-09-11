// const dataHost = {
//     host: "127.0.0.1",
//     user: "root",
//     password: "",
//     port: 3306,
//     database: "cjavatgamers"
// }
// const mysql2 = require('mysql2/promise');

// const conexionMySQL = async () => {
//     const connection = await mysql2.createConnection(dataHost);
    
//     connection.connect(err => {
//         if(err) {
//             return console.log('Hubo un error al conectarse a la Base de Datos.');
//         }
//         console.log("Conexión correctamente establecida con la BD: " + dataHost.database);
//     });
//     return connection;
// }
// module.exports = conexionMySQL();

//! MI PC*/
const dataHost = {
    host: "127.0.0.1",
    user: "root",
    password: "root",
    port: 3306,
    database: "holamundo"
}
const mysql2 = require('mysql2/promise');

const conexionMySQL = async () => {
    const connection = await mysql2.createConnection(dataHost);
    
    connection.connect(err => {
        if(err) {
            return console.log('Hubo un error al conectarse a la Base de Datos.');
        }
        console.log("Conexión correctamente establecida con la BD: " + dataHost.database);
    });
    return connection;
}
module.exports = conexionMySQL();