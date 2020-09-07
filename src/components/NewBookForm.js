import React, {Component} from 'react';
import '../style/NewBookForm.css';

class NewBookForm extends Component {

  handleAddBookBtn = () => {
    let title = document.getElementById('new-book-title');
    let author = document.getElementById('new-book-author');
    let pages = document.getElementById('new-book-pages');
    let completed = document.getElementById('new-book-completed');
    
    if (title.value === "" || author.value === "" || pages.value === "" ) {
      return;
    }

    let book = {
      title: title.value,
      author: author.value,
      pages: pages.value,
      completed: completed.checked
    }

    title.value = "";
    author.value = "";
    pages.value = "";
    completed.checked = false;

    this.props.addBook(book);
  }

  render() {
    return (
      <div className="new-book-form">
        <div>
          <input id="new-book-title" type="text" placeholder="New Book Title" />
          <input id="new-book-author" type="text" placeholder="New Book Author" />
          <input id="new-book-pages" type="number" placeholder="New Book Pages" />
          <input id="new-book-completed" type="checkbox" />
          <p></p>
        </div>
        <button onClick={ this.handleAddBookBtn }>Add Book</button>
      </div>
    )
  }
}

export default NewBookForm;