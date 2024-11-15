import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import Hero from '../HeroSection/Hero';
export default function Bookmarked() {
  const bookmarked_Array = useSelector(state => state.save.bookmarkArray);
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
              bookmarked_Array.length > 0 ? (
                <>

                  {
                    bookmarked_Array.map((m, index) => (
                      <Hero key={m.imdbID || index} Movies={m} />
                    ))
                  }

                </>
              ) : (
                <div className="container"><h2 className='my-3 text-center'>No Saved Movies</h2></div>
              )
            }
          </div>
        )
      }
    </>
  )
}
