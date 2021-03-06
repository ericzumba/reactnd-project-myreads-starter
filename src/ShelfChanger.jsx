import React from 'react'

class ShelfChanger extends React.Component {
  render() {
    return (
      <div className="book-shelf-changer">
        <select value={ this.props.shelf } onChange={ (e) => this.props.move(e.target.value) }>
          <option value="none" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

export default ShelfChanger
