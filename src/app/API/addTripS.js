"use client"
import axios from 'axios';
import { getDurationCreate } from './addTripF';
import Cookies from 'js-cookie';
let token = Cookies.get("access_token");

export const addTripS = async (e) => {

  e.preventDefault();
  let $id = Cookies.get('trip_id_create');

  let data1 = [];
  for (let i = 0 ; i < getDurationCreate(); i++) {
    let ko = {
        "day_num" :  e.target[`day${i + 1}`].value,
        "places" :[
            {
                "place_id" : e.target[`place_id1${i+1}`].value,
                "description" : e.target[`description1${i+1}`].value,
            },
            {
                "place_id" : e.target[`place_id2${i+1}`].value,
                "description" : e.target[`description2${i+1}`].value,
            }
        ]
    }
    data1.push(ko);
  }
  let data2 = {
    "trip_id" : $id,
    "itineraries" : data1
  }



  try {
    const response = await axios.post('http://127.0.0.1:8000/api/SCreateTrips', data2,{headers: {
        'Authorization': `Bearer ${token}`,
      },});
    console.log(response.data);
    window.location.href =  "http://localhost:3000/dashbord/Activetrip" ;
  } catch (error) {
    console.error(error); 
  }

}




