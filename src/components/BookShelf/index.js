import React from "react";
import PropTypes from "prop-types";

import BookCard from "../BookCard";

import "./Bookshelf.scss";

const Bookshelf = ({ name, books, onBookShelfChange }) => {
  const renderedBooks = books.map((book) => (
    <li key={book.id}>
      <BookCard data={book} onBookShelfChange={onBookShelfChange} />
    </li>
  ));

  return (
    <div className="bookshelf">
      <h2 className="bookshelf__title">{name}</h2>
      <div className="bookshelf__books">
        <ol className="bookshelf__grid">{renderedBooks}</ol>
      </div>
    </div>
  );
};

Bookshelf.propTypes = {
  name: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  onBookShelfChange: PropTypes.func.isRequired
};

export default Bookshelf;
