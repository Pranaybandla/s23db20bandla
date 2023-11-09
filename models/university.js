const mongoose = require("mongoose") 
const universitySchema = mongoose.Schema({  
    university_id: Number,  
    name: String,  
    location: String 
})  
module.exports = mongoose.model("university", universitySchema) 