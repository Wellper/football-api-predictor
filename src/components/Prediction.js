import React from "react";
import Loading from "../components/Loading";

const requestOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "eca1b3c5c3msh10fc18c2dd35a03p19ffd0jsnce3397521988",
    "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
  },
};

const Prediction = ({ fixture, teams }) => {
  const [loading, setLoading] = React.useState(false);
  const [prediction, setPrediction] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);
    async function getPrediction() {
      try {
        const res = await fetch(
          `https://api-football-v1.p.rapidapi.com/v3/predictions?fixture=${fixture.id}`,
          requestOptions
        );
        const data = await res.json();
        const { response } = data;
        console.log(response);
        if (response) {
          setPrediction(response[0].predictions.advice);
        } else {
          setPrediction(null);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    getPrediction();
  }, []);
  if (loading) {
    return <Loading />;
  }
  if (!prediction) {
    return <h2 className="section-title">no nono</h2>;
  }
  const { away, home } = teams;
  return (
    <article className="team">
      <div className="img-container">
        <img src={home.logo} alt={home.name} />
        <span>-</span>
        <img src={away.logo} alt={away.name} />
      </div>
      <div className="team-footer">
        <h4>{fixture.id}</h4>
        <h4>{prediction}</h4>
      </div>
    </article>
  );
};

export default Prediction;
