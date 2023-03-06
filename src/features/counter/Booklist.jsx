import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { Link } from "react-router-dom"
import { AllreadyRead, Reading, toRead } from "./counterSlice"
// import "./src/App.css"

function BookList() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);
  const [searchTerm, setSearchTerm] = useState('');
  const ToReadHandler = (book) => {
    dispatch(toRead(book))
  }
  const ReadingHandler = (book) => {
    dispatch(Reading(book))
  }
  const AlreadyReadHandler = (book) => {
    dispatch(AllreadyRead(book))
  }
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  }
  const filteredBooks = books.filter((book) => {
    const titleMatch = book.title.toLowerCase().includes(searchTerm.toLowerCase());
    const authorMatch = book.author.toLowerCase().includes(searchTerm.toLowerCase());
    return titleMatch || authorMatch;
  });
  return (
    <div>
      <h2 className='booksname'>Books</h2>
      <input type="text" placeholder="Search" value={searchTerm} onChange={handleSearchChange} />
      <div className='booksDetails'>
        {filteredBooks.map(book => (
          <div className='books' key={book.id}>
            <img src={book.img} alt="book" width="150px"></img>
            <h2>{book.title}</h2>
            <p>Author: {book.author}</p>
            <p className='summary'>Summary: {book.summary}</p>
            <button onClick={() => ReadingHandler(book)}>Reading</button>
            <button onClick={() => ToReadHandler(book)}>To Read</button>
            <button onClick={() => AlreadyReadHandler(book)}>Already Read</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookList;
