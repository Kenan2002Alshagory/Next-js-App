"use client"
import Swal from 'sweetalert2';
import axios from 'axios';

let value;
export const handleSubmit = async (e) => {

  e.preventDefault();

  const data = {
    // Add your data properties here
    'id':e.target.id.value,
  };
  
  try {
    const response = await axios.delete('http://127.0.0.1:8000/api/deleteUser/'+data['id']);
    if(response.data.message=='you cant delete this user'){
      Swal.fire({
        title: 'can not delete user',
        text: 'you cant delete this user',
        icon: 'warning',
        confirmButtonText: 'Close'
      });
    }else{
    value = [response.data];
    console.log(value);
    window.location.reload();
    }
  } catch (error) {
    console.error(error); // Handle errors here
  }

};


