import React from "react";
import TeamList from "../components/TeamList";
import SearchForm from "../components/SearchForm";

const Home = () => {
  return (
    <div>
      <SearchForm></SearchForm>
      <TeamList></TeamList>
    </div>
  );
};

export default Home;
