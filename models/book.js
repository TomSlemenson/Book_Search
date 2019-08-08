const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  googleId:{
    type: String,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true,
  },
 
  authors: String,
  description:String,
  image: String,
  
  link: {
    type: String,
    required: true,
    unique: true
  },
  date: { type: Date, default: Date.now }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
