const SingleMovie = ({movie}) => {
    return (
     <div className="movie-card">
         <h3 className="movie-title">{movie.title}</h3>
         <img className="movie-img" src={'https://image.tmdb.org/t/p/w500'+ movie.backdrop_path}/>
     </div>
    )
}
export default SingleMovie