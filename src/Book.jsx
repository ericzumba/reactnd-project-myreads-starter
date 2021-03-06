import React from 'react'

class Book extends React.Component {
  render() {
    const backgroundUrl = "url(" + this.props.backgroundImage + ")"
    const authors = this.props.authors ? this.props.authors : []
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover"
                 style={{
                   width: this.props.width,
                   height: this.props.height,
                   backgroundImage: backgroundUrl
                 }}>
            </div>
            {this.props.children}
          </div>
          <div className="book-title">{ this.props.title }</div>
          <div className="book-authors">{ authors.join(", ") }</div>
        </div>
      </li>
    )
  }
}

export default Book
