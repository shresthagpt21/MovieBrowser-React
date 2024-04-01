import Hero from './Hero';
import {useParams} from 'react-router-dom';
import { useState,useEffect } from 'react';

const MovieView=()=>{
  const {id}=useParams()
  console.log(id)
  const [movieDetails,setMovieDetails]=useState({})
  const [isLoading, setIsLoading]=useState(true)

//https://api.themoviedb.org/3/movie/157336?api_key=ee9db4c9517ab86c4ccb72dbc4b5e5b0

  useEffect(()=>{
    // console.log('make an api request',id)
    fetch('https://api.themoviedb.org/3/movie/'+(id)+'?api_key=ee9db4c9517ab86c4ccb72dbc4b5e5b0')
    .then(response=>response.json())
    .then(data=>{
      setMovieDetails(data)
      setIsLoading(false)
    })
  },[id])

  function renderMovieDetails(){
    if(isLoading)
    {
      return <Hero text="Loading..." />
    }
    if(movieDetails){
      const posterUrl='https://image.tmdb.org/t/p/w500/'+(movieDetails.poster_path)
      const backdropUrl='https://image.tmdb.org/t/p/original'+(movieDetails.backdrop_path)
      return ( 
        <>
      <Hero text={movieDetails.original_title} backdrop={backdropUrl} />
      <div className="container my-5">
        <div className="row">
          <div className="col-md-3">
           <img src={posterUrl} alt='...' className="img-fluid shadow rounded" />
          </div>
          <div className="col-md-9">
            <h2>{movieDetails.original_title}</h2>
            <p className='lead'>{movieDetails.overview}</p>
          </div>
        </div>
      </div>
      </>
      )
    }
  }

    return renderMovieDetails()
  }
  
  export default MovieView;