const { Router } = require("express");
const BookModel = require("../database/model/Book.model");


const bookController = Router();


bookController.get("/", (req, res) => {
    BookModel.findAll().then(books => 
        res.status(200).json({ hasError : false, data : books})
    )
})

bookController.get("/:bookId", (req, res) => {
    BookModel.findByPk(req.params.bookId).then(book => 
        res.status(200).json({ hasError : false, data : book})
    )
})

bookController.post("/", (req, res) => {
    BookModel.create({...req.body})

    res.status(200).json({ hasError : false, data : { message : `book created!` }})
})

bookController.put("/:bookId", (req, res) => {
    BookModel.update({...req.body}, { where : { id : req.params.bookId }})

    res.status(200).json({ hasError : false, data : { message : `book ${req.params.bookId} updated!` }})
})

bookController.delete("/:bookId", (req, res) => {
    BookModel.destroy({ where : { id : req.params.bookId } })

    res.status(200).json({ hasError : false, data : { message : `book ${req.params.bookId} deleted!` }})
})



module.exports = bookController