const express = require('express');
const { creatingUser, getAllUser, removingUser, getAllUserInGarage } = require('../controllers/users');

const router = express.Router();

// Users
router.post('/createUser', creatingUser);
router.get('/getUserList', getAllUser);
router.get('/getUserListInGarage', getAllUserInGarage);
router.get('/removeUser/:id', removingUser);


module.exports = router;
