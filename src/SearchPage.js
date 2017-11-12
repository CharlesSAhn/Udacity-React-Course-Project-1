import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Books from './Books.js';
import PropTypes from 'prop-types'

class SearchPage extends Component{

    static propTypes = {
        updateBookShelf: PropTypes.func.isRequired,
        searchByTitleOrAuthor: PropTypes.func.isRequired
    };

    state = {
        search: ''
    }

    updateQuery = (searchText) => {
        this.setState({search: searchText.trim() })
    }

    render(){

        const { search } = this.state;
        const { searchByTitleOrAuthor, searchBookList, updateBookShelf } = this.props;

        return(

            <div>

                //search bar
                <div className="search-books-bar">
                    <Link className="close-search" to="/">
                    </Link>

                    <input
                        type="text"
                        placeholder="Search by title or author"
                        value={search}
                        onChange={ (event) => { this.updateQuery(event.target.value);
                                                searchByTitleOrAuthor(event.target.value);
                                               }
                                 }
                    />
                </div>

                //results
                <div>
                    <Books books={searchBookList}
                           updateBookShelf={updateBookShelf}/>
                </div>
            </div>



        )
    }
}

export default SearchPage