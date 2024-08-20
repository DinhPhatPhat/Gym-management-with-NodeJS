const connection = require('../config/database');
const { getAllUsers, getUserById, createUser, updateUserById, deleteUserById } = require('../services/CRUDService');

const getHomepage = async (req, res) => {
    let users = await getAllUsers();
    console.log(">>>Get all user: ", users)
    res.render('Home.ejs', { users: users });
};

const getRegister = (req, res) => {
    res.send('<h1>This is register page<h1>');
};

const getCreateUser = (req, res) => {
    res.render('create-user.ejs');
}

const getEditUser = async (req, res) => {
    const userId = req.params.id;
    const user = await getUserById(userId);
    res.render('edit-user.ejs', { user: user });
}

const postCreateUser = async (req, res) => {
    createUser(req.body.email, req.body.name, req.body.city);
    res.redirect("/")
}

const postEditUser = async (req, res) => {
    updateUserById(req.body.email, req.body.name, req.body.city, req.body.id);
    res.send(">>> Edit user succeed!");
}

const postDeleteUser = async (req, res) => {
    deleteUserById(req.params.id);
    res.redirect("/")
}

module.exports = {
    getHomepage, getRegister, getCreateUser, getEditUser, postCreateUser, postEditUser, postDeleteUser
}
