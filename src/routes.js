import NotFoundPage from "./pages/404";
import BookDetailPage from "./pages/BookDetail";
import HomePage from "./pages/Home";
import SearchPage from "./pages/Search";

const routes = [
  { path: "/", element: <HomePage /> },
  { path: "search", element: <SearchPage /> },
  { path: "/book/:id", element: <BookDetailPage /> },
  { path: "*", element: <NotFoundPage /> }
];

export default routes;
