import { useState } from "react"
import "./SearchPage.css"
import MovieCard from "../../components/MovieCard/MovieCard"

const SearchPage = () => {
    const [movieName, setMovieName] = useState("")
    const [movies, setMovies] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await fetch(`https://www.omdbapi.com/?apikey=${import.meta.env.VITE_OMDB_APIKEY}&s=${movieName}&page=1`)
            const data = await res.json()
            setMovies(data.Search)
        } catch(err) {
            console.error(err)
        }
    }

    return (
        <>
            <h1>Поиск</h1>
            <form onSubmit={handleSubmit}>
                <input
                    value={movieName}
                    onChange={(e) => setMovieName(e.target.value)}
                    type="text" />
                <button>Поиск</button>
            </form>
            <div className="movie-feed">
                {movies.map(() => <MovieCard />)}
            </div>
        </>
    )
}

export default SearchPage