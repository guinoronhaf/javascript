const mysql = require('mysql2/promise');
const client = mysql.createPool(process.env.CONNECTION_STRING);

const getUsers = async() => {
    const res = await client.query('SELECT * FROM users');
    return res[0];
};

const insertUser = async(user) => {
    const sql = 'INSERT INTO users VALUES (NULL, ?, ?, ?, ?)';
    const values = [user.name, user.email, user.password, user.date];
    await client.query(sql, values);
};

const updatePassword = async(user) => {
    const query = 'UPDATE users SET senha=? WHERE email=?';
    const values = [user.pass, user.email];
    await client.query(query, values);
}

const checkUser = async(email) => {
    const query = `SELECT * FROM users WHERE email="${email}"`;
    const res = await client.query(query);
    return res[0];
};

module.exports = { getUsers, insertUser, updatePassword, checkUser };