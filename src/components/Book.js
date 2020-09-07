import React, {Component} from 'react';
import '../style/Book.css';

class Book extends Component {
  
  state = {
    editMode: false
  }

  deleteBook = (e) => {
    let index = Array.from(e.target.parentNode.parentNode.parentNode.children).indexOf(e.target.parentNode.parentNode);
    this.props.deleteBook(index);
  }

  toggleCompleted = (e) => {
    let index = Array.from(e.target.parentNode.parentNode.parentNode.children).indexOf(e.target.parentNode.parentNode);
    this.props.toggleCompleted(index);
  }

  toggleEditMode = () => {
    let editMode = this.state.editMode;
    this.setState({
      editMode: !editMode
    });
  }

  editBook = (e) => {
    let index = Array.from(e.target.parentNode.parentNode.parentNode.children).indexOf(e.target.parentNode.parentNode);
    let completed = document.querySelector('input[type="checkbox"]');
    let book = {
      title: document.getElementById('edit-title').value,
      author: document.getElementById('edit-author').value,
      pages: document.getElementById('edit-pages').value,
      completed: completed.checked
    }
    this.setState({
      editMode: false
    });
    this.props.editBook(book, index);
  }

  render() {
    const {title, author, pages, completed} = this.props.book;
    return (
      <div>
        <div className='book'>
          { this.state.editMode ? <input id="edit-title" type="text" placeholder={ title } /> : <p onClick={ this.toggleEditMode }>{ title }</p> }
          { this.state.editMode ? <input id="edit-author" type="text" placeholder={ author } /> : <p onClick={ this.toggleEditMode }>{ author }</p> }
          { this.state.editMode ? <input id="edit-pages" type="text" placeholder={ pages } /> : <p onClick={ this.toggleEditMode }>{ pages }</p> }
          { completed ? <input id="edit-completed" type="checkbox" checked onChange={ this.toggleCompleted } /> : <input type="checkbox" onChange={ this.toggleCompleted } /> }
          { this.state.editMode ? <button onClick={ this.editBook }>Save Changes</button> : <p id="delete-btn" onClick={ this.deleteBook }>[X]</p> }
        </div>
      </div>
    )
  }
}

export default Book;

// Add functionality to rearrange book order - drag and drop - have index update after rearranging, including state.bookshelf array in Bookshelf.js  - cursor: move
// cannot add empty book