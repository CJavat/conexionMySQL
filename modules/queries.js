const connection = require('./conexion');
const server = require('./server.js');

const query = async () => {
    const [rows, fields] = await (await connection).execute('SELECT * FROM usuarios');
    return rows;
}
query();

const insert = async () => {
    const insertInto = `
    INSERT INTO usuarios(nombre, apellido, usuario, clave) VALUES('${server.nombre}', '${server.apellido}', '${server.usuario}', '${server.clave}');
    `;
    try {
        
        const [rows, fields] = await (await connection).query(insertInto);
        return rows;
    }
    catch(err) {
        console.log('Ocurrio un error en la BD. - ERROR: ' + err);
    }
}

module.exports.query = query();
module.exports.insert = insert;
