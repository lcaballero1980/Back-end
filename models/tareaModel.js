var pool = require('./bd');

async function getTarea() {
    var query = 'select * from tareas';
    var rows = await pool.query(query);
    return rows;
}

async function insertTarea(obj) {
    try {
        var query = 'insert into tareas set ?';
        var rows = await pool.query(query, [obj])
        return rows;

    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function deleteTareaById(id) {
    var query = 'delete from tareas where id = ?';
    var rows = await pool.query(query, [id]);
    return rows;
}

async function getTareaById(id) {
    var query = 'select * from tareas where id = ?';
    var rows = await pool.query(query, [id]);
    return rows [0];
}

async function modificarTareaById(obj, id) {
    try {
        var query = 'update tareas set ? where id = ?';
        var rows = await pool.query(query, [obj, id]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}


module.exports = { getTarea, insertTarea, deleteTareaById, getTareaById, modificarTareaById }