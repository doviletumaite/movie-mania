const apiKey = process.env.API_KEY

const HomePage = () => {
    const fetchMovies = async () => {
        const moviesToFetch  = await fetch("https://api.themoviedb.org/3/movie/popular?api_key="+ apiKey +"&language=en-US&page=1")
        const movies = await moviesToFetch.json()
        console.log(movies)
    }
    fetchMovies()
    console.log(apiKey)
    return (
        <>
        </>
    )
}
export default HomePage