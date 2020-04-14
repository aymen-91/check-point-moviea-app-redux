import React from 'react';
import './App.css';
import MovieList from "./Component/MovieList";
import Search from "./Component/Search";


function App() {
  return (
    <div className="App">
      <Search />
      <MovieList />
    </div>
  );
}

export default App;
