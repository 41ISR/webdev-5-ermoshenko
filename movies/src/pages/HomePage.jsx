import {useEffect, useState} from "react"
import LoadingSpinner from "../components/LoadingSpinner"
import { fetchMovies } from "../services/movieService"
import MovieCard from "../components/MovieCard"

export default function HomePage(){
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
}

useEffect(() => {
  const loadMovies = async () => {
    setLoading(true);
    try {
      const data = await fetchPopularMovies();
      setMovies(data.Search);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  
  loadMovies();
}, []);

return(
    <div>
        <h1>Популярные фильмы</h1>
        <div className="movies-grid">{movies.map((m) => (
            <MovieCard key={m.imdbID} movie={m}/>
        ))}
        </div>
        {loading && <LoadingSpinner />}
    </div>
)