# MyReads: A Book Tracking App

This is the book tracking app, which is the final assignment for Udacity's React Fundamental course.
This project use [Create React App](https://github.com/facebook/create-react-app)

## Pages

`/`: landing page, you can view all book in its shelves

`/search`: search page, you can type in the search box and then the list of books will be appear match with what you type

`/book/:id`: book detail page, you can click on title of the book to access this page. This page includes more data from the book

`/*`: page not found, when you address invalid route

## Structure

```bash
MyReads
   ├── README.md
   ├── package.json
   ├── package-lock.json
   ├── public
   │     ├── favicon.ico
   │     ├── index.html
   │     ├── logo192.png
   │     ├── logo512.png
   │     ├── manifest.json
   │     └── robots.txt
   └── src
         ├── api
         ├── assets
         ├── components
         ├── constants
         ├── pages
         ├── App.js
         ├── index.js
         ├── index.scss
         └── routes.js
```

## Steps

1. Step 1: Install necessary packages
   "npm install"
2. Step 2: Run project
   "npm start"
