import React from "react";
import { DebounceInput } from "react-debounce-input";
import "./SearchMovie.scss";

const SearchMovie = ({ setQueryString }) => {
  return (
    <div className="movies_search_box">
      <DebounceInput
        className="movies_search_input"
        placeholder="search movie..."
        minLength={1}
        debounceTimeout={500}
        onChange={(event) => setQueryString(event.target.value)}
      />
    </div>
  );
};

export default SearchMovie;
