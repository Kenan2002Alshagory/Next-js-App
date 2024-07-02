/* eslint-disable @next/next/no-img-element */
"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';
import './allPlaces.css';
import {getDetail} from "./detailsForPlace";
import Cookies from 'js-cookie';
import {handleSubmit} from './deleteplace';
let token = Cookies.get("access_token");

const APIEndpoint = axios.create({
  baseURL: 'http://localhost:8000/api', // Adjust the URL as needed
});
export const getAllPlaces = async () => {
    const response = await APIEndpoint.get('/hotels',{
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },});
    return response.data['data'];
};



const PlaceList = () => {
    
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
    
    const walletsLength = places.length;

    

    if(walletsLength != 0){
    return (
        <div className='p'>
                <section className="text-gray-600 body-font">
                <div className="container px-5 py-5 mx-auto">
                <div className="flex flex-wrap -m-4 pp">
                {places.map((place) => (
                    <>
                        <div className="p-4 md:w-1/3" >
                        <div className="h-200 border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                        <div className="w-full">
                            <div className="w-full flex p-2">
                                <div className="p-2 ">
                                <img 
                                    src={`http://localhost:8000/${place.photo_url}`} alt="author" 
                                    className="w-10 h-10 rounded-full overflow-hidden"/>
                                </div>
                                <div className="pl-2 pt-2 ">
                                <p className="font-bold">{place.name}</p>
                                <p className="text-xs">{place.type}</p>
                                </div>
                            </div>
                        </div>
                        <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={`http://localhost:8000/${place.photo_url}`} alt="blog cover"/>
                        <div className="p-4 flex justify-around">
                            <div>        
                                <h4 className="title-font text-lg font-medium text-green-400">Location : {place.location}</h4>
                            </div>
                            <div>
                                <h4 className="title-font text-lg font-medium text-green-400 ">Rating : {place.rating}</h4>
                            </div>
                        </div>
                        <div className="pb-4 flex justify-around">
                            <div>        
                                <form onSubmit={getDetail}>
                                    <input type="number" id="id" className="hidden" defaultValue={place.id} required>
                                    </input>
                                    <button type="submit" className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded">Show details</button>
                                </form> 
                            </div>
                            <div>        
                                <form onSubmit={handleSubmit}>
                                    <input type="number" id="id" className="hidden" defaultValue={place.id} required>
                                    </input>
                                    <button type="submit" className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded">Delete Place</button>
                                </form> 
                            </div>
                        </div>
                        </div>
                        </div>
                    </>
                ))}
                </div>
                </div>
                </section>
        </div>
    );
}

    if(walletsLength == 0){
        return (  
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <h2 className="bg-white text-gray-900 text-3xl text-center title-font font-medium mb-5">
                There are no hotels 
              </h2>
            </div>
              );
      }
};

export default PlaceList;
