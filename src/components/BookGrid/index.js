import React from "react";
import PropTypes from "prop-types";

import * as BookAPI from "../../api/BooksAPI";

import BookCard from "../BookCard";

import "./BookGrid.scss";
import { useNavigate } from "react-router-dom";

const BookGrid = ({ books, onBookShelfChange }) => {
  const navigate = useNavigate();

  const handleUpdateBookshelf = async (book, shelf) => {
    await BookAPI.update(book, shelf);
    onBookShelfChange(book, shelf);
  };

  const handleBookClick = (book) => {
    navigate(`/book/${book.id}`);
  };

  const renderedBooks = books.map((book) => (
    <li key={book.id}>
      <BookCard
        data={book}
        onBookShelfChange={handleUpdateBookshelf}
        onBookClick={handleBookClick}
      />
    </li>
  ));

  return <ol className="book-grid">{renderedBooks}</ol>;
};

BookGrid.propTypes = {
  books: PropTypes.array.isRequired,
  onBookShelfChange: PropTypes.func
};

export default BookGrid;
