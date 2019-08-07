import axios from "axios";

export default {
  // Gets books from the Google API
  searchBook: function(search_term) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + search_term);
  },
  // Gets all saved books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Deletes the saved book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves an book to the database
  saveBook: function(data) {
    return axios.post("/api/books", data);
  }
};
