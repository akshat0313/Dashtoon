// ImageGrid.js
import React, { useState, useEffect } from 'react';

const ImageGrid = ({ images, isLoading }) => {
  const imageSize = 150; // Adjust as needed
  const boxWidth = 162;
  const boxheight = 162;

  return (
    <div className="max-w-md mx-auto my-6 p-6 shadow-lg rounded-md bg-white " style={{ height: `${12*boxheight}` }}>
      <div className="grid grid-cols-2 gap-4 " style={{ height: `${12*boxheight}` }}>
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            className="border border-gray-300 bg-white max-w-md flex justify-center items-center" style={{ width: `${boxWidth}px`, height: `${boxheight}` }}>
                
            {isLoading[index] ? (
              // Spinner component goes here
              <div className="flex justify-center items-center w-full h-full">Loading...</div>
            ) : images[index] ? (
              <img
                src={images[index]}
                alt={`Comic Panel ${index + 1}`}
                className="object-cover w-full h-full"
                style={{ width: `${imageSize}px`, height: `${imageSize}px` }}
              />
            ) : (
              <div className="flex justify-center items-center w-full h-full text-center text-gray-300">Empty</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;
