import React, { useEffect, useState } from "react";

import * as BookAPI from "../../api/BooksAPI";

import BookShelf from "../../components/BookShelf";

import "./Home.scss";

const BOOK_SHELF = {
  currentlyReading: "Currently Reading",
  wantToRead: "Want To Read",
  read: "Read"
};

const HomePage = () => {
  const [shelves, setShelves] = useState({});

  useEffect(() => {
    const getData = async () => {
      const response = await BookAPI.getAll();

      const transformedData = response.reduce((acc, curr) => {
        const shelf = curr.shelf;

        if (acc[shelf]) {
          acc[shelf].push(curr);
          return acc;
        }
        acc[shelf] = [curr];
        return acc;
      }, {});

      setShelves(transformedData);
    };

    getData();
  }, []);

  const renderedShelves = Object.keys(shelves).map((shelf) => {
    const books = shelves[shelf];

    if (books.length === 0) return <></>;

    return <BookShelf key={shelf} name={BOOK_SHELF[shelf]} books={books} />;
  });

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>{renderedShelves}</div>
      </div>
      <div className="open-search">
        <a>Add a book</a>
      </div>
    </div>
  );
};

export default HomePage;
