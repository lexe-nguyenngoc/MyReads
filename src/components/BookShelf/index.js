import React from "react";
import PropTypes from "prop-types";

import BookCard from "../BookCard";

import "./BookShelf.scss";

const BookShelf = ({ name, books }) => {
  const renderedBooks = books.map((book) => (
    <li key={book.id}>
      <BookCard data={book} />
    </li>
  ));

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{name}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">{renderedBooks}</ol>
      </div>
    </div>
  );
};

BookShelf.propTypes = {
  name: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired
};

export default BookShelf;
