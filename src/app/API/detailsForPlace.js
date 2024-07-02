/* eslint-disable @next/next/no-img-element */
"use client"
import { useEffect, useState  } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
let token = Cookies.get("access_token");

export const getDetail = async (e) => {

  e.preventDefault();
  const data = {
    // Add your data properties here
    'id':e.target.id.value,
  };
  Cookies.set('place_id', data['id']);
  try {
    window.location.href = "http://localhost:3000/detailPlace";
    return 0;
    } catch (error) {
    console.error(error); // Handle errors here
  }
};

let data2 = Cookies.get("place_id");

export const getDetail2 = async () => {
  try {
    const response = await axios.get(`http://127.0.0.1:8000/api/placedetail/${data2}/description`
    ,{
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },});
    console.log(response.data['data'])
    return response.data['data'];
    } catch (error) {
    console.error(error); // Handle errors here
  }
};





export const changeName = async (e) => {

  e.preventDefault();

  const data = {
      'id' : e.target.id.value,
      'name' : e.target.name.value,
  };
  try {
      const response = await axios.post('http://127.0.0.1:8000/api/places/'+data['id'], data,{
          headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
          },
      });
      window.location.href = "http://localhost:3000/detailPlace";
  } catch (error) {
    console.error(error); // Handle errors here
  }
};


export const changeRating = async (e) => {

  e.preventDefault();

  const data = {
      'id' : e.target.id.value,
      'rating' : e.target.rating.value,
  };
  try {
      const response = await axios.post('http://127.0.0.1:8000/api/places/'+data['id'], data,{
          headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
          },
      });
      window.location.href = "http://localhost:3000/detailPlace";
  } catch (error) {
    console.error(error); // Handle errors here
  }
};


export const changeDescription = async (e) => {

  e.preventDefault();

  const data = {
      'id' : e.target.id.value,
      'description' : e.target.description.value,
  };
  try {
      const response = await axios.post('http://127.0.0.1:8000/api/places/'+data['id'], data,{
          headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
          },
      });
      window.location.href = "http://localhost:3000/detailPlace";
  } catch (error) {
    console.error(error); // Handle errors here
  }
};


export const changeLocation = async (e) => {

  e.preventDefault();
  
  const data = {
    'id' : e.target.id.value,
    'location' : e.target.location.value,
  };

  try {
      const response = await axios.post('http://127.0.0.1:8000/api/places/'+data['id'], data,{
          headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
          },
      });
      window.location.href = "http://localhost:3000/detailPlace";
  } catch (error) {
    console.error(error); // Handle errors here
  }
};






const Place = () => {
  
  const [places, setPlace] = useState([]);
  useEffect(() => {
      const fetchPlace = async () => {
          try {
              const PlaceData = await getDetail2();
              setPlace(PlaceData);
          } catch (error) {
              console.error('Error fetching Place:', error);
          }
      };
      fetchPlace();
  }, []);


  const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const [isModalOpen1, setIsModalOpen1] = useState(false);

    const toggleModal1 = () => {
        setIsModalOpen1(!isModalOpen1);
    };
    
    const [isModalOpen2, setIsModalOpen2] = useState(false);

    const toggleModal2 = () => {
        setIsModalOpen2(!isModalOpen2);
    };

    const [isModalOpen3, setIsModalOpen3] = useState(false);

    const toggleModal3 = () => {
        setIsModalOpen3(!isModalOpen3);
    };
  

  return (
    <div className='p'>
      
    <section className="text-gray-700 body-font overflow-hidden bg-white ">
    {places.map((place) => (
                    <>
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img alt="ecommerce" className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src={`http://localhost:8000/${place.photo_url}`} />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className="text-gray-900 text-3xl title-font font-medium m-5">Name of place : {place.name}</h1>

                <button onClick={toggleModal} type="submit" className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded">Edit Name</button>
            
            <h1 className="text-gray-900 text-3xl title-font font-medium m-5">Location : {place.location}
            </h1>
            
                <button onClick={toggleModal1} type="submit" className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded">Edit Location</button>
            
                <p className="text-gray-600 ml-3 m-5">Rating : {place.rating}</p>

            
                <button onClick={toggleModal2} type="submit" className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded">Edit Rating</button>

            <p className="leading-relaxed m-5">Description : {place.description}</p>
            
                <button onClick={toggleModal3} type="submit" className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded">Edit Description</button>

          </div>
        </div>
      </div>

      
      {isModalOpen && (
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
            <div className="bg-white p-4 rounded-lg shadow-lg">
            <form onSubmit={changeName}>
                <div className="mb-4">
                <input type="number" id="id" name='id' className="hidden" defaultValue={place.id} required>
                </input>
                </div>
                <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Enter New Name</label>
                <input type="text" id="name" name="name" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500  text-black"  placeholder="Enter your new name" required>
                </input>
                </div>
                <button  type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Change Name</button>
            </form>
            <br></br>
            <button  onClick={toggleModal} className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Close</button>
            </div>
            </div>
        )}
        {isModalOpen1 && (
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
            <div className="bg-white p-4 rounded-lg shadow-lg">
            <form onSubmit={changeLocation}>
                <div className="mb-4">
                <input type="number" id="id" name='id' className="hidden" defaultValue={place.id} required>
                </input>
                </div>
                <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Enter New Location</label>
                <input type="text" id="location" name="location" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500  text-black"  placeholder="Enter your new location" required>
                </input>
                </div>
                <button  type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Change Location</button>
            </form>
            <br></br>
            <button  onClick={toggleModal1} className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Close</button>
            </div>
            </div>
        )}
        {isModalOpen2 && (
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
            <div className="bg-white p-4 rounded-lg shadow-lg">
            <form onSubmit={changeRating}>
                <div className="mb-4">
                <input type="number" id="id" name='id' className="hidden" defaultValue={place.id} required>
                </input>
                </div>
                <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Enter New Rating</label>
                <input type="number" id="rating" name="rating" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500  text-black"  placeholder="Enter your new rating" required>
                </input>
                </div>
                <button  type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Change Rating</button>
            </form>
            <br></br>
            <button  onClick={toggleModal2} className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Close</button>
            </div>
            </div>
        )}
        {isModalOpen3 && (
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
            <div className="bg-white p-4 rounded-lg shadow-lg">
            <form onSubmit={changeDescription}>
                <div className="mb-4">
                <input type="number" id="id" name='id' className="hidden" defaultValue={place.id} required>
                </input>
                </div>
                <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Enter New Description</label>
                <input type="text" id="description" name="description" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500  text-black"  placeholder="Enter your new description" required>
                </input>
                </div>
                <button  type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Change Description</button>
            </form>
            <br></br>
            <button  onClick={toggleModal3} className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Close</button>
            </div>
            </div>
        )}
      </>
    ))}
    </section>
    </div>
  );
};

export default Place;