import { useEffect, useState } from 'react';
import './style.css';

export const GenderInput = ({ error }) => {
  const [gender, setGender] = useState();

  useEffect(() => {
    setGender('male');
  }, []);

  return (
    <div className="w-2/4">
      <div className="flex gap-2 p-2 rounded-xl border-2 border-gray-400 h-12">
        {gender === 'female' ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-venus"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#2c3e50"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="12" cy="9" r="5" />
            <line x1="12" y1="14" x2="12" y2="21" />
            <line x1="9" y1="18" x2="15" y2="18" />
          </svg>
        ) : gender === 'male' ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-mars"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#2c3e50"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="10" cy="14" r="5" />
            <line x1="19" y1="5" x2="13.6" y2="10.4" />
            <line x1="19" y1="5" x2="14" y2="5" />
            <line x1="19" y1="5" x2="19" y2="10" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-question-mark"
            viewBox="0 0 24 24"
            strokWidth="1.5"
            stroke="#2c3e50"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M8 8a3.5 3 0 0 1 3.5 -3h1a3.5 3 0 0 1 3.5 3a3 3 0 0 1 -2 3a3 4 0 0 0 -2 4" />
            <line x1="12" y1="19" x2="12" y2="19.01" />
          </svg>
        )}

        <div className="form-check form-check-inline pl-2">
          <input
            className="form-check-input form-check-input rounded-full h-4 w-4 border border-black bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            type="radio"
            name="gender"
            id="male"
            value="male"
            defaultChecked
            onChange={(e) => setGender(e.target.value)}
          />
          Male
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input form-check-input rounded-full h-4 w-4 border border-black bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            type="radio"
            name="gender"
            id="female"
            value="female"
            onChange={(e) => setGender(e.target.value)}
          />
          Female
        </div>
      </div>

      <p
        style={{
          color: '#FF5630',
          display: error ? 'block' : 'none',
        }}
      >
        Please enter a valid Name
      </p>
    </div>
  );
};
