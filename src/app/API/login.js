"use client"
import axios from 'axios';
import Cookies from 'js-cookie';
import Swal from 'sweetalert2';

let value ;
let value1 ;
export const handleSubmit = async (e) => {

  e.preventDefault();

  const data = {
    // Add your data properties here
    'email' : e.target.email.value,
    'password' : e.target.password.value,

  };
  try {
    const response = await axios.post('http://127.0.0.1:8000/api/login', data);
    value = [response.data];

    if(response.data.role!='admin'){
      Swal.fire({
        title: 'can not login',
        text: 'you must be admin for login',
      });
    }else{
    value1= value[0]['token'];
    console.log(value1);
    Cookies.set('access_token', value1);
    window.location.href = "http://localhost:3000/dashbord/user" // Handle successful 
  }
  } catch (error) {
    console.error(error); // Handle errors here
  }

};


