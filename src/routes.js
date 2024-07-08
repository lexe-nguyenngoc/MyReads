import NotFoundPage from "./pages/404";
import HomePage from "./pages/Home";
import SearchPage from "./pages/Search";

const routes = [
  { path: "/", element: <HomePage /> },
  { path: "search", element: <SearchPage /> },
  { path: "*", element: <NotFoundPage /> }
];

export default routes;
