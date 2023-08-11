require("dotenv").config()
require("./db/connection")

const express = require("express")

const port = 5001 

const Book = require("./books/model")
const bookRouter = require("./books/routes")

const app = express()

app.use(express.json()) // 
app.use(bookRouter)

app.get("/health", (req, res) => {
    res.status(201).json({message: "API is working"})
})

app.get("/home", (req, res) => {
    res.send("<h1> Hello world </h1>")
})

app.get('*', (req, res) => {
    res.status(404).send('<h1>404 page not found</h1>')
})
delete('*',(req,res) =>{
    res.status(404).send('<h1>404 page not found</h1>')
})

app.put('*',(req,res) =>{
    res.status(404).send('<h1>404 page not found</h1>')
})
app.listen(port, () =>
    console.log( `Server is running on ${port}`)
)

//C:\Users\shukl\Downloads\Mongodb-main\MongoDb\m49-mongoose-main