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

export const ShowResevations = async (e) => {
  
  e.preventDefault();
  data = e.target.id.value;
  Cookies.set('tripRes_id', data);
  window.location.href = "http://localhost:3000/Reservation"
  return 0;
};


export const getAllResevations = async () => {
  
  const response = await APIEndpoint.get('/showReservationForTrip/'+Cookies.get('tripRes_id'), {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
  return response.data.bookedReservations;
};

export const getAllResevations1 = async () => {
    const response = await APIEndpoint.get('/showReservationForTrip/'+Cookies.get('tripRes_id'), {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data.cancelledReservations;
};



const ReservationLiset = () => {
    
    const [Reservations, setPlaces] = useState([]);
    useEffect(() => {
        const fetchPlaces = async () => {
            try {
                const placesData = await getAllResevations();
                setPlaces(placesData);
            } catch (error) {
                console.error('Error fetching places:', error);
            }
        };

        fetchPlaces();
    }, []);

    const [Reservations1, setPlaces1] = useState([]);
    useEffect(() => {
        const fetchPlaces = async () => {
            try {
                const placesData = await getAllResevations1();
                setPlaces1(placesData);
            } catch (error) {
                console.error('Error fetching places:', error);
            }
        };

        fetchPlaces();
    }, []);


    return (
      <div className='p'>
        <br></br>
        <h1 className="text-2xl font-bold text-center mb-4 text-black">Reservations</h1>
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
                      Travels Number
                  </th>
                  <th
                      className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Total price
                  </th>
                  <th
                      className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Reservation_date
                  </th>
                  <th
                      className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Payment_status
                  </th>
                  <th
                      className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Reservation_status
                  </th>
              </tr>
          </thead>
          <tbody>
                      {Reservations.map((Reservation) => (
                          <>
                          <tr>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div className="flex items-center">
                              <div className="ml-3">
                              <div className="flex-shrink-0 w-10 h-10">
                        <img className="w-full h-full rounded-full"
                            src={`http://localhost:8000/${Reservation.photo_path}`}
                            alt="" />
                    </div>
                              </div>
                          </div>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div className="flex items-center">
                              <div className="ml-3">
                                  <p className="text-gray-900 whitespace-no-wrap">
                                      {Reservation.user_name}
                                  </p>
                              </div>
                          </div>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap"> {Reservation.reserTravNum} </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap"> {Reservation.total} </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                          {Reservation.res_date}
                      </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                          {Reservation.payment_status}
                      </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <span
                          className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                          <span aria-hidden
                              className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                      <span className="relative">{Reservation.res_status}</span>
                      </span>
                  </td>
              </tr>
                          </>
                      ))}
          </tbody>
      </table>
      </div>
      </div>
      </div>
      <br></br>
        <h1 className="text-2xl font-bold text-center mb-4 text-black">Reservations</h1>
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
                      Travels Number
                  </th>
                  <th
                      className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Total price
                  </th>
                  <th
                      className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Reservation_date
                  </th>
                  <th
                      className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Payment_status
                  </th>
                  <th
                      className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Reservation_status
                  </th>
              </tr>
          </thead>
          <tbody>
                      {Reservations1.map((Reservation) => (
                          <>
                          <tr><td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div className="flex items-center">
                              <div className="ml-3">
                              <div className="flex-shrink-0 w-10 h-10">
                        <img className="w-full h-full rounded-full"
                            src={`http://localhost:8000/${Reservation.photo_path}`}
                            alt="" />
                    </div>
                              </div>
                          </div>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div className="flex items-center">
                              <div className="ml-3">
                                  <p className="text-gray-900 whitespace-no-wrap">
                                      {Reservation.user_name}
                                  </p>
                              </div>
                          </div>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap"> {Reservation.reserTravNum} </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap"> {Reservation.total} </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                          {Reservation.res_date}
                      </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                          {Reservation.payment_status}
                      </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <span
                          className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                          <span aria-hidden
                              className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                      <span className="relative">{Reservation.res_status}</span>
                      </span>
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

export default ReservationLiset;
