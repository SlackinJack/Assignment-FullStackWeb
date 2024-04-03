'use client';
import React, { useState } from 'react';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  const handleAddMovie = () => {
    const newMovie = {
      // TODO: Make popup for new movie
      id: movies.length + 1,
      title: 'Movie Title',
      description: 'Movie Description',
    };

    setMovies([...movies, newMovie]);
  };

  const handleDeleteMovie = (id) => {
    const updatedMovies = movies.filter((Movie) => Movie.id !== id);
    setMovies(updatedMovies);
  };

  const handleEditMovie = (id) => {
    const updatedMovies = movies.map((Movie) => {
      if (Movie.id === id) {
        return {
          // TODO: Make popup for edit
          ...Movie,
          title: 'New Movie Title',
          description: 'New Movie Description',
        };
      }
      
      return Movie;
    });
    
    setMovies(updatedMovies);
  };

  return (
    // TODO: Fix page length (it doesnt adjust to the length of movies added)
    <div className="flex min-h-screen flex-col items-center p-24">
      <h1 className="font-black p-4">Movies:</h1>
      <button className="bg-blue-500 hover:bg-blue-700 p-2 rounded-xl" onClick={handleAddMovie}>Add Movie</button>
      <ul className="w-full h-48">
        {movies.map((Movie) => (
          <li className="flex flex-row w-full justify-between p-2 m-4 bg-neutral-500/25 rounded-xl" key={Movie.id}>
            <div className="p-1">
              <p className="font-black m-1 p-1">{Movie.title}</p>
              <p className="m-1 p-1">{Movie.description}</p>
            </div>
            <div className="flex flex-col">
              <button
                className="bg-red-500 hover:bg-red-700 p-2 m-1 rounded-md text-sm"
                onClick={() => handleDeleteMovie(Movie.id)}>
              Delete
              </button>
              <button
                className="bg-yellow-500 hover:bg-yellow-700 p-2 m-1 rounded-md text-sm"
                onClick={() => handleEditMovie(Movie.id)}>
              Edit
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Movies;

