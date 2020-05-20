import axios from "axios";

export default {
  getGoogleBooks: function (searchterm) {
    console.log("searchterm :" + searchterm);
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchterm}&key=AIzaSyDwF8w0aaj9qUQWm4KbapIRA5aYOd3Evrs`);
  },

  // Gets all books
  getBooks: function () {
    return axios.get("/api/books");
  },
  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData);
  }
};

