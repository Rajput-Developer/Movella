import React from 'react'
import { useEffect, useState } from 'react';
import Hero from '../HeroSection/Hero';
import fetchData from '../../Function';


export default function Home() {

  // Defining States and all the code 
  const [search, setSearch] = useState('')
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  // Fetching the Data from api
  async function fetchingMovies(title) {
    try {
      const funCalling = await fetchData(title);
      setMovies(funCalling);

      setLoading(false);
    } catch (e) {
      setError(error);
      setLoading(true);
    }
  }


  useEffect(() => {
    fetchingMovies();
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
              <i className="fa-solid fa-magnifying-glass" onClick={() => fetchingMovies(search)}></i>
            </div>
            {
              movies.length > 0 ?
                (
                  // If Condition True
                  <div className="container">
                    {
                      movies.map((movie, index) => (
                        <Hero key={movie.imdbID || index} Movies={movie} />
                      ))
                    }
                  </div>
                ) :
                // Else Part
                (
                  <div className="empty">
                    <h2>No Movie Found {error} </h2>
                  </div>
                )
            }
          </div>
        )
      }
    </>
  )
}