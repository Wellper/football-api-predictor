import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm, SetSubmit } = useGlobalContext();
  const searchValue = React.useRef("");

  const searchTeam = () => {
    setSearchTerm(searchValue.current.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    SetSubmit(searchValue.current.value);
  };

  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name"> Search a team</label>
          <input
            type="text"
            id="name"
            ref={searchValue}
            onChange={searchTeam}
          ></input>
          <button type="submit" className="btn-primary">
            search
          </button>
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
