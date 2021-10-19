import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import './bootstrap.min.css';
import movies from './movies';
import Card from './Card';

ReactDOM.render(
  <ul className="search-results row list-unstyled">
    {
      movies.slice(0, 50).map(movie => <Card title={movie.title} year={movie.year} imdbRating={movie.imdbRating} smallPoster={movie.smallPoster}></Card>)
    }
  </ul>,
  document.getElementById('root')
)
