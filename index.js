const cookieParser=require('cookie-parser')
const bodyParser=require('body-parser')
const express=require('express')
const app=express()
const port=8000
const db=require('./config/mongoose')
const passport=require('passport')
const session=require('express-session')
//app.use(bodyParser)
app.use(express.urlencoded())
app.use('/',require('./routes/'))

app.listen(port,function(err){
    if(err){
        console.log('tehre is a error',err)
    }
    console.log("server is up with the port",port)
})