import React, { Component } from 'react'
import BookShelfChanger from './BookShelfChanger.js';
import PropTypes from 'prop-types'

class Books extends Component{

    static propTypes = {
        bookList: PropTypes.array.isRequired,
        updateBookShelf: PropTypes.func.isRequired
    };

    render(){

        const { books, updateBookShelf } = this.props;

        return(
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {
                        books.map(book =>
                            <li key={book.id}>
                                <div className="book">
                                    <div className="book-top">
                                        <div className="book-cover"  style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})`}} >
                                        </div>
                                        <BookShelfChanger  updateBookShelf={updateBookShelf} book={book}/>
                                    </div>
                                    <div className="book-title">{book.title}</div>


                                    { book.hasOwnProperty('authors') && (
                                        book.authors.map( author =>
                                            <div key={author} className="book-authors">{ author }</div>
                                    ))}
                                </div>
                            </li>
                    )}
                </ol>
            </div>
        )
    }
}

export default Books