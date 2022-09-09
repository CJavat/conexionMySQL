const connection = require('./conexion');

const query = async () => {
    const [rows, fields] = await (await connection).execute('SELECT * FROM usuarios');
    //console.log(rows);
    return rows;
}
query();

module.exports = query();