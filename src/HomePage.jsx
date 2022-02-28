import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import Filter from "./components/Fileter.jsx"
import Search from "./components/Search.jsx"
import SingleMovie from "./components/SingleMovie.jsx"
import "./style/generalStyle.css"
import lamp from "./style/pics/lamp.gif"

const HomePage = () => {
    const [popularMovies, setPopularMovies] = useState([])
    const [filtered, setFiltered] = useState([])
    const [active, setActive] = useState(0)
    const [numb, setNumb] = useState(1)
    const fetchMovies = async (numb) => {
        const moviesToFetch  = await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=4e6137a25c112d7a3931970b2d03b3b4&language=en-US&page=" + numb)
        const movies = await moviesToFetch.json()
        setPopularMovies(movies.results)
        setFiltered(movies.results)
    }
   useEffect(()=> {
    fetchMovies(numb)
   }, [])
   const loadMoreContent = () => {
       if(numb===0) return
    setNumb(prevNumb => prevNumb + 1)
    fetchMovies(numb)
    console.log("numb in home", numb)
   }
   const goback = () => {
       if (numb===0) return
       setNumb(prevNumb => prevNumb -1)
       fetchMovies(numb)
   }
 
    return (
        <>
        <div className="bodyPage">
            <div className="itemsContainer">
           <img className="lamp" src={lamp}/> 
        <Search filtered={filtered} setFiltered={setFiltered} numb={numb}/>
        <img className="lamp2" src={lamp}/> 
        <Filter popular={popularMovies} setFiltered={setFiltered} active={active} setActive={setActive}/>
        </div>
        <motion.div layout className="movie-board">
            
            <AnimatePresence>
            {
                filtered.map(m => 
                    { return <SingleMovie key={m.id} movie={m}/>})
            }
            </AnimatePresence>
            
        </motion.div> 
            <div className="buttonGroup">
             <button onClick={goback} className="goback">previous page</button>
             <button onClick={loadMoreContent} className="showMore">show more</button>
            </div>
         
        </div>
       
         </>
    )
}
export default HomePage