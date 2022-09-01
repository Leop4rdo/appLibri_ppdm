const express = require('express');
const cors = require('cors');
const router = require("./router");
const notFoundMiddleware = require('./middleware/not-found.middleware');
const dataSource = require('./database/data-source');

const PORT = 8080

const app = express()

// loading middlewares
app.use(cors())
app.use(express.json())

app.use('/api', router)

app.use("*", notFoundMiddleware)

app.listen(PORT, () => {
    console.log("\x1b[32m", "[SERVER] applibri API is listening at http://localhost:" + PORT + "/api")
})

