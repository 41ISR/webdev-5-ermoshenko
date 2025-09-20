import { useNavigate } from "react-router-dom";
export default function 
MovieCard ({movie}){
    const navigate = useNavigate();
    const handleClick = () => navigate (`/movie/${Movie.imdbID}`)
    return (
        <div className="movie-card" onClick={handleClick}>
            <img src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/200x300"} alt={Movie.Title}/>
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
        </div>
    )
}