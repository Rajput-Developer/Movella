import React from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { action } from '../../../Store/combineAction';

export default function CatButtons() {
  const dispatch = useDispatch();
  const handleValue = (e) => {
    dispatch(action.catname(e.target.text));
    // navigate(`/catageory/${e.target.text}`);
    console.log('e', e.target.text);
  }
  return (
    <div className="buttons">
      <Link className="btn btn-primary mx-3 mb-4 text-white" onClick={(e) => handleValue(e)} to='/catageory/action-movies'>Action</Link>
      <Link className="btn btn-primary mx-3 mb-4 text-white" onClick={(e) => handleValue(e)} to='/catageory/bollywood-movies'>Bollywood</Link>
      <Link className="btn btn-primary mx-3 mb-4 text-white" onClick={(e) => handleValue(e)} to='/catageory/hollywood-movies'>Hollywood</Link>
      <Link className="btn btn-primary mx-3 mb-4 text-white" onClick={(e) => handleValue(e)} to='/catageory/adult-movies'>Adult</Link>
      <Link className="btn btn-primary mx-3 mb-4 text-white" onClick={(e) => handleValue(e)} to='/catageory/lollywood-movies'>Lollywood</Link>
      <Link className="btn btn-primary mx-3 mb-4 text-white" onClick={(e) => handleValue(e)} to='/catageory/anime-movies'>anime</Link>
      <Link className="btn btn-primary mx-3 mb-4 text-white" onClick={(e) => handleValue(e)} to='/catageory/cartoon-movies'>cartoons</Link>
      <Link className="btn btn-primary mx-3 mb-4 text-white" onClick={(e) => handleValue(e)} to='/catageory/lollywood-movies'>Lollywood</Link>
    </div>
  )
}
