"use client";
import { useEffect, useState } from "react";
import "./index.scss";
import MovieCard from "../MovieCard";
import { Movie } from "@/types/movie";
import ReactLoading from "react-loading";
import { getMoviesRequest } from "@/services/api";

export default function MovieList() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  const getMovies = async () => {
    try {
      setLoading(true);
      const response = await getMoviesRequest();
      setMovies(response);
    } catch (error) {
      console.error(error);
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <ReactLoading type="spin" color="#6046ff" height={"5%"} width={"5%"} />
      </div>
    );
  }
  return (
    <ul className="movie-list">
      {movies.map((movie) => (
        <MovieCard movie={movie} />
      ))}
    </ul>
  );
}
