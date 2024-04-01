import Hero from './Hero';
import {Link } from 'react-router-dom';

//TMDB API 
// curl --request GET \
//      --url 'https://api.themoviedb.org/3/search/movie?api_key=ee9db4c9517ab86c4ccb72dbc4b5e5b0&query=war' \
//      --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZTlkYjRjOTUxN2FiODZjNGNjYjcyZGJjNGI1ZTViMCIsInN1YiI6IjY1ZTBiNDU4MmQ1MzFhMDE2MmJmNWY3MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZFtZYLGZ5C5hza1ZEPppNXA9zvnWf4ENXc_EumPSLBI' \
//      --header 'accept: application/json'

const MovieCard=({ movie })=>{
  const posterUrl='https://image.tmdb.org/t/p/w500/'+(movie.poster_path)
  const detailUrl='/movies/'+(movie.id)
  return(
    <div className="col-lg-3 col-md-3 col-2 my-4">
    <div className="card" >
      <img src={posterUrl} className="card-img-top" alt={movie.original_title} />
        <div className="card-body">
    <h5 className="card-title">{movie.original_title}</h5>
    <Link to={detailUrl} className="btn btn-primary">Show Details</Link>
  </div>
</div>
</div>
  )
}


const SearchView=({keyword,searchResults})=>{
  const title="You are searching for"+keyword;
  // console.log(searchResults, "are the search results")
  const resultsHtml=searchResults.map((obj,i)=>{
    // return <div key={i}>{obj.original_title}</div>
    return <MovieCard movie={obj} key={i} />
  })
    return(
      <>
      <Hero text={title} />
      {resultsHtml &&
        <div className="container">
          <div className="row">
            {resultsHtml}
          </div>
        </div>
      }
      
       
      </>
    )
  }

  export default SearchView;