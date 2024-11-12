import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, Navigate, Router } from 'react-router-dom'
import { action } from '../../../Store/combineAction';
import { useNavigate } from 'react-router-dom';

export default function CatButtons() {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleValue = (e) => {
    setValue(e);
    dispatch(action.catname(e));
    navigate(`/catageory/${e}`);
  }
  return (
    <div className="buttons">
      <Link className="btn btn-primary mx-3 mb-4 text-white" onClick={(e) => handleValue(e.target.text)} to='/catageory/action-movies'>Action</Link>
      <Link className="btn btn-primary mx-3 mb-4 text-white" onClick={(e) => handleValue(e.target.text)} to='/catageory/bollywood-movies'>Bollywood</Link>
      <Link className="btn btn-primary mx-3 mb-4 text-white" onClick={(e) => handleValue(e.target.text)} to='/catageory/hollywood-movies'>Hollywood</Link>
      <Link className="btn btn-primary mx-3 mb-4 text-white" onClick={(e) => handleValue(e.target.text)} to='/catageory/adult-movies'>Adult</Link>
      <Link className="btn btn-primary mx-3 mb-4 text-white" onClick={(e) => handleValue(e.target.text)} to='/catageory/lollywood-movies'>Lollywood</Link>
      <Link className="btn btn-primary mx-3 mb-4 text-white" onClick={(e) => handleValue(e.target.text)} to='/catageory/lollywood-movies'>animations</Link>
      <Link className="btn btn-primary mx-3 mb-4 text-white" onClick={(e) => handleValue(e.target.text)} to='/catageory/lollywood-movies'>Lollywood</Link>
      <Link className="btn btn-primary mx-3 mb-4 text-white" onClick={(e) => handleValue(e.target.text)} to='/catageory/lollywood-movies'>Lollywood</Link>
      <h3>{value}</h3>
    </div>
  )
}
