import { useEffect, useState } from "react"
import "../style/searchStyle.css"

const Search = ({filtered, setFiltered, numb}) => {
    const [query, setQuery] = useState("")
    const searchMovie = async (query, numb) => {
      const data = await fetch("https://api.themoviedb.org/3/search/movie?api_key=4e6137a25c112d7a3931970b2d03b3b4&language=en-US&query="+ query +"&page="+ numb+"&include_adult=false")
      const findedMovies = await data.json()
      setFiltered(findedMovies.results)
       console.log("movies founded", findedMovies.results)
    }

    useEffect(() => {
        if(query === "") return
        searchMovie(query)
    }, [query, numb])
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