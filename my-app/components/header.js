import React from 'react';

function Header() {
  return (
    <div className="flex flex-row justify-end items-center p-8">
      <a href="/" className="mr-5">Home</a>
      <a href="/movies" className="mr-5">Movies</a>
    </div>
  )
}

export default Header;

