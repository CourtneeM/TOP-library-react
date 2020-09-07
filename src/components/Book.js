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
    let title = document.getElementById('edit-title').value;
    let author = document.getElementById('edit-author').value;
    let pages = document.getElementById('edit-pages').value;

    if (title === "" || author === "" || pages === "") {
      return;
    }

    let book = {
      title,
      author, 
      pages,
      completed: document.querySelector('input[type="checkbox"]')
    }
    this.setState({
      editMode: false
    });
    this.props.editBook(book, index);
  }

  toggleOrder = (e) => {
    let index = Array.from(e.target.parentNode.parentNode.parentNode.children).indexOf(e.target.parentNode.parentNode);
    let upIndex = index;
    let downIndex = index;
    
    if (e.target.classList.contains('fa-sort-up')) {
      upIndex--;
      this.props.toggleOrder(index, upIndex);
    } else if (e.target.classList.contains('fa-sort-down')) {
      downIndex++;
      this.props.toggleOrder(index, downIndex);
    }
  }

  render() {
    const {title, author, pages, completed} = this.props.book;
    return (
      <div>
        <div className='book'>
          <div className="order-btns">
          { this.state.editMode ? null : <i onClick={ this.toggleOrder } className="fas fa-sort-up fa-2x"></i> }
          { this.state.editMode ? null : <i onClick={ this.toggleOrder } className="fas fa-sort-down fa-2x"></i> }
          </div>
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

// Add functionality to rearrange book order - hide up arrow on first item (!previousSibling), hide down arrow on last (!nextSibling) - have index update after rearranging, including state.bookshelf array in Bookshelf.js
// down arrow is working correctly, but not up arrow