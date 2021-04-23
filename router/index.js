const express = require('express');
const router = express.Router();
const authorize = require('_middleware/authorize')
const { authenticateSchema, authenticate,registerSchema,register,getAll,getById,updateSchema,update,forgotPasswordSchema,forgetpassword,_delete} = require('../controller/users.controller')

// routes
router.post('/login', authenticateSchema, authenticate);

router.post('/register', registerSchema, register);

router.get('/', authorize(), getAll);

router.get('/:id', authorize(), getById);

router.put('/:id', authorize(), updateSchema, update);

router.post('/forgetpassword', authorize(), forgotPasswordSchema, forgetpassword);

router.delete('/:id', authorize(), _delete);

module.exports = router;