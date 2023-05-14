const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000


app.get('/', (req, res) => {
    res.send('hello hadeel')
})

app.use(cors())

require('../db/mongodb')

app.use(express.json())

const routes = require('../routers/router')
app.use(routes)

app.listen(port, () => console.log(`localhost ${port}`))