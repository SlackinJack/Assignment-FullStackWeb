'use client';
import React, { useState } from 'react';
import Modal from '../../components/modal';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editMovie, setEditMovie] = useState(null);

  const handleAddMovie = () => {
    const newMovie = {
      id: movies.length + 1,
      title: 'Movie Title',
      description: 'Movie Description',
    };
    setMovies([...movies, newMovie]);
  };

  const handleDeleteMovie = (id) => {
    const updatedMovies = movies.filter((movie) => movie.id !== id);
    setMovies(updatedMovies);
  };

  const handleEditMovie = (id) => {
    const updatedMovies = movies.map((movie) => {
      if (movie.id === id) {
        return {
          id: movie.id,
          title: movie.title,
          description: movie.description,
        };
      }
      return movie;
    });
    setMovies(updatedMovies);
    setShowModal(true);
    setEditMovie(id);
  };

  return (
    <div className="flex flex-col min-h-screen place-items-center p-8">
      <h1 className="font-black p-4">Movies:</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 p-2 rounded-xl"
        onClick={handleAddMovie}
      >
        Add Movie
      </button>
      <ul className="w-full h-48 p-4 space-y-4">
        {movies.map((movie) => (
          <li
            className="flex flex-row w-full justify-between p-2 bg-neutral-500/25 rounded-xl"
            key={movie.id}
          >
            <div className="p-1">
              <p className="font-black m-1 p-1">{movie.title}</p>
              <p className="m-1 p-1">{movie.description}</p>
            </div>
            <div className="flex flex-col">
              <button
                className="bg-red-500 hover:bg-red-700 p-2 m-1 rounded-md text-sm"
                onClick={() => handleDeleteMovie(movie.id)}
              >
                Delete
              </button>
              <button
                className="bg-yellow-500 hover:bg-yellow-700 p-2 m-1 rounded-md text-sm"
                onClick={() => handleEditMovie(movie.id)}
              >
                Edit
              </button>
            </div>
          </li>
        ))}
      </ul>
      {showModal && (
        <Modal
          title={editMovie.title}
          description={editMovie.description}
        />
      )}
    </div>
  );
};

export default Movies;


