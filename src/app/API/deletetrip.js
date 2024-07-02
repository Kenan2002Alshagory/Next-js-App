"use client"
import axios from 'axios';
import Cookies from 'js-cookie';
let token = Cookies.get("access_token");
export const deletetrip = async (e) => {

  e.preventDefault();

  const data = {
    'id':e.target.id.value,
  };
  
  try {
    const response = await axios.delete('http://127.0.0.1:8000/api/trips/'+data['id'],{
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },});
      window.location.reload();
    } catch (error) {
    console.error(error); // Handle errors here
  }

};


