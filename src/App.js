
import './App.css';
import Navbar from './components/Navbar';
// import Home from './components/Home';
// import AboutView from './components/AboutView';
import SearchView from './components/SearchView';
import { Routes,Route } from 'react-router-dom';
import {useState, useEffect} from 'react';
import MovieView from './components/MovieView';



function App() {

  const [searchResults, setSearchResults]=useState([]);
  const [searchText,setSearchText]=useState('');
  // console.log(searchText,"is the default");
  // setTimeout(()=>{
  //   setSearchText("New Text")
  //   console.log(searchText,"is the new text")
  // },2000)
  
  useEffect(()=>{
    if(searchText){
      console.log(searchText,"is the search text");
    fetch('https://api.themoviedb.org/3/search/movie?api_key=ee9db4c9517ab86c4ccb72dbc4b5e5b0&query='+searchText)
    .then(response=>response.json())
    .then(data=>{
    setSearchResults(data.results)
    })
    }
    
   },[searchText])

  return (
    <div >
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/about" element={<AboutView />} />  */}
        <Route path="/search" element={<SearchView keyword={searchText} searchResults={searchResults} />} />  
        <Route path="/movies/:id" element={<MovieView />} /> 

      </Routes> 
    </div>
  );
}

export default App;
