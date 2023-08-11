const { Router } = require("express")
const bookRouter = Router()

const { allBooks, addBook , getAllBooks ,deleteAllBooks,putAllBooks,putBooks,deleteBooks} = require("./controllers")


// create book data
bookRouter.post("/books/addBook",addBook)
//get all book
bookRouter.get("/books/getBooks",getAllBooks)
//get single book
bookRouter.get("/books/single/:title",allBooks)
//delete all book
bookRouter.delete("/books/deletebooks/:title", deleteAllBooks)
//delete single book
bookRouter.delete("/books/deleteAllbooks", deleteBooks)

//update autor name
bookRouter.put("/books/putBooks/:title", putAllBooks)

// update all book data
bookRouter.put("/books/putAllBooks/:title", putBooks)
module.exports = bookRouter


