import React, { useEffect, useState } from "react";
import axios from "axios";

import "./MoviesList.css";
import MovieCard from "../MovieCard/MovieCard";

function MoviesList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const resp = await axios.get("https://api.tvmaze.com/shows");
      setUsers(resp.data);
    };
    fetchAPI();
  }, []);

  return (
    <div className="UserList">
      {users.map((user) => (
        <MovieCard key={user.id} movie={user} />
      ))}
    </div>
  );
}

export default MoviesList;
