import React, { memo } from 'react'
import { useEffect, useState } from 'react';
import Hero from '../HeroSection/Hero';
import fetchData from '../../Function';
import CatButtons from '../MoviesCat/CatageoryButtons/CatButtons';
import { useNavigate, useParams } from 'react-router-dom';


const Home = () => {

  // Defining States and all the code 
  const [inputValue, setInput] = useState('');
  const [search, setSearch] = useState(false);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const searchFunction = (title) => {
    setSearch(true);
    navigate(`/search/${title}`);
    fetchingMovies(title);
    setSearch(true);
  }
  // Fetching the Data from api

  async function fetchingMovies(title) {
    try {
      const funCalling = await fetchData(title);
      if (funCalling == undefined) {
        setError('No Movies Found');
        setMovies([]);
        return;
      }
      setMovies(funCalling)
      setLoading(false);
    } catch (e) {
      setError(error);
      setLoading(true);
    }
  }


  useEffect(() => {
    if (location.pathname == '/') {
      setSearch(false);
      fetchingMovies();
      setInput('')
    } else {
      const title = location.pathname.split('/')[2];
      setInput(title)
      fetchingMovies(title);
    }
  }, [location.pathname])
  return (
    <>
      {
        loading ? (
          <div className="container">
            <img src="../../assets/loading/loading.gif" alt="" />
          </div>
        ) : (
          <div className="app">
            {/* Catageory buttons */}
            <CatButtons />
            {/* Search Bar */}
            <div className="search">
              <input type="text" placeholder='Enter Movie Name' value={inputValue} onChange={(e) => setInput(e.target.value)} />
              <i className="fa-solid fa-magnifying-glass" onClick={() => searchFunction(inputValue)}></i>
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

export default Home