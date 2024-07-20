import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import * as BookAPI from "../../api/BooksAPI";

import BookGrid from "../../components/BookGrid";

import "./Search.scss";
import { useDebounce } from "@uidotdev/usehooks";

const MAX_RESULTS = 20;

const SearchPage = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleBookshelfChange = (book, shelf) => {
    const newBooks = books.map((x) => (x.id === book.id ? { ...x, shelf } : x));
    setBooks(newBooks);
  };

  useEffect(() => {
    const fetchBooks = async () => {
      if (!debouncedSearchTerm) return;

      const booksFetched = await BookAPI.search(
        debouncedSearchTerm,
        MAX_RESULTS
      );
      console.log(booksFetched);

      if (!Array.isArray(booksFetched)) {
        console.log("[Search Books]:: Error: ", booksFetched);
        setBooks([]);
        return;
      }

      setBooks(booksFetched);
    };

    fetchBooks();
  }, [debouncedSearchTerm]);

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
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <div className="search-books__results">
        {!!searchTerm.trim() && (
          <BookGrid books={books} onBookShelfChange={handleBookshelfChange} />
        )}
      </div>
    </div>
  );
};

export default SearchPage;
