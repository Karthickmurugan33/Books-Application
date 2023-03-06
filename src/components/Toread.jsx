import React, { useState } from "react"
import { useSelector } from "react-redux"

const Toread = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const toreading = useSelector((state) => state.books.toRead);
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  }
  const filteredBooks = toreading.filter((book) => {
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
          <div className='books' key={book.id}>
            <img src={book.img} alt="book" width="150px"></img>
            <h2>{book.title}</h2>
            <p>Author: {book.author}</p>
            <p className="summary">Summary: {book.summary}</p>

          </div>
        ))}
    </div>
  )
}

export default Toread