import React, { Component } from 'react';
import Book from './Book';
import NewBookForm from './NewBookForm';
import '../style/Bookshelf.css';

class Bookshelf extends Component {
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
        <div className="books-container">
          <Book />
        </div>
        <NewBookForm />
      </div>
    )
  }
}

export default Bookshelf;