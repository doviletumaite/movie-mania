import { motion } from "framer-motion"

const SingleMovie = ({movie}) => {
    return (
     <motion.div layout className="movie-card">
         <h3 className="movie-title">{movie.title}</h3>
         <img className="movie-img" src={'https://image.tmdb.org/t/p/w500'+ movie.backdrop_path}/>
     </motion.div>
    )
}
export default SingleMovie