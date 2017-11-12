import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Books from './Books.js';
import PropTypes from 'prop-types'

class Bookshelf extends Component{

    bookshelfTypes =[{'type': 'Currently Reading', 'shelf':'currentlyReading'},
        {'type':'Want to Read','shelf':'wantToRead'},
        {'type':'Read', 'shelf':'read'}];

    static propTypes = {
        bookList: PropTypes.array.isRequired,
        updateBookShelf: PropTypes.func.isRequired
    };


    render(){

        const { bookList, updateBookShelf } = this.props;

        return(
            <div>

                {
                    this.bookshelfTypes.map(type => (
                        <div className="bookshelf" key={type.type}>
                            <h2 className="bookshelf-title"> { type.type } </h2>
                            <Books books={bookList.filter(book => type.shelf === book.shelf)}
                                   updateBookShelf={updateBookShelf}/>

                            <div className="open-search">
                                <Link to="/create"> + </Link>
                            </div>

                        </div>
                    ))

                }

            </div>

        )
    }
}

export default Bookshelf