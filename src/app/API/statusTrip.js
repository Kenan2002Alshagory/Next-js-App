"use client"
import axios from 'axios';
import Cookies from 'js-cookie';
let token = Cookies.get("access_token");


export const Accept = async (e) => {

    try {
      e.preventDefault();

      const data = {
        // Add your data properties here
        'id':e.target.id.value,
      };

    const response = await axios.post(`http://127.0.0.1:8000/api/trips/${data['id']}/approve`,data, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    window.location.href = "http://localhost:3000/dashbord/Pendingtrip";
  } catch (error) {
    console.error(error); // Handle errors here
  }

};


export const Reject = async (e) => {

  try {
    e.preventDefault();
const data = {
  // Add your data properties here
  'id':e.target.id.value,
};
console.log(data)
  const response = await axios.post(`http://127.0.0.1:8000/api/trips/${data['id']}/reject`,data, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
  console.log(response.data);
  window.location.href = "http://localhost:3000/dashbord/Pendingtrip";
} catch (error) {
  console.error(error); // Handle errors here
}

};


