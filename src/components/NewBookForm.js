import React, {Component} from 'react';
import '../style/NewBookForm.css';

class NewBookForm extends Component {
  render() {
    return (
      <div className="new-book-form">
        <div>
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="checkbox" />
        </div>
        <button>Add Book</button>
      </div>
    )
  }
}

export default NewBookForm;