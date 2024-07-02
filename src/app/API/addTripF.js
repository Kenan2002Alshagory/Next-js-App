"use client"
import axios from 'axios';
import Cookies from 'js-cookie';
let token = Cookies.get("access_token");

export const addTripF = async (e) => {

  e.preventDefault();

  const formData = new FormData();
  formData.append("trip_name" , e.target.trip_name.value);
  formData.append("trip_type" , e.target.trip_type.value);
  formData.append("start_date" , e.target.start_date.value);
  formData.append("end_date" , e.target.end_date.value);
  formData.append("trip_description" , e.target.trip_description.value);
  formData.append("from" , e.target.from.value);
  formData.append("destination" , e.target.destination.value);
  formData.append("duration" , e.target.duration.value);
  formData.append("guide_name" , e.target.guide_name.value);
  formData.append("travelers_num" , e.target.travelers_num.value);
  formData.append( "trip_price" , e.target.trip_price.value);
  formData.append("trip_image" , e.target.trip_image.files[0]);

  try {
    const response = await axios.post('http://127.0.0.1:8000/api/FCreateTrips', formData,{
      headers: {
        'Authorization': `Bearer ${token}`,
      },});
    console.log(response.data);
    Cookies.set('trip_id_create',response.data.trip_id);
    Cookies.set('trip_duration_create',response.data.duration);
    window.location.href = "http://localhost:3000/dashbord/addTripS" ;
  } catch (error) {
    console.error(error); 
  }

}

export const getDurationCreate = () => {
  return Cookies.get('trip_duration_create');
};





