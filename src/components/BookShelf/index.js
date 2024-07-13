import React from "react";
import PropTypes from "prop-types";

import "./Bookshelf.scss";

const Bookshelf = ({ name, children }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf__title">{name}</h2>
      <div className="bookshelf__books">{children}</div>
    </div>
  );
};

Bookshelf.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Bookshelf;
