import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function About() {

  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1000)
  return (
    <div>

      {
        loading ? (
          <div className="container">
            <img src="../../assets/loading/loading.gif" alt="" />
          </div>
        ) : (
          <div className="container py-5">
            <div className="about-page">
              <div className="heading mb-5">
                <h1>About Our Site</h1>
              </div>
              <div className="heading mb-5">
                <h2>The Best Movie site: Movella</h2>
              </div>
              <div className="site-detail">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt magnam quos alias nemo obcaecati reprehenderit corporis voluptas omnis pariatur, quidem blanditiis nesciunt natus. Nulla eligendi laudantium accusamus temporibus, molestias asperiores id quisquam itaque perspiciatis voluptate, voluptatibus, quas a vero sequi quia sit voluptates blanditiis minima. Et at animi dicta suscipit reprehenderit in provident sapiente id, eum tempore quis aspernatur sit cum, consectetur numquam. Assumenda laudantium tempore nesciunt aliquid, libero odio nostrum labore sequi tempora atque voluptas recusandae magnam, illum temporibus. Unde enim eveniet voluptates laudantium illo, laborum nisi aliquam ut, blanditiis reiciendis asperiores sequi. Aliquam quidem necessitatibus distinctio libero impedit.</p>
              </div>
              <div>
                <button className="btn btn-primary"><Link to='/'>Home Page</Link></button>
                <button className="btn btn-primary mx-3">Contact Us</button>
              </div>
            </div>

          </div>
        )
      }
    </div>
  )
}
