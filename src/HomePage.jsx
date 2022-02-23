import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import Filter from "./components/Fileter.jsx"
import Search from "./components/Search.jsx"
import SingleMovie from "./components/SingleMovie.jsx"
import "./style/generalStyle.css"

const HomePage = () => {
    const [popularMovies, setPopularMovies] = useState([])
    const [filtered, setFiltered] = useState([])
    const [active, setActive] = useState(0)
    const fetchMovies = async () => {
        const moviesToFetch  = await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=4e6137a25c112d7a3931970b2d03b3b4&language=en-US&page=1")
        const movies = await moviesToFetch.json()
        setPopularMovies(movies.results)
        setFiltered(movies.results)
    }
   useEffect(()=> {
    fetchMovies()
   }, [])
  console.log("movies", popularMovies)
    return (
        <>
        <Search filtered={filtered} setFiltered={setFiltered}/>
        <Filter popular={popularMovies} setFiltered={setFiltered} active={active} setActive={setActive}/>
        <motion.div layout className="movie-board">
            <AnimatePresence>
            {
                filtered.map(m => 
                    { return <SingleMovie key={m.id} movie={m}/>})
            }
            </AnimatePresence>
        </motion.div>
        </>
    )
}
export default HomePage