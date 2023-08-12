const express=require ('express')

const app=express()
require('dotenv').config()
const apiRouter=require('./routers/apirouter')

const session =require('express-session')
const mongoose=require('mongoose')
mongoose.connect(`${process.env.DB_URL}/${process.env.DB_NAME}`)



app.use('/api',apiRouter)

app.listen(process.env.PORT,()=>{console.log(`SERVER IS ON PORT ${process.env.PORT}`)})
