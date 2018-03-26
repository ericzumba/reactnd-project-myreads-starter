import React from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

class ListBooks extends React.Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {
              Object.keys(this.props.shelves).map(shelfName => (
                <BookShelf title={ this.props.dictionary[shelfName] } // TODO: tidy this up - weird dict prop
                           shelfName={ shelfName }
                           key={ shelfName }
                           books={ this.props.shelves[shelfName] }
                           move={ this.props.move }/>
              ))
            }
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )
  }
}

export default ListBooks
