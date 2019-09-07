const express = require('express')
const path = require('path')
const morgan = require('morgan')

// init
const app = express()

// settings
app.set('port', process.env.PORT || 4000)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended:false}))

// static files
app.use(express.static(path.join(__dirname, 'public')))

// routes
app.use(require('./router/routes'))
app.use((req, res, next)=>{
    res.send('404 not found')
    next()
})

// listen
async function listen(){
    const port = app.get('port')
    await app.listen(port)
    console.log('server on port', port)
}listen()