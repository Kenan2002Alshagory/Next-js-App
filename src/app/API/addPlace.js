"use client"
import axios from 'axios';
import Cookies from 'js-cookie';
let token = Cookies.get("access_token");


export const addPlace = async (e) => {

  e.preventDefault();

  // Create a FormData object
  const formData = new FormData();
  // Append the file to formData under the 'photo_url' key
  formData.append('photo_url', e.target.photo.files[0]);
  // Append other form data
  formData.append('name', e.target.name.value);
  formData.append('type', e.target.type.value);
  formData.append('location', e.target.location.value);
  formData.append('description', e.target.description.value);
  formData.append('rating', e.target.rating.value);

  try {
    const response = await axios.post('http://127.0.0.1:8000/api/places', formData,{
      headers: {
        'Authorization': `Bearer ${token}`,
      },});
    console.log(response.data);
    window.location.href = "http://localhost:3000/dashbord/addplace" ;
  } catch (error) {
    console.error(error); 
  }

};


