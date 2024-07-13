import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

import * as BookAPI from "../../api/BooksAPI";

import BookGrid from "../../components/BookGrid";

import "./Search.scss";

const MAX_RESULTS = 20;

const SearchPage = () => {
  const [books, setBooks] = useState([]);
  const debouncedRef = useRef();

  const fetchBooks = async (query) => {
    const booksFetched = await BookAPI.search(query, MAX_RESULTS);

    if (!Array.isArray(booksFetched)) {
      console.log("[Search Books]:: Error: ", booksFetched);
      setBooks([]);
      return;
    }

    setBooks(booksFetched);
  };

  const handleSearchChange = (e) => {
    clearTimeout(debouncedRef.current);

    const query = e.target.value.trim();
    if (!query) return;

    debouncedRef.current = setTimeout(() => fetchBooks(query), 200);
  };

  const handleBookshelfChange = (book, shelf) => {
    const newBooks = books.map((x) => (x.id === book.id ? { ...x, shelf } : x));
    setBooks(newBooks);
  };

  return (
    <div className="search-books">
      <div className="search-books__bar">
        <Link to="/" className="search-books__close-search">
          Close
        </Link>
        <div className="search-books__input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <div className="search-books__results">
        <BookGrid books={books} onBookShelfChange={handleBookshelfChange} />
      </div>
    </div>
  );
};

export default SearchPage;
