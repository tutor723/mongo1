const Book = require("./model")

//CREATE 
const addBook = async (req, res) => {
    try {
      
        console.log(req.body)
        const newBook = await Book.create(req.body)
        const successResponse = {
            message: "Success",
            newBook: newBook
        }
        res.status(201).json(successResponse)
    } catch (error) {
        const errorResponse = {
            message: "Error",
            error: error
        }
        res.status(501).json(errorResponse)
    }
}

//get all books
const getAllBooks = async (req, res) => {
    try {
        const allBooks = await Book.find({})

        const successResponse = {
            message: "success",
            books: allBooks
        }
        res.status(200).json(successResponse)

    } catch (error) {
        const errorResponse = {
            message: "Error",
            error: error
        }
        res.status(501).json(errorResponse)
    }
}
//stretch goal to get data by title
const allBooks = async (req, res) => {
    try {
        let single = req.params['title']
        const singleBooks = await Book.findOne({title:single})

        const successResponse = {
            message: "success",
            books: singleBooks
        }
        res.status(200).json(successResponse)

    } catch (error) {
        const errorResponse = {
            message: "Error",
            error: error
        }
        res.status(501).json(errorResponse)
    }
}
//delete single book
const deleteAllBooks =  async (req, res) => {
    try {
        let delet = req.params['title']
        const deleteBooks = await Book.findOneAndDelete({title:delet});

        const successResponse = {
            message: "success",
            books: deleteBooks
        }
        res.status(200).json(successResponse)

    } catch (error) {
        const errorResponse = {
            message: "Error",
            error: error
        }
        res.status(501).json(errorResponse)
    }
}

//delete all book
const deleteBooks =  async (req, res) => {
    try {
        
        const deleteBooks = await Book.deleteMany({});

        const successResponse = {
            message: "success",
            books: deleteBooks
        }
        res.status(200).json(successResponse)

    } catch (error) {
        const errorResponse = {
            message: "Error",
            error: error
        }
        res.status(501).json(errorResponse)
    }
}

//Update autor by title
const putAllBooks =  async (req, res) => {
    try {

        const name =   req.body.title
        const putAllBooks = await Book.findOneAndUpdate({title:name},  {$set : { author: req.body.author}}, {new : true})
      const successResponse = {
            message: "success",

            books: putAllBooks

        }
        res.status(200).json(successResponse)

    } catch (error) {
        const errorResponse = {
            message: "Error",
            error: error
        }
        res.status(501).json(errorResponse)
    }
}


//stretch goal to update author,title,genre

const putBooks =  async (req, res) => {
    try {
        const name =   req.body.title
        const genre = req.body.genre
       const putAllBooks = await Book.findOneAndUpdate({title:name},  {$set : { author: req.body.author, title:name, genre:genre}}, {new : true})

      const successResponse = {
            message: "success",

            books: putAllBooks

        }
        res.status(200).json(successResponse)

    } catch (error) {
        const errorResponse = {
            message: "Error",
            error: error
        }
        res.status(501).json(errorResponse)
    }
}




module.exports = {
    addBook,
    getAllBooks,
    deleteAllBooks,putAllBooks,allBooks,putBooks,deleteBooks
}