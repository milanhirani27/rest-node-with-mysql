const Joi = require('joi');
const validateRequest = require('_middleware/validate-request');
const userService = require('./user.service');


function authenticateSchema(req, res, next) {
    const schema = Joi.object({
        username: Joi.string().required(),
        password: Joi.string().required()
    });
    validateRequest(req, next, schema);
}

function authenticate(req, res, next) {
    userService.authenticate(req.body)
        .then(user => res.json(user))
        .catch(next);
}

function registerSchema(req, res, next) {
    const schema = Joi.object({
        firstName: Joi.string().label('firstName is required').required(),
        lastName: Joi.string().label('lastName is required').required(),
        DOB: Joi.date().iso().label('DOB is required').required(),
        address: Joi.string().label('address is required').required(),
        mobile: Joi.number().min(10).label('10 Digit mobile no is required').required(),
        username: Joi.string().label('username is required').required(),
        password: Joi.string().min(6).label('password is required').required(),
        deviceToken:  Joi.string().label('deviceToken is required').required(),
        devicetype: Joi.string().label('devicetype is required'),
        currentdate:Joi.date().iso(),
        status: Joi.string().label('status is required'),
    });
    validateRequest(req, next, schema);
}

function register(req, res, next) {
    userService.create(req.body)
        .then(() => res.json({ message: 'Registration successful' }))
        .catch(next);
}

function getAll(req, res, next) {
    userService.getAll()
        .then(users => res.json(users))
        .catch(next);
}

function getById(req, res, next) {
    userService.getById(req.params.id)
        .then(user => res.json(user))
        .catch(next);
}

function updateSchema(req, res, next) {
    const schema = Joi.object({
        firstName: Joi.string().empty(''),
        lastName: Joi.string().empty(''),
        DOB: Joi.string().empty(''),
        address: Joi.string().empty(''),
        mobile: Joi.number().empty(''),
        username: Joi.string().empty(''),
        password: Joi.string().min(6).empty(''),
        devicetype:Joi.string().empty(''),
    });
    validateRequest(req, next, schema);
}

function update(req, res, next) {
    userService.update(req.params.id, req.body)
        .then(user => res.json(user))
        .catch(next);
}

function forgotPasswordSchema(req, res, next) {
    const schema = Joi.object({
        username: Joi.string().label('username is required').required()
    });
    validateRequest(req, next, schema);
}

function forgetpassword(req, res, next){
    userService.forgotPassword(req.body.id,req.body.password)
    .then(user => res.json(user))
    .catch(next);
}

function _delete(req, res, next) {
    userService.delete(req.params.id)
        .then(() => res.json({ message: 'User deleted successfully' }))
        .catch(next);
}

module.exports = {
    authenticateSchema,
    authenticate,
    registerSchema,
    register,
    getAll,
    getById,
    updateSchema,
    forgotPasswordSchema,
    update,
    forgetpassword,
    _delete
};
