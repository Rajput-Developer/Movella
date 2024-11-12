import React, { Fragment, useState } from 'react'
import { useSelector } from 'react-redux'
import Hero from '../HeroSection/Hero';


export default function Wishlist() {
  const like_array = useSelector((state) => state.like.likeArray)
  const newArray = like_array.flat(Infinity);
  const [loading, setLoading] = useState(true);
  // loading Gif showing
  setTimeout(() => {
    setLoading(false);
  }, (1000));
  return (
    <>
      {
        loading ? (
          <div className="container">
            <img src="../../assets/loading/loading.gif" alt="" />
          </div>
        ) : (
          <div className='container justify-content-start'>
            {
              newArray.length > 0 ? (
                <>

                  {
                    newArray.map((m, index) => (
                      <Hero key={m.imdbID || index} Movies={m} />
                    ))
                  }

                </>
              ) : (
                <div className="container"><h2 className='my-3 text-center'>No Like Movies</h2></div>
              )
            }
          </div>
        )
      }
    </>
  )
}
