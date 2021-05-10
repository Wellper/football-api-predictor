import React from "react";
import Team from "./Team";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const TeamList = () => {
  const { teams, loading } = useGlobalContext();
  // console.log(coctails);
  if (loading) {
    return <Loading></Loading>;
  }
  // if (teams.length < 1) {
  //   return <h2>Search a team</h2>;
  // }
  return (
    <section className="section">
      <div className="teams-center">
        {teams.map((item) => {
          return <Team key={item.team.id} {...item}></Team>;
        })}
      </div>
    </section>
  );
};

export default TeamList;
