/* eslint-disable @next/next/no-img-element */
"use client"
import { useEffect, useState } from 'react';import { Link } from 'react-router-dom';
import axios from 'axios';
import './allPlaces.css';
import {getDetail} from "./detailsForTrip";
import {ShowResevations} from './resrvationForTrip';
import {ShowReviews} from './reviewForTrip';
import {deletetrip} from './deletetrip';
import Cookies from 'js-cookie';
let token = Cookies.get("access_token");

const APIEndpoint = axios.create({
  baseURL: 'http://localhost:8000/api', // Adjust the URL as needed
});
export const getAllTrips = async () => {
    const response = await APIEndpoint.get('/getMyTrip', {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data.MyNewTrips;
};

export const getAllTrips2 = async () => {
    const response = await APIEndpoint.get('/getMyTrip', {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data.MyOldTrips;
};

const EditEdit = async(e)=>{
  e.preventDefault();
  let data = e.target.id.value;
  window.location.href = `http://localhost:3000/dashbord/MyTrips/editMyTrip/${data}`
}

const addDay = async(e)=>{
  e.preventDefault();
  let data = e.target.id.value;
  let data2 = e.target.duration.value;
  Cookies.set('tripIdAdd',data);
  Cookies.set('tripDurationAdd',data2);
  window.location.href = `http://localhost:3000/addDay`
}

const MyTrips = () => {
    
    const [tripsNew, setPlaces] = useState([]);
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

    const [tripsOld, setPlaces2] = useState([]);
    useEffect(() => {
        const fetchPlaces = async () => {
            try {
                const placesData = await getAllTrips2();
                setPlaces2(placesData);
            } catch (error) {
                console.error('Error fetching places:', error);
            }
        };

        fetchPlaces();
    }, []);
    

    return (
  <div className='pp'>
  <br></br>
    <h1 className="text-2xl font-bold text-center mb-4 text-black">Your New Trips</h1>
    <br></br>
  <div className="flex ">
    <div className="mx-auto max-w-screen-xl px-4 w-full">
      <div className="grid w-full sm:grid-cols-2 xl:grid-cols-3 gap-6">
      
                {tripsNew.map((trip) => (
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
        <div className='flex justify-around'>

        <div className="flex justify-center  items-center mb-2">        
            <form onSubmit={ShowResevations}>
                <input type="number" id="id" className="hidden" defaultValue={trip.id} required>
                </input>
                <button type="submit" className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded">Show reservations</button>
            </form> 
        </div>
        <div className="flex justify-center  items-center mb-2">        
            <form onSubmit={addDay}>
                <input type="number" id="id" className="hidden" defaultValue={trip.id} required>
                </input>
                <input type="number" id="duration" className="hidden" defaultValue={trip.duration} required>
                </input>
                <button type="submit" className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded">Add Day</button>
            </form> 
        </div>
        </div>
<div className='flex justify-around'>
  
<div className="flex justify-center  items-center mb-2">        
            <form onSubmit={getDetail}>
                <input type="number" id="id" className="hidden" defaultValue={trip.id} required>
                </input>
                <button type="submit" className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded">Show details</button>
            </form> 
        </div>
        
        <div className="flex justify-center  items-center mb-2">        
            <form onSubmit={deletetrip}>
                <input type="number" id="id" className="hidden" defaultValue={trip.id} required>
                </input>
                <button type="submit" className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded">Delete trip</button>
            </form> 
        </div>
        

</div>



      </div>
                    </>
                ))}
      </div>
    </div>
  </div>
  <br></br>
  <h1 className="text-2xl font-bold text-center mb-4 text-black">Your Old Trips</h1>
  <br></br>
  <div className="flex">
  <div className="mx-auto max-w-screen-xl px-4 w-full">
    <div className="grid w-full sm:grid-cols-2 xl:grid-cols-3 gap-6">
    
    {tripsOld.map((trip) => (
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
            <form onSubmit={ShowResevations}>
                <input type="number" id="id" className="hidden" defaultValue={trip.id} required>
                </input>
                <button type="submit" className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded">Show reservations</button>
            </form> 
        </div>
        <div className='flex justify-around'>
        <div className="flex justify-center  items-center mb-2">        
            <form onSubmit={getDetail}>
                <input type="number" id="id" className="hidden" defaultValue={trip.id} required>
                </input>
                <button type="submit" className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded">Show details</button>
            </form> 
        </div>
      
        <div className="flex justify-center  items-center mb-2">        
            <form onSubmit={ShowReviews}>
                <input type="number" id="id" className="hidden" defaultValue={trip.id} required>
                </input>
                <button type="submit" className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded">Show reviws</button>
            </form> 
        </div>
        </div>
      </div>
                    </>
                ))}
    </div>
  </div>
</div>
</div>
    );
};

export default MyTrips;
