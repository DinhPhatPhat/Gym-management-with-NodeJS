const connection = require("../config/database");
const getAllUsers = async () => {
    const sql = `SELECT * FROM Users`;
    const [rows, fields] = await connection.query(sql);
    return rows;
}

const getUserById = async (id) => {
    const sql = `SELECT * from Users where id = ?`;
    const values = [id];
    const [rows, fields] = await connection.query(sql, values);
    return rows[0];
}

const createUser = async (email, name, city) => {
    const sql = `INSERT INTO Users (email,name,city) values (?,?,?)`;
    const values = [email, name, city];
    const [rows, fields] = await connection.execute(sql, values);
}

const updateUserById = async (email, name, city, id) => {
    const sql = `UPDATE Users SET email= ?, name = ?, city = ? WHERE id = ?`;
    const values = [email, name, city, id];
    const [rows, fields] = await connection.execute(sql, values);
    return rows[0];
}

const deleteUserById = async (id) => {
    const sql = `DELETE FROM Users WHERE id = ?`;
    const values = [id];
    await connection.execute(sql, values);
    return 0;

}
module.exports = {
    getAllUsers, getUserById, createUser, updateUserById, deleteUserById
}