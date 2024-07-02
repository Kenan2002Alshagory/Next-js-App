import axios from 'axios';
import Cookies from 'js-cookie';
let token = Cookies.get("access_token");

export const addDay = async (e) => {
  e.preventDefault();
  let data = Cookies.get('tripIdAdd');
  let data2 = Cookies.get('tripDurationAdd');
  let integerData2 = parseInt(data2, 10); // Convert to integer using base 10
  integerData2 += 1; // Add 1 to the integer value
  let data3 = {
    "day_num" :  integerData2,
    "places" :[
        {
            "place_id" : e.target[`place_id1`].value,
            "description" : e.target[`description1`].value,
        },
        {
            "place_id" : e.target[`place_id2`].value,
            "description" : e.target[`description2`].value,
        }
    ]
};
  let data4 = {
    'itineraries' : [data3],
  }
  console.log(data4)
  try{
  const response = await axios.post(`http://localhost:8000/api/trips/${data}/itinerary`,data4,{
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  console.log(response);
  window.location.href ="http://localhost:3000/dashbord/MyTrips"
}catch(error){
  console.error(error); 
}

}