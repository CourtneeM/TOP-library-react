import React, { Component } from 'react';
import Book from './Book';
import NewBookForm from './NewBookForm';
import '../style/Bookshelf.css';

class Bookshelf extends Component {

  state = {
    bookshelf: []
  }

  addBook = (book) => {
    let bookshelf = this.state.bookshelf;
    bookshelf.push(book);
    this.setState({
      bookshelf
    });
  }

  deleteBook = (index) => {
    let bookshelf = this.state.bookshelf;
    bookshelf.splice(index, 1);
    this.setState({
      bookshelf
    });
  }

  toggleCompleted = (index) => {
    let bookshelf = this.state.bookshelf;
    bookshelf[index].completed = !bookshelf[index].completed;
    this.setState({
      bookshelf
    });
  }

  editBook = (book, index) => {
    let bookshelf = this.state.bookshelf;
    bookshelf[index] = book;
    this.setState({
      bookshelf
    });
  }

  toggleOrder = (index, newIndex) => {
    let bookshelf = this.state.bookshelf;
    let book = bookshelf[index];
    bookshelf.splice(index, 1);
    bookshelf.splice(newIndex, 0, book);
    this.setState({
      bookshelf
    });
  }

  render() {
    return (
      <div>
        <div className='bookshelf'>
          <p>Title</p>
          <p>Author</p>
          <p>Pages</p>
          <p>Completed</p>
          <p>Delete</p>
        </div>
        <div className="books">
          { this.state.bookshelf.map((book, index) => <Book book={book} index={index} deleteBook={this.deleteBook} toggleCompleted={this.toggleCompleted} editBook={this.editBook} toggleOrder={this.toggleOrder}/> ) }
        </div>
        <div>
          <NewBookForm addBook={ this.addBook } />
        </div>
      </div>
    )
  }
}

export default Bookshelf;