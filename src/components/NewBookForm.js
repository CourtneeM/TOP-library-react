import React, {Component} from 'react';
import '../style/NewBookForm.css';

class NewBookForm extends Component {

  handleAddBookBtn() {
    console.log('yo');
  }

  render() {
    return (
      <div className="new-book-form">
        <div>
          <input type="text" placeholder="New Book Title" />
          <input type="text" placeholder="New Book Author" />
          <input type="text" placeholder="New Book Pages" />
          <input type="checkbox" />
          <p></p>
        </div>
        <button onClick={ this.handleAddBookBtn }>Add Book</button>
      </div>
    )
  }
}

export default NewBookForm;