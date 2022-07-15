import React from "react";
import "./loader.scss";
import gif from "../../static/gif.gif";

const Loader = () => {
  return (
    <div className="spinner_container">
      <img src={gif} alt="" />
    </div>
  );
};

export default Loader;
