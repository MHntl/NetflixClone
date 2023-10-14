import React, { useEffect } from "react";
import Hero from "../components/Hero";
import { getGenres, getMovies, setLoading } from "../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import MovieList from "../components/MovieList";

const MainPage = () => {
  const { genres } = useSelector((store) => ({
    genres: store.movieReducer.genres,
  }));
  const dispatch = useDispatch();
  useEffect(() => {
    setLoading(true);
    dispatch(getMovies());
    dispatch(getGenres());
  }, []);
  return (
    <div>
      <Hero />
      {genres.map((genre) => (
        <MovieList key={genre.id} genre={genre} />
      ))}
    </div>
  );
};

export default MainPage;
