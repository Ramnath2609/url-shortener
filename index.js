const express = require('express')
const port = 3030
const app = express()
const router = require('./config/routes')
const setUpDB = require('./config/databse')

setUpDB()

app.use(express.json())

app.use('/', router)

app.get('/', (req, res) => {
    res.send('welcome')
})

app.listen(port, () => {
    console.log('listening to port', port)
})

