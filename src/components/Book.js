import React, {Component} from 'react';
import '../style/Book.css';

class Book extends Component {

  deleteBook = (e) => {
    let index = Array.from(e.target.parentNode.parentNode.parentNode.children).indexOf(e.target.parentNode.parentNode);
    this.props.deleteBook(index);
  }

  toggleCompleted = (e) => {
    let index = Array.from(e.target.parentNode.parentNode.parentNode.children).indexOf(e.target.parentNode.parentNode);
    this.props.toggleCompleted(index);
  }

  render() {
    const {title, author, pages, completed, index} = this.props.book;
    return (
      <div>
        <div className='book'>
          <p>{ title }</p>
          <p>{ author }</p>
          <p>{ pages }</p>
          { completed ? <input type="checkbox" checked onChange={ this.toggleCompleted } /> : <input type="checkbox" onChange={ this.toggleCompleted } /> }
          <p id="delete-btn" onClick={ this.deleteBook }>[X]</p>
        </div>
      </div>
    )
  }
}

export default Book;