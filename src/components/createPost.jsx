import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useImageContext } from '../ImageContext';
import ComicForm from './comicForm';
import ImageGrid from './ImageGrid';
import Spinner from './Spinner';

function ImageComponent() {
    const [resultUrls, setResultUrls] = useState(Array(10).fill(null)); // Array of 10 nulls
    const [isLoading, setIsLoading] = useState(Array(10).fill(false)); // Loading state for each panel
    const [errorMessage, setErrorMessage] = useState('');
    const { addComic } = useImageContext();
    const navigate = useNavigate();

    // Function to fetch individual image
    const fetchImage = async (text, index) => {
        setIsLoading(prev => prev.map((item, idx) => (idx === index ? true : item)));
        try {
            console.log(text);
            const response = await fetch(
                "https://xdwvg9no7pefghrn.us-east-1.aws.endpoints.huggingface.cloud",
                {
                    headers: {
                        "Accept": "image/png",
                        "Authorization": "Bearer VknySbLLTUjbxXAXCjyfaFIPwUTCeRXbFSOjwRiCxsxFyhbnGjSFalPKrpvvDAaPVzWEevPljilLVDBiTzfIbWFdxOkYJxnOPoHhkkVGzAknaOulWggusSFewzpqsNWM",
                        "Content-Type": "application/json"
                    },
                    method: "POST",
                    body: JSON.stringify({ "inputs": text }),
                }
            );
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const result = await response.blob();
            setResultUrls(prev => prev.map((item, idx) => (idx === index ? URL.createObjectURL(result) : item)));
        } catch (error) {
            setErrorMessage('Failed to load image. Please try again later.');
        } finally {
            setIsLoading(prev => prev.map((item, idx) => (idx === index ? false : item)));
        }
    };

    const handlePostImages = () => {
        if (resultUrls.every(url => url !== null)) {

            addComic(resultUrls);
            navigate('/');
        } else {
            setErrorMessage('Please generate all comic panels before posting.');
        }
    };

    return (
        <div className="flex flex-col lg:flex-row min-h-screen bg-fixed bg-cover bg-no-repeat bg-center" style={{ backgroundImage: 'url(/bg.jpg)' }}>
  <div className="lg:flex-1 p-4">
    <ComicForm onSubmit={fetchImage} isLoading={isLoading} />
  </div>
  <div className="flex-row lg:flex-1 p-4 flex flex-col justify-center items-center">
    {errorMessage && <div className="text-red-500 text-center w-full">{errorMessage}</div>}
    <div className="flex flex-col items-center"> {/* Wrap contents in a div */}
      <ImageGrid images={resultUrls} isLoading={isLoading} />
      <button
        onClick={handlePostImages}
        className="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition duration-300 ease-in-out transform hover:-translate-y-1"
        disabled={isLoading.some(isLoading => isLoading)} // Disable while any is loading
      >
        Post
      </button>
    </div>
  </div>
</div>

    );
}

export default ImageComponent;
