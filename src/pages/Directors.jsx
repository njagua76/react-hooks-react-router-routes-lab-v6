// src/pages/Directors.jsx
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/directors")
      .then((res) => res.json())
      .then(setDirectors);
  }, []);

  return (
    <div>
      <NavBar />
      <h1>Directors Page</h1>
      {directors.map((director) => (
        <article key={director.name}>
          <h2>{director.name}</h2>
          <ul>
            {director.movies.map((movie, i) => (
              <li key={i}>{movie}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

export default Directors;

