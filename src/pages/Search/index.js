import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDebounce } from "@uidotdev/usehooks";

import * as BookAPI from "../../api/BooksAPI";

import BookGrid from "../../components/BookGrid";

import "./Search.scss";

const MAX_RESULTS = 20;

const SearchPage = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const debouncedSearchTerm = useDebounce(searchTerm.trim(), 300);

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

      setIsLoading(true);
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

      setIsLoading(false);
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
        {isLoading && <p>Loading...</p>}
        {!!debouncedSearchTerm.trim() && (
          <BookGrid books={books} onBookShelfChange={handleBookshelfChange} />
        )}
        {!isLoading && !!debouncedSearchTerm && books.length === 0 && (
          <p>No book match with your input: {debouncedSearchTerm}</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
