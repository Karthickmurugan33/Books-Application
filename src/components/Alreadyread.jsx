import React, { useState } from "react"
import { useSelector } from "react-redux"


const Alreadyread = () => {
  const allreadyRead = useSelector((state) => state.books.AllreadyRead);
  const [searchTerm, setSearchTerm] = useState('');

  // console.log(allreadyRead)
  // console.log(![])
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  }
  const filteredBooks = allreadyRead.filter((book) => {
    const titleMatch = book.title.toLowerCase().includes(searchTerm.toLowerCase());
    const authorMatch = book.author.toLowerCase().includes(searchTerm.toLowerCase());
    return titleMatch || authorMatch;
  });
  return (
    <div>
      <input type="text" placeholder="Search" value={searchTerm} onChange={handleSearchChange} />
      {filteredBooks.length == 0 ? <h3>Books list is empty please add!</h3>
        :


        filteredBooks.map(book => (
          <div className='books booksDetails' key={book.id}>
            <img src={book.img} alt="book" width="150px"></img>
            <h2>{book.title}</h2>
            <p>Author: {book.author}</p>
            <p>Summary: {book.summary}</p>

          </div>
        ))}
    </div>
  )
}

export default Alreadyread