import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useImageContext } from '../ImageContext';
import ComicGrid from './ComicGrid';

const HomePage = () => {
  const { comics } = useImageContext();
  const navigate = useNavigate();

  const redirectToImageGridPage = () => {
    navigate('/image');
  };

  return (
    <div className="bg-comic-pattern min-h-screen bg-cover bg-center flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold mb-4">Comic Mania</h1>
      <button
        onClick={redirectToImageGridPage}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-8 transition duration-300 ease-in-out transform hover:-translate-y-1"
      >
        Create Your Own Comic
      </button>
      <div className="w-full max-w-4xl bg-white rounded shadow-lg p-4 mb-8 overflow-auto">
        <h2 className="text-3xl font-bold mb-4">Created Comics:</h2>
        {/* Displaying the comics using ComicGrid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {comics &&
            comics.map((comic, index) => (
              <ComicGrid key={index} images={comic} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
