import React, { useState } from "react"
import { useSelector } from "react-redux"




const Reading = () => {
  const reading = useSelector((state) => state.books.Reading);
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  }
  const filteredBooks = reading.filter((book) => {
    const titleMatch = book.title.toLowerCase().includes(searchTerm.toLowerCase());
    const authorMatch = book.author.toLowerCase().includes(searchTerm.toLowerCase());
    return titleMatch || authorMatch ;
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

export default Reading