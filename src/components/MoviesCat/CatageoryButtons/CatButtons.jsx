import React from 'react'
import { Link } from 'react-router-dom'

export default function CatButtons() {
  return (
    <div className="buttons">
      <Link className="btn btn-primary mx-3 mb-4 text-white" to='/catageory/action-movies'>Action</Link>
      <Link className="btn btn-primary mx-3 mb-4 text-white" to='/catageory/bollywood-movies'>Bollywood</Link>
      <Link className="btn btn-primary mx-3 mb-4 text-white" to='/catageory/hollywood-movies'>Hollywood</Link>
      <Link className="btn btn-primary mx-3 mb-4 text-white" to='/catageory/adult-movies'>Adult</Link>
      <Link className="btn btn-primary mx-3 mb-4 text-white" to='/catageory/lollywood-movies'>Lollywood</Link>
      <Link className="btn btn-primary mx-3 mb-4 text-white" to='/catageory/anime-movies'>anime</Link>
      <Link className="btn btn-primary mx-3 mb-4 text-white" to='/catageory/cartoon-movies'>cartoons</Link>
      <Link className="btn btn-primary mx-3 mb-4 text-white" to='/catageory/lollywood-movies'>Lollywood</Link>
    </div>
  )
}
