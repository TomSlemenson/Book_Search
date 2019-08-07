import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid/";
import Form from "../components/Form/";
import Card from "../components/Card/";
import API from "../utils/API";

const styles = {
  h1: {
    fontFamily: "'Saira Stencil One', cursive",
    fontSize: "60px"
  },
};

class Search extends Component {
  state = {
    books: [],
    search_term: "",
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.searchBook(this.state.search_term)
      .then(res => {
        this.setState({ search_term: "" });
        this.setState({ books: res.data.items })
      }
      )
  };

  handleBookSave = (book) => {
    let auths = book.volumeInfo.authors
    let authors = book.volumeInfo.authors[0];
    for (let index = 1; index < auths.length; index++) {
      authors += ":" + auths[index];
    }

    authors = `${authors.split(":").join(", ")}.`
   
    API.saveBook({
      googleId: book.id,
      title: book.volumeInfo.title,
      link: book.volumeInfo.infoLink,
      authors: authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail,
    })
      .then(res => {
        alert(`The book "${book.volumeInfo.title}" was saved to your list.`)
        this.setState({ books: this.state.books.filter(book => book.id !== res.data.id) })

      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12 sm-12">
            <div className="text-center m-5 p-5 text-light">
              <h1 style={styles.h1}>Google Books Search     <i className="fas fa-book-open mr-5"></i> </h1>
            </div>
            <Form
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
              search_term={this.state.search_term}/>
            {this.state.books.map(book => (
              <Card
              key={book.id}
              title={book.volumeInfo.title}
              link={book.volumeInfo.infoLink}
              authors={`${book.volumeInfo.authors}.`}
              description={book.volumeInfo.description}
              image={book.volumeInfo.imageLinks.thumbnail}
              Button={() => (<button onClick={() => this.handleBookSave(book)}
                className="btn btn-success ml-2 pr-4 pl-4">Save</button>)} />))}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Search;
