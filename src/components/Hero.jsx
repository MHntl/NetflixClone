import React from "react";
import { useSelector } from "react-redux";
import Loading from "./Loading";
import { Link } from "react-router-dom";
import { baseImageURL } from "../constants/apiConstants";

const Hero = () => {
  const { movieList, isLoading } = useSelector((store) => ({
    movieList: store.movieReducer.popularMovies,
    isLoading: store.movieReducer.isLoading,
  }));
  const randomIndex = Math.floor(Math.random() * movieList.length);
  const randomMovie = movieList[randomIndex];
  return (
    <div
      style={{
        margin: "0px 100px",
      }}
      className="row"
    >
      {isLoading && <Loading />}
      {!isLoading && (
        <>
          <div className="col-md-6 d-flex  flex-column gap-3 align-items-center justify-content-center">
            <h1>{randomMovie.title}</h1>
            <p>{randomMovie.overview}</p>
            <p className="text-warning fw-bold">
              IMDB {randomMovie.vote_average}
            </p>
            <div className="d-flex gap-3">
              <Link className="btn btn-danger" to={`movie/${randomMovie.id}`}>
                Watch Movie
              </Link>
              <Link className="btn btn-primary">Add to List</Link>
            </div>
          </div>
          <div className="col-md-6">
            <img
              style={{ maxWidth: "700px" }}
              className="image-fluid"
              src={baseImageURL + randomMovie.backdrop_path}
              alt=""
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Hero;
