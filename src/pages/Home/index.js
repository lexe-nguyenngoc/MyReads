import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import * as BookAPI from "../../api/BooksAPI";

import Bookshelf from "../../components/Bookshelf";

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

    return <Bookshelf key={shelf} name={BOOK_SHELF[shelf]} books={books} />;
  });

  return (
    <div className="home-page">
      <div className="home-page__title">
        <h1>MyReads</h1>
      </div>
      <div className="home-page__content">
        <div>{renderedShelves}</div>
      </div>
      <div className="home-page__open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};

export default HomePage;
