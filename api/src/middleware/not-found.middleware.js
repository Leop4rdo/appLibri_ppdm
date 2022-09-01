const notFoundMiddleware = (req, res) => {
    res.status(404).send({
        status: 404,
        hasError: true,
        message: "Endpoint not found!"
    })
}

module.exports = notFoundMiddleware