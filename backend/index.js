const express = require('express')
const app = express()
const route = require('./Routes.js')
const cors = require('cors')

app.use(route)
app.listen(3001)

