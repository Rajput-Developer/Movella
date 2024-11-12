import React, { useEffect, useState } from 'react'
import fetchData from '../../../Function'
import Hero from '../../HeroSection/Hero';
import { useSelector } from 'react-redux';
const CatMovies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const MoviesName = useSelector(state => state.name.name);

  async function Movies(title) {
    try {
      const funCalling = await fetchData(title);
      if (funCalling == undefined) {
        setError('Movies not found')
        setLoading(false)
        setMovies([]);
        return;
      }
      setMovies(funCalling);
      setLoading(false)
    } catch (error) {
      setError(error);
      setLoading(true);
    }
  }
  useEffect(() => {
    Movies(MoviesName);
  }, [])


  return (
    <>
      {
        loading ? (
          <div className="container">
            <img src="../../assets/loading/loading.gif" alt="" />
          </div>
        ) : (
          <div className="app">
            <div className="search">
              <input type="text" placeholder='Enter Movie Name' value={search} onChange={(e) => setSearch(e.target.value)} />
              <i className="fa-solid fa-magnifying-glass" onClick={() => Movies(search)}></i>
            </div>
            {
              movies.length > 0 ?
                (
                  // If Condition True
                  <div className="container">
                    {
                      movies.map((movie) => (
                        <Hero key={movie.imdbID} Movies={movie} />
                      ))
                    }
                  </div>
                ) :
                // Else Part
                (
                  <div className="empty">
                    <h2>{error} </h2>
                  </div>
                )
            }
          </div>
        )
      }
    </>
  )
}
export default CatMovies