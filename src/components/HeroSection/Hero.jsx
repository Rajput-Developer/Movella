import React from 'react'
import { Link } from 'react-router-dom'
import { action } from '../../Store/combineAction';
import { useDispatch } from 'react-redux';


export default function Hero({ Movies }) {
  const dispatch = useDispatch();
  const detail = () => {
    dispatch(action.MovieDetail(Movies))
  }

  return (
    <div className='movie' onClick={detail}>
      <Link to={`/movies/${Movies.Title}`}>
        <div className='m-year'>
          <h1>{Movies.Year}</h1>
        </div>
        <div className='m-image'>
          <img src={Movies.Poster !== 'N/A' ? Movies.Poster : 'https://via.placeholder.com/400'} alt="" />
        </div>
        <div className='m-title'>
          <span>{Movies.Type}</span>
          <h3>{Movies.Title ?? ''}</h3>
        </div>
      </Link>
    </div>
  )
}
