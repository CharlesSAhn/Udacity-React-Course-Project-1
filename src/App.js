import React from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import ListBooks from './ListBooks.js';
import SearchPage from './SearchPage.js';
import './App.css'


class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */

    bookList: [],
    searchBookList: []
  };

  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({bookList: books })
    })
  };

  updateBookShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then( () => {
      book.shelf = shelf;
      this.setState({bookList: this.state.bookList.filter( b => b.id !== book.id).concat([book])})
    })
  };


  searchByTitleOrAuthor = (query) => {

    BooksAPI.search(query,20).then( (books) => {
      if(books !== undefined){

        if(!books.hasOwnProperty('error')){

          //check if book is already in the shelf and assign shelf otherwise, initialize book shelf to none.
          let temp = this.state.bookList;
          books.forEach(function(book){

            let filteredBook = temp.filter( data => data.id === book.id);

            if(filteredBook.length === 1)
              book.shelf = filteredBook[0].shelf;
            else
              book.shelf = "none";
          });

          this.setState({searchBookList: books});
        }
        else
          this.setState({searchBookList: []});
      }
      else
        this.setState({searchBookList: []});
    })
  };

  render() {
    return (
      <div className="app">

        <Route path="/" exact render={() => (
            <ListBooks  updateBookShelf={this.updateBookShelf}
                        bookList={this.state.bookList}
            />
        )}/>

        <Route path="/search" render={() => (
            <SearchPage searchByTitleOrAuthor={this.searchByTitleOrAuthor}
                        searchBookList={this.state.searchBookList}
                        updateBookShelf={this.updateBookShelf}
            />
        )}/>

      </div>
    )
  }
}

export default BooksApp
