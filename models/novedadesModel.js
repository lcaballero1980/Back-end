var pool = requiere('./bd');

async function getNovedades() {
    var query = "select * from novedades"; //select * from novedades
    var rows = await pool.query(query);
    return rows;
}

module.exports = { getNovedades }