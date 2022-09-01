const express = require('express');
const bookController = require('./controllers/book.controller');

const router = express.Router()

router.get('/life-check', (req, res) => res.status(200).send({ status : 200, hasError : false, message : 'applibri API is working properly!' }))

router.use("/books", bookController)

module.exports = router