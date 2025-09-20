import { useState } from "react";

export default function 
SearchForm ({onSearch}) {
    const [query, setQuery] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!query.trim()) return
            onSearch(query)
    }
}

return (
    <form className="Search-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Введите название фильма" value={query} onChange={(e)=> setQuery(e.target.value)}>
        </input>
        <button type="submit"></button>
    </form>

)