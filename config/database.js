const mysql = require('mysql2/promise');

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     port: 3306,
//     password: '123123',
//     database: 'danguen',
//     dateStrings: 'date'
// });

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: 'newcumber',
    database: 'newcumber',
    dateStrings: 'date'
});

module.exports = {
    pool: pool
};