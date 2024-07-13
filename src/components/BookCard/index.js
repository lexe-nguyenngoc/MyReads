import React from "react";
import PropTypes from "prop-types";

import BookshelfChanger from "../BookshelfChanger";

import "./BookCard.scss";

const BookCard = ({ data, onBookShelfChange }) => {
  const handleBookShelfChange = (shelf) => {
    onBookShelfChange(data, shelf);
  };

  return (
    <div className="book">
      <div className="book__top">
        <div
          className="book__cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url("${data.imageLinks.thumbnail}")`
          }}
        ></div>
        <BookshelfChanger
          value={data.shelf}
          onBookShelfChange={handleBookShelfChange}
        />
      </div>
      <div className="book__title">{data.title}</div>
      <div className="book__authors">{data.authors?.join(", ")}</div>
    </div>
  );
};

BookCard.propTypes = {
  data: PropTypes.object.isRequired,
  onBookShelfChange: PropTypes.func.isRequired
};

export default BookCard;
