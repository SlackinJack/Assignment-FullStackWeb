'use client';
import React, { useState, useEffect } from 'react';
import GetMovies from './get_movies';

// TODO:
/*************************************************
- (!!!) Integrate database
- Fix input field being dismissed every keystroke
- Make page length dynamic
**************************************************/


const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [movieId, setMovieId] = useState(0);
  const [titleValue, setTitleValue] = useState('');
  const [descriptionValue, setDescriptionValue] = useState('');
  
  // TODO: fix this
  /* 
  GetMovies().forEach((movie) => {
    const newMovie = {
      id: movies.length + 1,
      title: movie.title,
      description: movie.description,
    };
  });
  */
  
  // reset all
  const reset = () => {
      setShowModal(false);
      setMovieId(0);
      setTitleValue('');
      setDescriptionValue('');
  };

  // handles
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
    movies.forEach((movie) => {
      if (movie.id == id) {
           setMovieId(id);
           setTitleValue(movie.title);
           setDescriptionValue(movie.description);
           setShowModal(true);
           return;
      }
    });
  };

  // events
  const handleTitleChange = (event) => {
    setTitleValue(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescriptionValue(event.target.value);
  };

  const handleSaveButton = () => {
    movies.forEach((movie) => {
      if (movie.id === movieId) {
        movie.title = titleValue;
        movie.description = descriptionValue;
      }
    });
    
    reset();
  };

  const handleCloseButton = () => {
    reset();
  };

  const Modal = () => {
    return (
      <div className="flex flex-col w-full justify-between p-4 bg-gray-800 rounded-xl">
        <div className="flex flex-col m-4">
          <p>Title:</p>
          <input className="bg-black rounded-md p-2" type="text" defaultValue={titleValue} onChange={handleTitleChange}/>
        </div>
        &nbsp;
        <div className="flex flex-col m-4">
          <p>Description:</p>
          <input className="bg-black rounded-md p-2" type="text" defaultValue={descriptionValue} onChange={handleDescriptionChange}/>
        </div>
        &nbsp;
        <div className="flex flex-row w-full justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 w-4/5 m-4 p-3 rounded-xl" onClick={handleSaveButton}>
            Save
          </button>
          <button className="bg-red-500 hover:bg-red-700 w-1/5 m-4 p-3 rounded-xl" onClick={handleCloseButton}>
            Close
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col min-h-screen place-items-center p-8">
      <h1 className="font-black p-4">Movies:</h1>
      <button className="bg-blue-500 hover:bg-blue-700 p-2 rounded-xl" onClick={handleAddMovie}>
        Add Movie
      </button>
      <ul className="w-full h-48 p-4 space-y-4">
        {movies.map((movie) => (
          <li className="flex flex-row w-full justify-between p-2 bg-neutral-500/25 rounded-xl" key={movie.id}>
            <div className="p-1">
              <p className="font-black m-1 p-1">{movie.title}</p>
              <p className="m-1 p-1">{movie.description}</p>
            </div>
            <div className="flex flex-col">
              <button className="bg-red-500 hover:bg-red-700 p-2 m-1 rounded-md text-sm" onClick={() => handleDeleteMovie(movie.id)}>
                Delete
              </button>
              <button className="bg-yellow-500 hover:bg-yellow-700 p-2 m-1 rounded-md text-sm" onClick={() => handleEditMovie(movie.id)}>
                Edit
              </button>
            </div>
          </li>
        ))}
      </ul>
      {showModal && <Modal />}
    </div>
  );
};

export default Movies;

