import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

import * as BookAPI from "../../api/BooksAPI";

import { BOOK_SHELF } from "../../constants/book";

import "./BookDetail.scss";

const BookDetailPage = () => {
  const params = useParams();
  const [book, setBook] = useState();

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const data = await BookAPI.get(params.id);

        setBook(data);
      } catch (error) {
        navigate("/404");
      }
    };
    fetchBook();
  }, [params.id, navigate]);

  if (!book) return <p>Loading...</p>;

  return (
    <div className="book-detail">
      <img
        src={book.imageLinks?.thumbnail || "https://i.imgur.com/J5LVHEL.jpg"}
        alt={book.title}
      />
      <div className="book-detail__content">
        <h1>{book.title}</h1>
        {book.subtitle && <h3>Subtitle: {book.subtitle}</h3>}
        <p>
          Writers: <b>{book.authors?.join(", ") || "Unknown"}</b>
        </p>
        <p>
          Rating: {book.averageRating} ⭐ | Shelf: {BOOK_SHELF[book.shelf]}
        </p>
        <p>Categories: {book.categories?.join(", ") || "Unknown"}</p>
        <div className="book-detail__action">
          <a href={book.previewLink} target="_blank" rel="noreferrer">
            Preview <HiArrowRight />
          </a>
          <button onClick={handleBackClick}>
            <HiArrowLeft /> Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetailPage;
