// ComicForm.js
import React, { useState } from 'react';

const ComicForm = ({ onSubmit, isLoading }) => {
  const [inputs, setInputs] = useState(Array(10).fill(''));

  // Handler to update specific input value
  const handleInputChange = (index, value) => {
    const newInputs = [...inputs]; // Use 'inputs' instead of 'inputValues'
    newInputs[index] = value;
    setInputs(newInputs); // Use 'setInputs' instead of 'setInputValues'
  };

  // Handler to generate a single comic panel
  const handleGenerate = (index) => {
    if (!isLoading[index]) {
      onSubmit(inputs[index], index); // Use 'inputs' instead of 'inputValues'
    }
  };

  return (
    <div className="max-w-2xl mx-auto my-6 p-6 bg-white shadow-lg rounded-md">
      <h2 className="text-center text-2xl font-bold mb-4 bg-gray-100 py-2 rounded">Write Your Story</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {inputs.map((input, index) => (
          <div key={index} className="flex flex-col sm:flex-row items-center sm:space-x-2">
            <textarea
              id={`panel_${index}`}
              rows={1} // Starting with 1 row
              value={input}
              onChange={(e) => handleInputChange(index, e.target.value)}
              className="resize-none border border-gray-300 p-2 rounded-md flex-grow sm:flex-grow-0 w-full"
              placeholder={`Panel ${index + 1} text`}
              required
            />
            <button
              type="button"
              onClick={() => handleGenerate(index)}
              className="mt-2 sm:mt-0 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded w-full sm:w-auto"
              disabled={isLoading[index]}
            >
              {isLoading[index] ? 'Loading...' : 'Generate'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComicForm;