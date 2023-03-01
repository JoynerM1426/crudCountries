const { getAll, create, remove, update, getOne } = require('../controllers/contry.controllers');
const express = require('express');

const contryRouter = express.Router();

contryRouter.route('/')
    .get(getAll)
    .post(create)
contryRouter.route('/:id')
    .delete(remove)
    .put(update)
    .get(getOne)

module.exports = contryRouter;