import React, {Component} from 'react';
import '../style/Book.css';

class Book extends Component {
  render() {
    return (
      <div className='book'>
        <p>Test Book</p>
        <p>Creator 1</p>
        <p>0000</p>
        <input type="checkbox" checked />
        <p style={{color: 'red', cursor: 'pointer'}}>[X]</p>
      </div>
    )
  }
}

export default Book;