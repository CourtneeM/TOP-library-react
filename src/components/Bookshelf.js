import React, { Component } from 'react';
import Book from './Book';
import NewBookForm from './NewBookForm';
import '../style/Bookshelf.css';

class Bookshelf extends Component {

  state = {
    bookshelf: [{title: 'harry potter', author: 'JK', pages: '3883', completed: false}],
  }

  addBook = (book) => {
    let bookshelf = this.state.bookshelf;
    bookshelf.push(book);
    this.setState(
      bookshelf
    )
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
        <div>
        { 
          this.state.bookshelf.forEach((book) => (
            <Book book={book} />
            )) 
        }
        </div>
        <div>
          <NewBookForm addBook={ this.addBook } />
        </div>
      </div>
    )
  }
}

export default Bookshelf;