const mongoose = require('mongoose')
console.log("db-", process.env.DATABASE_URL)
mongoose.connect("mongodb+srv://rudrachauhan:cxlLPgCV52VfmDQ5@cluster0.nzigvgk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

const connection = mongoose.connection

connection.on('connected' , ()=>{
    console.log('Connection Successful')
})
connection.on('error' , ()=>{
    console.log('Connection unsuccessful')
})