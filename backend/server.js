const express = require('express')
const router = express.Router()
const colors = require('colors')
const bodyParser = require('body-parser')
const dotenv= require('dotenv').config()
const {errorHandler,invalidPathHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const { urlencoded } = require('body-parser')

const cors = require("cors")
const app = express()
 
const port= 5000; 

connectDB() 
app.use(cors())    

// to access and use api request
app.use(express.json())
app.use(urlencoded({extended:false}))

app.use('/api/interview', require('./routes/interview'))
app.use('/api/candidate', require('./routes/Candidate'))
app.use('/api/interviewer', require('./routes/Interviewer'))


app.use(errorHandler)
app.use(invalidPathHandler)


app.listen(port,()=>(console.log(`Server is listening for request at ${port}`)))  