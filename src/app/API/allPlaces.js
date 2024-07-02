/* eslint-disable @next/next/no-img-element */
"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';
import './allPlaces.css';
import {getDetail} from "./detailsForPlace";
import Cookies from 'js-cookie';
let token = Cookies.get("access_token");

const APIEndpoint = axios.create({
  baseURL: 'http://localhost:8000/api', // Adjust the URL as needed
});
export const getAllPlaces = async () => {
    const response = await APIEndpoint.get('/placesForCreate',{
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },});
    return response.data['places'];
};



const AllPlaces = (props) => {
    
    const [places, setPlaces] = useState([]);
    useEffect(() => {
        const fetchPlaces = async () => {
            try {
                const placesData = await getAllPlaces();
                setPlaces(placesData);
            } catch (error) {
                console.error('Error fetching places:', error);
            }
        };

        fetchPlaces();
    }, []);
    
    

    return (
            <>
              <select name={props.name} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                {places.map((place) => (
                  <option key={place.id} value={place.id}>{place.name}</option>
                ))}
              </select>
            </>     
    );

};

export default AllPlaces;
