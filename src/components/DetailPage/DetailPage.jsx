import React, { useEffect, useState } from 'react'
import { Fragment } from 'react';
import Button from '../Buttons/Button';
import { useDispatch, useSelector } from 'react-redux';
import { action } from '../../Store/combineAction';
import { addLike } from '../../Store/actions/action';


// component code 
const DetailPage = () => {
  const dispatch = useDispatch();
  // Select the array's from the redux store
  const Mdetail = useSelector(state => state.detail.MovieDetailArray);
  const like_Array = useSelector(state => state.like.likeArray);
  const bookmark_Array = useSelector(state => state.save.bookmarkArray);

  const mDetail = Mdetail.flat(Infinity);
  // All the state Declaration
  const [bookmarks, setBookmarks] = useState(false);
  const [like, setlike] = useState(false);
  const [movie, setmovie] = useState([]);
  // Check if likeed the movie or not 
  const checkLike = () => {
    console.log('component render inside checklike')
    if (!like) {
      console.log('inside checkLike')
      for (let i of mDetail) {
        for (let j of like_Array) {
          if (i.imdbID == j.imdbID) {
            setlike(true);
          }
        }
      }
    }
  }

  // // check if bookmark or not
  const checkBookmark = () => {
    console.log('component render inside checkBookmark')

    if (!bookmarks) {
      for (let i of mDetail) {
        for (let j of bookmark_Array) {
          if (i.imdbID == j.imdbID) {
            setBookmarks(true);
          }
        }
      }
    }
  }

  // ToogleLikes
  const toogleLike = (m) => {
    setlike(prevState => !prevState);
    like ? dispatch(action.dislikeAction(m)) : dispatch(action.addLike(m))
    console.log('toggleLike')
  }

  // ToogleBookmark
  const toogleBookmark = (m) => {
    setBookmarks(prevBookmark => !prevBookmark);
    bookmarks ? dispatch(action.unSave(m)) : dispatch(action.bookmarkAction(m))
    console.log('toggleLike')
  }

  // Fetch the movie about name
  useEffect(() => {
    checkLike();
    checkBookmark();
    setmovie(mDetail)
  }, [like, bookmarks])
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
                      {/* Toogle like and bookmark */}
                      {like === true ? <i onClick={() => toogleLike(m)} className="fa-solid fa-heart"></i> : <i onClick={() => toogleLike(m)} className="fa-regular fa-heart"></i>}
                      <span>Like</span>
                    </div>
                    <div className="detail-icon d-flex flex-column align-items-center gap-2">
                      {bookmarks === true ? <i onClick={() => toogleBookmark(m)} className="fa-solid fa-bookmark"></i> : <i onClick={() => toogleBookmark(m)} className="fa-regular fa-bookmark"></i>}
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