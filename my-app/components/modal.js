'use client';

import React, { useState } from 'react';

const Modal = ({ title, description }) => {
  const [titleValue, setTitleValue] = useState(title);
  const [descriptionValue, setDescriptionValue] = useState(description);
  const [isOpen, setIsOpen] = useState(true);

  const handleTitleChange = (event) => {
    setTitleValue(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescriptionValue(event.target.value);
  };

  // TODO: fix closing dialog
  const handleSaveButton = () => {
    setIsOpen(false);
  };
  
  const handleCloseButton = () => {
    setIsOpen(false);
  };

  // TODO: test/fix saving input fields
  return (
    <div className="flex flex-col w-full justify-between p-4 bg-neutral-500/25 rounded-xl">
        <div className="flex flex-col m-4">
          <h1>{title}</h1>
          <p>{description}</p>
          <p>Title:</p>
          <input className="rounded-md p-2" type="text" value={titleValue} onChange={handleTitleChange} />
        </div>
        &nbsp;
        <div className="flex flex-col m-4">
          <p>Description:</p>
          <input className="rounded-md p-2" type="text" value={descriptionValue} onChange={handleDescriptionChange} />
          &nbsp;
        </div>
      <div className="flex flex-row w-full justify-between">
        <button className="bg-blue-500 hover:bg-blue-700 w-4/5 m-4 p-3 rounded-xl" onClick={handleSaveButton}>Save</button>
        <button className="bg-red-500 hover:bg-red-700 w-1/5 m-4 p-3 rounded-xl" onClick={handleCloseButton}>Close</button>
      </div>
    </div>
  );
};

export default Modal;

