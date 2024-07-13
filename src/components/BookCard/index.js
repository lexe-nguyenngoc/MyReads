import React from "react";
import PropTypes from "prop-types";

import BookshelfChanger from "../BookshelfChanger";

import "./BookCard.scss";

const BookCard = ({ data }) => {
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
        <BookshelfChanger />
      </div>
      <div className="book__title">{data.title}</div>
      <div className="book__authors">{data.authors.join(", ")}</div>
    </div>
  );
};

BookCard.propTypes = {
  data: PropTypes.object.isRequired
};

export default BookCard;
