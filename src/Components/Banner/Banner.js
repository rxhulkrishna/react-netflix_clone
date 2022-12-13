import React,{useEffect, useState}from 'react'
import './Banner.css'
import axios from '../../axios'
import { trending } from '../../Urls/urls'
import { IMAGE_URL } from '../../Constants/constants'

function Banner() {

  const [movie,setMovie] = useState([])
  useEffect(() => {
    axios.get(`${trending}`).then(response=>{
      setMovie(response.data.results[18])
  }).catch(err=>{
    alert('Network Error')
  })
  
  },[])
  return (
    <div style={{backgroundImage:`linear-gradient(
      to top,
      rgba(0,0,0,1) 10%,
      rgba(0,0,0,0) 
    ),url(${IMAGE_URL+ movie.backdrop_path })`}} className='banner'>
        <div className="content">
            <h1>{movie ? movie.name||movie.title : ""}</h1>
            <p>{movie.overview}</p>
            <div className="buttons">
                <button>Watch</button>
                <button>
                <span className="material-symbols-outlined">add_circle</span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Banner