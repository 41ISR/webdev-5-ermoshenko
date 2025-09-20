const API_KEY = import.meta.env.VITE_OMDB_KEY;

const BASE_URL = "https://www.omdbapi.com"

export async function fetchMovies(search, page = 1 ) {
    const res = await fetch(`${BASE_URL}? apikey=${'505480d7'}&s=${search}&page=${page}`)
    const data = await res.json()
    if (data.Response === "False") throw new
         Error(data.Error)
    return data

}

export async function fetchMoviesDetails (id)
{
    const res = await fetch(`${BASE_URL}?apikey=${'505480d7'}&i=${id}`)
    const data = await res.json()
    if (data.Response === "False") throw new
         Error(data.Error)
    return data
}