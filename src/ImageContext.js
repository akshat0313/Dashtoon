import React, { createContext, useState, useContext } from 'react';

const ImageContext = createContext();

export const useImageContext = () => useContext(ImageContext);

export const ImageProvider = ({ children }) => {
  const [comics, setComics] = useState([]); // This will store an array of comic arrays

  const addComic = (newComic) => {
    setComics(prevComics => [...prevComics, newComic]);
  };

  return (
    <ImageContext.Provider value={{ comics, addComic }}>
      {children}
    </ImageContext.Provider>
  );
};