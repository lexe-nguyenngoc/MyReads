import React from "react";
import PropTypes from "prop-types";

import "./BookshelfChanger.scss";

const BOOK_SHELF_OPTIONS = [
  {
    key: "default",
    value: "none",
    label: "Move to...",
    disabled: true
  },
  {
    key: "currentlyReading",
    value: "currentlyReading",
    label: "Currently Reading",
    disabled: false
  },
  {
    key: "wantToRead",
    value: "wantToRead",
    label: "Want to Read",
    disabled: false
  },
  {
    key: "read",
    value: "read",
    label: "Read",
    disabled: false
  },
  {
    key: "none",
    value: "none",
    label: "None",
    disabled: false
  }
];

const BookshelfChanger = ({ value, onBookShelfChange }) => {
  const handleChange = (e) => {
    onBookShelfChange(e.target.value);
  };

  return (
    <div className="book-shelf-changer">
      <select onChange={handleChange} value={value}>
        {BOOK_SHELF_OPTIONS.map((option) => (
          <option
            key={option.key}
            value={option.value}
            disabled={option.disabled}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

BookshelfChanger.propTypes = {
  value: PropTypes.string,
  onBookShelfChange: PropTypes.func.isRequired
};
export default BookshelfChanger;
