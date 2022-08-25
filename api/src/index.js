import express from "express"
import cors from "cors"

const PORT = 8080

const app = express()

// loading middlewares
app.use(cors())
app.use(express.json())


app.get('/life-check', (req, res) => res.status(200).send({ status : 200, hasError : false, message : 'applibri API is working properly!' }))


// listen to all not found routes
app.use((req, res, next) => {
    res.status(404).send({
        status: 404,
        hasError: true,
        message: "Endpoint not found!"
    })
})

app.listen(PORT, () => {
    console.log("\x1b[32m", "applibri API is listening on port " + PORT)
})

