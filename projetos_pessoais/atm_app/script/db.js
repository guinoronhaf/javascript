const mysql = require('mysql2/promise');
const client = mysql.createPool(process.env.CONNECTION_STRING);

const getUsers = async() => {
    const res = await client.query('SELECT * FROM teste');
    return res[0];
};

const insertUser = async(user) => {
    const sql = 'INSERT INTO teste VALUES (NULL, ?, ?)';
    const values = [user.email, user.password];
    await client.query(sql, values);
};

module.exports = { getUsers, insertUser }