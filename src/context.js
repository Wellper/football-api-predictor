import React, { useState, useContext, useEffect } from "react";

const url = "https://api-football-v1.p.rapidapi.com/v3/teams?search=";
const AppContext = React.createContext();
const requestOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "eca1b3c5c3msh10fc18c2dd35a03p19ffd0jsnce3397521988",
    "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
  },
};

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [teams, setTeams] = useState([]);
  const [submit, SetSubmit] = useState("");

  const fetchTeams = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${url}${searchTerm}`, requestOptions);
      const data = await res.json();
      // console.log(data);
      const { response } = data;
      console.log(response);
      if (response) {
        const newCoctails = response.map((item) => {
          const { team, venue } = item;
          return {
            team,
            venue,
          };
        });
        setTeams(newCoctails);
      } else {
        setTeams([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTeams();
  }, [submit]);

  return (
    <AppContext.Provider
      value={{
        loading,
        teams,
        setSearchTerm,
        SetSubmit,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
