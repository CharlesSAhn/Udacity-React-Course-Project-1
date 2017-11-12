import React, { Component } from 'react'
import Bookshelf from './Bookshelf.js';
import PropTypes from 'prop-types'

class ListBooks extends Component{

    static propTypes = {
    bookList: PropTypes.array.isRequired,
    updateBookShelf: PropTypes.func.isRequired
    }


    render(){

        const { bookList, updateBookShelf } = this.props;

        return(
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>

                <div className="list-books-content">
                    <Bookshelf bookList={bookList}
                               updateBookShelf={updateBookShelf}
                    />
                </div>
            </div>
        )
    }
}


export default ListBooks