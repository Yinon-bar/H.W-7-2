import React, { useState } from "react";
import "./MovieCard.css";
import axios from "axios";

function MovieCard(props) {
  const [tasks, setTasks] = useState([]);
  const [isDisplay, setIsDisplay] = useState(false);
  const handleTasks = async () => {
    // const resp = await axios.get(
    //   "https://jsonplaceholder.typicode.com/todos?movieId=" + props.movie.id
    // );
    // setTasks(resp.data);
    setIsDisplay(!isDisplay);
  };
  console.log(props);
  return (
    <div className={!isDisplay ? "MovieCard notActive" : "MovieCard active"}>
      {/* <img src={props.movie.image.medium} /> */}
      <div
        className="img"
        style={{
          backgroundImage: `url(${props.movie.image.medium})`,
          width: "100%",
          height: "350px",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
      <h3>{props.movie.name}</h3>
      <h4>{props.movie.email}</h4>
      <button onClick={handleTasks}>
        {!isDisplay ? "More info" : "Hide info"}
      </button>
      {isDisplay && (
        <div className="tasks">
          <h4>Summary</h4>
          <p dangerouslySetInnerHTML={{ __html: props.movie.summary }}>
            {/* {props.movie.summary} */}
          </p>
        </div>
      )}
    </div>
  );
}

export default MovieCard;
