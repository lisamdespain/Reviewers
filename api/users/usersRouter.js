const express = require('express');
const Users = require('./usersModel');

const router = express.Router();

router.get('/', (req, res, next) => {
    Users.getUsers()
    .then(user =>{
        res.status(200).json(user)
    })
    .catch(next);
})

router.get('/:id', (req, res, next) => {
    Users.getUserById(req.params.id)
    .then(user =>{
        res.status(200).json(user)
    })
    .catch(next);
})

router.get('/:id/genres', (req, res, next) => {
    Users.getUserGenre(req.params.id)
    .then(user =>{
        res.status(200).json(user)
    })
    .catch(next);
})

router.get('/:id/books', (req, res, next) => {
    Users.getAuthorBooks(req.params.id)
    .then(user =>{
        res.status(200).json(user)
    })
    .catch(next);
})

module.exports = router;