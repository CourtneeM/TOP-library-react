import React, {Component} from 'react';
import '../style/Book.css';

class Book extends Component {
  
  state = {
    book: {
      title: this.props.book.title,
      author: this.props.book.author,
      pages: this.props.book.pages,
      completed: this.props.book.completed
    }
  }

  render() {
    return (
      <div>
        <div className='book'>
          <p>{ this.state.title }</p>
          <p>{ this.state.author }</p>
          <p>{ this.state.pages }</p>
          <input type="checkbox" />
          <p id="delete-btn">[X]</p>
        </div>
      </div>
    )
  }
}

export default Book;

// display book info from bookshelf.js