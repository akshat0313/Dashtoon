// ImageGrid.js
import React from 'react';

const ImageGrid = ({ images}) => {
  const imageSize = 150; // Adjust as needed
  const boxWidth = 162;
  const boxheight = 162;

  return (
    <div className="max-w-md mx-auto my-6 p-6 py-2 shadow-lg rounded-md bg-blue " style={{ height: `${14*boxheight}` }}>
      <div className="grid grid-cols-2 gap-4 ">
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            className="border border-gray-300 bg-white max-w-md h-full flex justify-center items-center my-2" style={{ width: `${boxWidth}px`, height: `${boxheight}` }}>
              <img
                src={images[index]}
                alt={`Comic Panel ${index + 1}`}
                className="object-cover w-full h-full"
                style={{ width: `${imageSize}px`, height: `${imageSize}px` }}
              />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;
