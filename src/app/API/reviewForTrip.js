/* eslint-disable @next/next/no-img-element */
"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';
import './allPlaces.css';
import Cookies from 'js-cookie';
let token = Cookies.get("access_token");

const APIEndpoint = axios.create({
  baseURL: 'http://localhost:8000/api', // Adjust the URL as needed
});

let data;

export const ShowReviews = async (e) => {
  
  e.preventDefault();
  data = e.target.id.value;
  Cookies.set('tripRev_id', data);
  window.location.href = "http://localhost:3000/Review"
  return 0;
};


export const getAllReviews = async () => {
  
  const response = await APIEndpoint.get('/trips/'+Cookies.get('tripRev_id')+'/reviews', {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
  return response.data.reviews;
};



const ReviewLiset = () => {
    
    const [Reviews, setPlaces] = useState([]);
    useEffect(() => {
        const fetchPlaces = async () => {
            try {
                const placesData = await getAllReviews();
                setPlaces(placesData);
            } catch (error) {
                console.error('Error fetching places:', error);
            }
        };

        fetchPlaces();
    }, []);

    
    return (
      <div className='p'>
        <br></br>
        <h1 className="text-2xl font-bold text-center mb-4 text-black">Reviews</h1>
        <br></br>
      <div className="bg-white p-8 rounded-md w-full">
      <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto pp">
      <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
      <table className="min-w-full leading-normal">
          <thead>
              <tr>
              <th
                      className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Photo
                  </th>
                  <th
                      className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      UserName
                  </th>
                  <th
                      className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Ratig trip
                  </th>
                  <th
                      className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Comment trip
                  </th>
              </tr>
          </thead>
          <tbody>
                      {Reviews.map((Review) => (
                          <>
                          <tr>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div className="flex items-center">
                              <div className="ml-3">
                              <div className="flex-shrink-0 w-10 h-10">
                        <img className="w-full h-full rounded-full"
                            src={`http://localhost:8000/${Review.photo_path}`}
                            alt="" />
                    </div>
                              </div>
                          </div>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div className="flex items-center">
                              <div className="ml-3">
                                  <p className="text-gray-900 whitespace-no-wrap">
                                      {Review.username}
                                  </p>
                              </div>
                          </div>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap"> {Review.rating} </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap"> {Review.comment} </p>
                  </td>
              </tr>
                          </>
                      ))}
          </tbody>
      </table>
      </div>
      </div>
      </div>
      </div>
    );
};

export default ReviewLiset;
