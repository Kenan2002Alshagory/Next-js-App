"use client"
import { useEffect, useState  } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
let token = Cookies.get("access_token");
import Swal from 'sweetalert2';


export const getDetailDay = async (e) => {
  
  e.preventDefault();
  const data = {
    'id':e.target.id.value,
    'day' : e.target.day.value
  };
  Cookies.set('trip_id2', data['id']);
  Cookies.set('trip_day', data['day']);
  try {
    window.location.href = "http://localhost:3000/detailDay";
    return 0;
    } catch (error) {
    console.error(error); // Handle errors here
  }
};


let $value1 = Cookies.get('trip_id2');
let $value2 = Cookies.get('trip_day');

const getDetail = async () => {
  try {
    const response = await axios.get(`http://127.0.0.1:8000/api/detailForDay/${$value1}/${$value2}`,{
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data['detail'];
    } catch (error) {
    console.error(error); // Handle errors here
  }
};


const deleteDay = async () => {
  try{
      const response = await axios.delete(`http://localhost:8000/api/trips/${$value1}/itinerary/${$value2}`,{
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      if(response.data.message == 'this trip is started you cant delete Itinerary'){
        Swal.fire({
          title: 'can not delete day',
          text: 'you cant delete day from trip because it started ',
          icon: 'warning',
          confirmButtonText: 'Close'
        });
      }else{
      console.log(response.data)
      window.location.href = 'http://localhost:3000/detailTrip'
    }
  } 
  catch(error){
    console.log(error);
  }
}


const Day = () => {
  
  const [days, setDay] = useState([]);
  useEffect(() => {
      const fetchDay = async () => {
          try {
              const DayData = await getDetail();
              setDay(DayData);
          } catch (error) {
              console.error('Error fetching Trip:', error);
          }
      };
      fetchDay();
  }, []);


  return (
    
      <div className="flex pp">
      <div className="mx-auto max-w-screen-xl px-4 w-full">
        <div className="grid w-full xl:grid-cols-2 gap-6">
  
                  {days.map((day) => (
                      <>
        <div className="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
          
          <div className="h-auto overflow-hidden">
            <div className="h-44 overflow-hidden relative">
              <img src={`http://localhost:8000/${day.place_image}`} alt=""/>
            </div>
          </div>
          <div className="bg-white py-4 px-3 ">
            <div className="flex justify-center  items-center m-2">
            <p className="text-xs text-gray-400 ">Place_name: {day.place_name}</p>
            </div>
            <div className="flex justify-center items-center m-2">
            <p className="text-xs text-gray-400">Place_Type: {day.place_type}</p>
            </div>
            <div className="flex justify-center items-center m-2">
            <p className="text-xs text-gray-400">Place_description: {day.description}</p>
            </div>
          </div>
        </div>
                      </>
                  ))}
        
          <button onClick={deleteDay} type="submit" className="m-3 text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded">
            Delete day 
          </button>
        
        </div>
      </div>
    </div>
  );
};

export default Day;