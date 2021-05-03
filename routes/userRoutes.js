const express = require('express');
const Joi = require('joi');
const userController = require('../controllers/userController');

const router = express.Router();



router.get('/', userController.getUsers);
router.get('/:id', userController.getSingleUser);
router.post('/', userController.addUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
