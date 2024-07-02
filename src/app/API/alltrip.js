/* eslint-disable @next/next/no-img-element */
"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';
import './allPlaces.css';
import {getDetail} from "./detailsForTrip";
import Cookies from 'js-cookie';
let token = Cookies.get("access_token");

const APIEndpoint = axios.create({
  baseURL: 'http://localhost:8000/api', // Adjust the URL as needed
});
export const getAllTrips = async () => {
    const response = await APIEndpoint.get('/trips/active', {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data['trips'];
};



const TripLiset = () => {
    
    const [trips, setPlaces] = useState([]);
    useEffect(() => {
        const fetchPlaces = async () => {
            try {
                const placesData = await getAllTrips();
                setPlaces(placesData);
            } catch (error) {
                console.error('Error fetching places:', error);
            }
        };

        fetchPlaces();
    }, []);
    const walletsLength = trips.length;

    if(walletsLength == 0){
      return (  
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h2 className="bg-white text-gray-900 text-3xl text-center title-font font-medium mb-5">
              There are no trips 
            </h2>
          </div>
            );
    }

    return (
  <div className="flex pp">
    <div className="mx-auto max-w-screen-xl px-4 w-full">
      <div className="grid w-full sm:grid-cols-2 xl:grid-cols-3 gap-6">

                {trips.map((trip) => (
                    <>
                        
      <div className="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
        
        <div className="h-auto overflow-hidden">
          <div className="h-44 overflow-hidden relative">
            <img src={`http://localhost:8000/${trip.trip_image}`} alt=""/>
          </div>
        </div>
        <div className="bg-white py-4 px-3 ">
          <div className="flex justify-center  items-center m-2">
            <p className="text-xs text-gray-400 ">Trip_name: {trip.trip_name}</p>
          </div>
          <div className="flex justify-between items-center m-2">
            <p className="text-xs text-gray-400">From: {trip.from}</p>
            <p className="text-xs text-gray-400">Destinayion: {trip.destination}</p>
          </div>
          <div className="flex justify-between items-center m-2">
            <p className="text-xs text-gray-400">Start_date: {trip.start_date}</p>
            <p className="text-xs text-gray-400">End_date: {trip.end_date}</p>
          </div>
        </div>
        <div className="flex justify-center  items-center mb-2">        
            <form onSubmit={getDetail}>
                <input type="number" id="id" className="hidden" defaultValue={trip.id} required>
                </input>
                <button type="submit" className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded">Show details</button>
            </form> 
        </div>
      </div>
                    </>
                ))}
      </div>
    </div>
  </div>
    );
};

export default TripLiset;
