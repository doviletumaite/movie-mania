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
      </div>
  )
}
export default Filter