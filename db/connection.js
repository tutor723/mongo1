const mongoose = require("mongoose")


const connection = async () => { 
    try {
        await mongoose.connect("mongodb+srv://username:username@cluster0.zksxfyd.mongodb.net/?retryWrites=true&w=majority")
        console.log("Successfully connected")
    } catch (error) {
        console.log(error)
    }

}


connection()
