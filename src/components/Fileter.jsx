import { useEffect } from "react"
import "../style/filterStyle.css"

const Filter = ({setActive, active, setFiltered, popular}) => {
    useEffect(()=> {
      if(active === 0) {
          setFiltered(popular)
          return
      }
      const filteredMovies = popular.filter((m) => m.genre_ids.includes(active))
      setFiltered(filteredMovies)
    },[active])
    console.log(active)
    
  return (
      <div className="filter-container">
          <button className={active === 0 ? "activeButton" : ""} onClick={()=> setActive(0)}>All</button>
          <button className={active === 35 ? "activeButton" : ""} onClick={()=> setActive(35)}>Comedy</button>
          <button className={active === 28 ? "activeButton" : ""} onClick={()=> setActive(28)}>Action</button>
          <button className={active === 12 ? "activeButton" : ""} onClick={()=> setActive(12)}>Adventure</button>
          <button className={active === 16 ? "activeButton" : ""} onClick={()=> setActive(28)}>Animation</button>
          <button className={active === 80 ? "activeButton" : ""} onClick={()=> setActive(80)}>Crime</button>
          <button className={active === 99 ? "activeButton" : ""} onClick={()=> setActive(28)}>Documentary</button>
          <button className={active === 18 ? "activeButton" : ""} onClick={()=> setActive(28)}>Drama</button>
          <button className={active === 10751 ? "activeButton" : ""} onClick={()=> setActive(10751)}>Family</button>
          <button className={active === 14 ? "activeButton" : ""} onClick={()=> setActive(14)}>Fantasy</button>
          <button className={active === 36 ? "activeButton" : ""} onClick={()=> setActive(36)}>History</button>
          <button className={active === 27 ? "activeButton" : ""} onClick={()=> setActive(27)}>Horror</button>
          <button className={active === 10402 ? "activeButton" : ""} onClick={()=> setActive(10402)}>Music</button>
          <button className={active === 9648 ? "activeButton" : ""} onClick={()=> setActive(9648)}>Mystery</button>
          <button className={active === 36 ? "activeButton" : ""} onClick={()=> setActive(36)}>History</button>
          <button className={active === 10749 ? "activeButton" : ""} onClick={()=> setActive(10749)}>Romance</button>
          <button className={active === 878 ? "activeButton" : ""} onClick={()=> setActive(878)}>Science Fiction</button>
          <button className={active === 10770 ? "activeButton" : ""} onClick={()=> setActive(10770)}>TV Movie</button>
          <button className={active === 53 ? "activeButton" : ""} onClick={()=> setActive(53)}>Thriller</button>
          <button className={active === 10752 ? "activeButton" : ""} onClick={()=> setActive(10752)}>War</button>
          <button className={active === 37 ? "activeButton" : ""} onClick={()=> setActive(37)}>Western</button>
      </div>
  )
}
export default Filter