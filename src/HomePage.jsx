import { useEffect, useState } from "react"
import SingleMovie from "./components/SingleMovie.jsx"
import "./style/generalStyle.css"

const HomePage = () => {
    const [popularMovies, setPopularMovies] = useState([])
    const fetchMovies = async () => {
        const moviesToFetch  = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e6137a25c112d7a3931970b2d03b3b4&language=en-US&page=2")
        const movies = await moviesToFetch.json()
        setPopularMovies(movies.results)
    }
   useEffect(()=> {
    fetchMovies()
   }, [])
  console.log("movies", popularMovies)
    return (
        <>
        <div className="movie-board">
            {
                popularMovies.map(m => 
                    { return <SingleMovie key={m.id} movie={m}/>})
            }
        </div>
        </>
    )
}
export default HomePage