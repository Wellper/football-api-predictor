import React from "react";
import Loading from "../components/Loading";
import Prediction from "../components/Prediction";
import { useParams, Link } from "react-router-dom";

const requestOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "eca1b3c5c3msh10fc18c2dd35a03p19ffd0jsnce3397521988",
    "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
  },
};

export default function SingleTeam() {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(false);
  const [fixtures, setFixtures] = React.useState(null);
  // const [fixtureParams, setFixtureParams] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);
    async function getFixture() {
      try {
        const res = await fetch(
          `https://api-football-v1.p.rapidapi.com/v3/fixtures?team=${id}&next=1`,
          requestOptions
        );
        const data = await res.json();
        const { response } = data;
        // console.log(response);
        if (response) {
          ///
          const newFixture = response.map((item) => {
            // console.log(item.fixture);
            const { fixture, teams } = item;
            return {
              fixture,
              teams,
            };
          });
          setFixtures(newFixture);
        } else {
          setFixtures(null);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    getFixture();
  }, [id]);
  if (loading) {
    return <Loading />;
  }
  console.log(fixtures);

  if (!fixtures) {
    return <h2 className="section-title">no team to display</h2>;
  } else {
    // const { fixture, teams } = fixtures;
    return (
      <section className="section team-section">
        <Link to="/" className="btn btn-primary">
          back home
        </Link>

        <h2 className="section-title">Predictions</h2>
        <div className="teams-center">
          {fixtures.map((item) => {
            return <Prediction key={item.fixture.id} {...item}></Prediction>;
          })}
        </div>
      </section>
    );
  }
}
