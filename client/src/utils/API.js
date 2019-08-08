import axios from "axios";

export default {

  searchBook: function(search_term) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + search_term);
  },

  getBooks: function() {
    return axios.get("/api/books");
  },

  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },

  saveBook: function(data) {
    return axios.post("/api/books", data);
  }
};
