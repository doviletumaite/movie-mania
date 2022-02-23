import { useEffect, useState } from "react"
import "../style/searchStyle.css"

const Search = ({filtered, setFiltered}) => {
    const [query, setQuery] = useState("")
    const [movies, setMovies] = useState([])
    const searchMovie = async (query) => {
      const data = await fetch("https://api.themoviedb.org/3/search/movie?api_key=4e6137a25c112d7a3931970b2d03b3b4&language=en-US&query="+ query +"&page=1&include_adult=false")
      const findedMovies = await data.json()
      setFiltered(findedMovies.results)
    }

    useEffect(() => {
        if(query === "") return
        searchMovie(query)
        setFiltered(movies) 
    }, [query])
    return (
        <div>
            <form>
                <input 
                className="searchbar"
                placeholder="Search a movie!"
                value={query}
                onChange={(e)=>setQuery(e.target.value)}
                />
            </form>
        </div>
    )
}
export default Search