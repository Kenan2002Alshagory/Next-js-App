"use client"
import axios from 'axios';
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';
let token = Cookies.get("access_token");
export const handleSubmit = async (e) => {

  e.preventDefault();

  const data = {
    'id':e.target.id.value,
  };
  
  try {
    const response = await axios.delete('http://127.0.0.1:8000/api/places/'+data['id'],{
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },});
      if(response.data.message == 'you cant delete this place'){
        Swal.fire({
          title: 'can not delete place',
          text: 'you cant delete this place',
          icon: 'warning',
          confirmButtonText: 'Close'
        });
      }else{
      console.log(response.data)
      window.location.reload();
    }
  } catch (error) {
    console.error(error); // Handle errors here
  }

};


