const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.DB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
})
.then(db => console.log('db is connected'))
.catch(err => console.log(err))