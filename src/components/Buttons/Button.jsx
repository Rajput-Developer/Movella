import React from 'react'
import { Link } from 'react-router-dom'

export default function Button() {

     const alertingF = ()=>{
        console.log('Hello')
        alert('Hello')
     }
    return (
        <div className="buttons mt-4">
            <button className="btn btn-primary" onClick={()=> alertingF()}>Watch Online</button>
            <Link to='/'><button className="btn btn-primary mx-3">See More Movies</button></Link>
        </div>
    )
}
