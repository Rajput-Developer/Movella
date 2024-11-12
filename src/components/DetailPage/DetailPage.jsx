import React, { useEffect, useState } from 'react'
import { Fragment } from 'react';
import Button from '../Buttons/Button';
import { useDispatch, useSelector } from 'react-redux';
import { action } from '../../Store/combineAction';


// component code 
const DetailPage = () => {
  const dispatch = useDispatch();
  // All the state Declaration
  const Mdetail = useSelector(state => state.detail.MovieDetailArray);
  const likeArray = useSelector(state => state.like.likeArray);
  const mDetail = Mdetail.flat(Infinity);
  const [bookmarks, setBookmarks] = useState(false);
  const [like, setlike] = useState(false);
  const [movie, setmovie] = useState([]);

  // Check if likeed the movie or not 
  const checkLike = () => {
    for (let a of mDetail) {
      for (let b of likeArray) {
        if (a.imdbID == b.imdbID) {
          return setlike(true)
        }
      }
    }
  }
  // Fetch the movie about name
  useEffect(() => {
    setmovie(mDetail)
    checkLike();
  }, [])

  // ToogleLikes
  function toogleLike(m) {
    setlike(prevLike => !prevLike);
    dispatch(action.addLike(m))

  }

  // ToogleBookmark
  function toogleBookmark() {
    setBookmarks(prevBookmark => !prevBookmark);
  }

  return (
    <>
      {
        <div className='d-flex gap-5'>
          <div className="movie">
            {
              movie.map((m) => (
                <Fragment key={m.imdbID}>
                  <div className='m-year'>
                    <h1>{m.Year}</h1>
                  </div>
                  <div className='m-image'>
                    <img src={m.Poster !== 'N/A' ? m.Poster : 'https://via.placeholder.com/400'} alt="" />
                  </div>
                </Fragment>
              ))
            }
          </div>
          <div className="movie-detail mt-5 pt-5">
            {
              movie.map((m, index) => (
                <Fragment key={m.imdbID || index}>
                  <h2 className='mb-4'>{m.Title}</h2>
                  <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, magnam consectetur incidunt commodi eveniet laudantium impedit unde modi deleniti! Sit aut doloremque facilis ea perferendis omnis consequatur ipsum possimus itaque.</p>
                  <div className="detail-icon-main d-flex gap-4">
                    <div className="detail-icon d-flex flex-column align-items-center  gap-2">
                      {like === true ? <i onClick={() => toogleLike(m)} className="fa-solid fa-heart"></i> : <i onClick={() => toogleLike(m)} className="fa-regular fa-heart"></i>}
                      <span>Like</span>
                    </div>
                    <div className="detail-icon d-flex flex-column align-items-center gap-2">
                      {bookmarks === true ? <i onClick={() => toogleBookmark()} className="fa-solid fa-bookmark"></i> : <i onClick={() => toogleBookmark()} className="fa-regular fa-bookmark"></i>}
                      <span>Save</span>
                    </div>
                  </div>
                  {/* Button Component */}
                  <Button />
                </Fragment>
              ))
            }
          </div>
        </div>
      }
    </>
  )
}

export default DetailPage