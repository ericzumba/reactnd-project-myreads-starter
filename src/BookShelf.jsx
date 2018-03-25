import React from 'react'
import Book from './Book'
import ShelfChanger from './ShelfChanger'

class BookShelf extends React.Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {
              this.props.books.map(b =>
                <Book { ...b } key={ b.title }>
                  <ShelfChanger book={ b }
                                shelf={ this.props.shelfName }
                                move={ this.props.move(b, this.props.shelfName) }/>
                </Book>
              )
            }
          </ol>
        </div>
      </div>
    )
  }
}

export default BookShelf
