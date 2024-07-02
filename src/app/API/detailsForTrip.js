/* eslint-disable @next/next/no-img-element */
"use client"
import { useEffect, useState  } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
let token = Cookies.get("access_token");
import {getDetailDay} from "./detailDay.js"

export const getDetail = async (e) => {

  e.preventDefault();
  const data = {
    // Add your data properties here
    'id':e.target.id.value,
  };
  Cookies.set('trip_id', data['id']);
  try {
    window.location.href = "http://localhost:3000/detailTrip";
    return 0;
    } catch (error) {
    console.error(error); // Handle errors here
  }
};

let data2 = Cookies.get("trip_id");

const getDetail2 = async () => {
  try {
    const response = await axios.get(`http://127.0.0.1:8000/api/tripdetail/${data2}/description`
    ,{
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data['data'];
    } catch (error) {
    console.error(error); // Handle errors here
  }
};


const Trip = () => {
  
  const [trips, setPlace] = useState([]);
  useEffect(() => {
      const fetchPlace = async () => {
          try {
              const PlaceData = await getDetail2();
              setPlace(PlaceData);
          } catch (error) {
              console.error('Error fetching Trip:', error);
          }
      };
      fetchPlace();
  }, []);

  const tripDuration = trips.length > 0 ? trips[0].duration : 0;
  const tripid = trips.length > 0 ? trips[0].id : 0;
  let tripElements = [];
  for (let i = 0 ; i < tripDuration; i++) {
    tripElements.push(
        <form onSubmit={getDetailDay} className="inline" key={i}>
          <input type='number' id="id" name='id' className='hidden' defaultValue={tripid}></input>
          <input type='number' id="day" name='day' className='hidden' defaultValue={i+1}></input>
          <button type="submit" className="m-3 text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded">Day {i+1}</button>
        </form>
    );
  }

  return (
    <div className='p'>
    <section className="text-gray-700 body-font overflow-hidden bg-white ">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
        {trips.map((trip) => (
                    <>
          <img alt="ecommerce" className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src={`http://localhost:8000/${trip.trip_image}`}/>
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-5">Name of trip : {trip.trip_name}</h1>
            <div className="mb-2">
              <h3 className="text-gray-900 text-3xl title-font font-medium mb-5">From : {trip.from}</h3>
              <h3 className="text-gray-900 text-3xl title-font font-medium mb-5">Destination : {trip.destination}</h3>
            </div>
            <div className="flex mb-5">
                <span className="text-gray-600 ml-3">Start_Date : {trip.start_date}</span>
                <span className="text-gray-600 ml-3">End_Date : {trip.end_date}</span>
            </div>
            <p className="leading-relaxed">Duration : {trip.duration}</p>
            <p className="leading-relaxed">Guide_name : {trip.guide_name}</p>
            <p className="leading-relaxed">Travelers_Number : {trip.travelers_num}</p>
            <p className="leading-relaxed">Trip_price : {trip.trip_price}</p>
            <p className="leading-relaxed">Trip_type : {trip.trip_type}</p>
            <p className="leading-relaxed">Trip_status : {trip.trip_status}</p>
            <p className="leading-relaxed">Status_time : {trip.status_time}</p>
            <p className="leading-relaxed">Trip_description : {trip.trip_description}</p>
            
            {tripElements}
          </div>
          </>
        ))}
        </div>
      </div>
    </section>
    </div>
  );
};

export default Trip;