const bodyParser = require('body-parser')
const express = require('express')
const ConnectDB = require("../config/dbConnection")
const app = express()
const port = process.env.PORT || 3000
const helmet = require("helmet")
const dotenv = require("dotenv")
const cors = require("cors")
dotenv.config()


 // Middlewares
 app.use(cors())
 app.use(bodyParser.urlencoded({extended:false}))
 app.use(bodyParser.json())
 app.use(helmet())




app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Enabling the Database
  ConnectDB()


app.use("/api",require("./api/routes/index"))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})