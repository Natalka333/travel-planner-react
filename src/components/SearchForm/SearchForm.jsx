
import { useState } from "react";
import css from "./SearchForm.module.css";

const SearchForm = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.input}
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Enter city name"
      />

      <button className={css.button} type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
