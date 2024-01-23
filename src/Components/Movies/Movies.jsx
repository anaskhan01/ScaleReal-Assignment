import React, { useState } from "react";
import "./Style.css";
import { intToRoman } from "./Logic";
const Movies = ({ data }) => {
  const [selectedMovie, setSelectedMovie] = useState({});
  return (
    <div className="Flex">
      <div className="Half_Wid Sec_A">
        {Array.isArray(data) &&
          data.map((item, index) => (
            <div
              key={index}
              className="MovieList"
              onClick={() => {
                setSelectedMovie(item);
              }}
            >
              <span className="Ep_Text">EPISODE {item.episode_id}</span>
              <span className="Title_Text">
                EPISODE {intToRoman(item.episode_id)} - {item.title}
              </span>

              <span className="Title_Text">{item?.release_date}</span>
            </div>
          ))}
      </div>
      <div className="Half_Wid ">
        {selectedMovie?.title ? (
          <div className="Col">
            <span className="Title_Text">
              EPISODE {intToRoman(selectedMovie?.episode_id)} - {selectedMovie?.title}
            </span>
            <span className="Title_Text">{selectedMovie?.opening_crawl}</span>
            <span className="Title_Text">Directed by: {selectedMovie?.director}</span>
          </div>
        ) : (
          <div className="CenterIt">
            <h2>No Movie Selected</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Movies;
