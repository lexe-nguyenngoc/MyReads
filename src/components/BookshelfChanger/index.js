import React from "react";

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

const BookshelfChanger = () => {
  return (
    <div className="book-shelf-changer">
      <select>
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

export default BookshelfChanger;
