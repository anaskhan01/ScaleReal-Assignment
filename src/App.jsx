import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Movies from "./Components/Movies/Movies";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  const [databackup, setDataBackup] = useState([]);
  function searchByTitle(searchTerm) {
    if (searchTerm == "") {
      setData(databackup);
    } else {
      let FilterArray = data?.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setData(FilterArray);
    }
  }

  const sortMoviesByReleaseDate = (sort) => {
    if (sort == "year") {
      const sortedMovies = [...data].sort((a, b) => {
        const dateA = new Date(a.release_date);
        const dateB = new Date(b.release_date);
        return dateA - dateB;
      });

      setData(sortedMovies);
    } else {
      const sortedMovies = [...data].sort(
        (a, b) => a.episode_id - b.episode_id
      );
      setData(sortedMovies);
    }
  };

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/films/?format=json")
      .then((response) => {
        setDataBackup(response.data.results);
        setData(response.data.results);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <div>
      <Navbar
        searchByTitle={searchByTitle}
        sortMoviesByReleaseDate={sortMoviesByReleaseDate}
      />
      <Movies data={data} />
    </div>
  );
};

export default App;
