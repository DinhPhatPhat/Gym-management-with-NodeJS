const path = require('path');
const express = require('express');
const { getHomepage, getRegister, getCreateUser, getEditUser, postCreateUser, postEditUser, postDeleteUser } = require(path.join(__dirname, '..', 'controllers/homeController.js'))
const router = express.Router();
//Khai báo route
router.get('/', getHomepage)

router.get('/Register', getRegister)

router.get('/get-create-user', getCreateUser)
router.get('/get-edit-user/:id', getEditUser)

router.post('/create-user', postCreateUser)
router.post('/edit-user', postEditUser)

router.post('/delete-user/:id', postDeleteUser)

module.exports = router; //export default