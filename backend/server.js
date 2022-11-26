const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('colors')
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const PORT = process.env.PORT || 8000

// connect to database
connectDB()

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//Routes
app.use('/api/user', require('./routes/userRoutes'))

app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`server starting on port ${PORT}`)
})
