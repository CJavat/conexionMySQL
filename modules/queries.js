const connection = require('./conexion');
const server = require('./server.js');

const query = async () => {
    const [rows, fields] = await (await connection).execute('SELECT * FROM usuarios');
    return rows;
}
query();

const insert = async () => {
    const insertInto = `
        INSERT INTO usuarios(nombre, apellido, usuario, clave) 
        VALUES('${server.nombre}', '${server.apellido}', '${server.usuario}', '${server.clave}');
    `;
    try {
        
        const [rows, fields] = await (await connection).query(insertInto);
        return rows;
    }
    catch(err) {
        console.log('Ocurrio un error en la BD. - ERROR: ' + err);
    }
}

const update = async () => {
    const updateSet = `
        UPDATE usuarios SET nombre='${server.nombre}', apellido='${server.apellido}', usuario='${server.usuario}', clave='${server.clave}' WHERE id_usuario=${server.id};
    `;
    try {
        const [rows, fields] = await (await connection).query(updateSet);
        return rows;
    }
    catch(err) {
        console.log('Ocurrió un error al actualizar los datos en la BD. ERROR -> ' + err);
    }
}

const patch = async () => {
    const updateSet = `
        UPDATE usuarios SET nombre='${server.nombre}', apellido='${server.apellido}', usuario='${server.usuario}', clave='${server.clave}' WHERE id_usuario=${server.id};
    `;
    try {
        const [rows, fields] = await (await connection).query(updateSet);
        return rows;
    }
    catch(err) {
        console.log('Ocurrió un error al actualizar los datos en la BD. ERROR -> ' + err);
    }
}

const del = async () => {
    const deleteFrom = `
        DELETE FROM usuarios WHERE id_usuario=${server.id_user};
    `;
    try {
        const [rows, fiels] = await (await connection).query(deleteFrom);
        return rows;
    }
    catch(err) {
        console.log('Lo siento ha ocurrido un error eliminando el registro. ERROR -> ' + err);
    }
}

module.exports.query = query();
module.exports.insert = insert;
module.exports.update = update;
module.exports.patch = patch;
module.exports.del = del;