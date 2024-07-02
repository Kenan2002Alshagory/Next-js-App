"use client"
import axios from 'axios';
import Cookies from 'js-cookie';
let token = Cookies.get("access_token");

export const logout = async () => {

    try {
    const response = await axios.get('http://127.0.0.1:8000/api/logout', {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    console.log(response.data);
    Cookies.remove('access_token');
    window.location.href = "http://localhost:3000/login"
  } catch (error) {
    console.error(error); // Handle errors here
  }

};


