import Navbar from './components/Navbar';
import './App.css';
import React,{useEffect,useState} from 'react';






function App() {
 
  const url="asd"; 

  const fetchMovies= (url)=>{
    fetch(url)
      .then(response=>response.json())
      .then(data=>setMovies(data.results))
      .catch(error=>console.log(error))


  };

  const[movies,setMovies]=useState([]);
 
  useEffect(()=>{

    fetchMovies(url);
  },[])
 
  return (
    
      <Navbar brand="Movies"/>
    
  );
}

export default App;
