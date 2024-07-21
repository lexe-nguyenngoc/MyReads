import React from "react";
import PropTypes from "prop-types";

import BookshelfChanger from "../BookshelfChanger";

import "./BookCard.scss";

const BookCard = ({ data, onBookShelfChange, onBookClick }) => {
  const handleBookShelfChange = (shelf) => {
    onBookShelfChange(data, shelf);
  };

  const handleBookClick = () => {
    onBookClick(data);
  };

  return (
    <div className="book">
      <div className="book__top">
        <div
          className="book__cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url("${
              data.imageLinks?.thumbnail || "https://i.imgur.com/J5LVHEL.jpg"
            }")`
          }}
        ></div>
        <BookshelfChanger
          value={data.shelf}
          onBookShelfChange={handleBookShelfChange}
        />
      </div>
      <div className="book__title" onClick={handleBookClick}>
        {data.title}
      </div>
      <div className="book__authors">
        {data.authors?.join(", ") || "Unknown"}
      </div>
    </div>
  );
};

BookCard.propTypes = {
  data: PropTypes.object.isRequired,
  onBookShelfChange: PropTypes.func.isRequired,
  onBookClick: PropTypes.func.isRequired
};

export default BookCard;
