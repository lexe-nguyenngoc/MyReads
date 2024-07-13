import React from "react";
import PropTypes from "prop-types";
import BookCard from "../BookCard";

const BookShelf = ({ name, books }) => {
  const renderedBooks = books.map((book) => (
    <BookCard key={book.id} data={book} />
  ));

  return (
    <div className="book-shelf">
      <h3>{name}</h3>
      <div>{renderedBooks}</div>
    </div>
  );
};

BookShelf.propTypes = {
  name: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired
};

export default BookShelf;
