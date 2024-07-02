// import {addTripS} from '../../API/addTripS'
'use client'
import './local.css';
import { addTripS } from '../../API/addTripS';
import { getDurationCreate } from '../../API/addTripF';
import   AllPlaces   from '../../API/allPlaces'


export default function addtrips() {
  let tripElements = [];
  for (let i = 0 ; i < getDurationCreate(); i++) {
    tripElements.push(
      <div className="bg-gray-100 p-0 sm:p-12">
      <div className="mx-auto max-w-md px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl">
      <h1 className="duration-300 pb-8 origin-0 text-gray-500">Day {i+1}</h1>
        <div key={i}>
          <input type='number' id={`day${i+1}`} name={`day${i+1}`} className='hidden' defaultValue={i+1}></input>
          <div className="flex relative z-0 w-full mb-5">
          <AllPlaces name={`place_id1${i+1}`}></AllPlaces>
          <label  className="absolute duration-300 bottun-3  origin-0 text-gray-500">Enter First_place</label>
          </div>
          <div className="flex relative z-0 w-full mb-5">
          <input type="text" id={`description1${i+1}`} name={`description1${i+1}`} className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none outline-none ring-0 border-black border-gray-200 text-black"/>
          <label  className="absolute duration-300 top-3  origin-0 text-gray-500">Enter First_description</label>
          </div>
          <div className="flex relative z-0 w-full mb-5">
          <AllPlaces name={`place_id2${i+1}`}></AllPlaces>
          <label  className="absolute duration-300 top-3  origin-0 text-gray-500">Enter Second_place</label>
          </div>
          <div className="flex relative z-0 w-full mb-5">
          <input type="text" id={`description2${i+1}`} name={`description2${i+1}`} className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none outline-none ring-0 border-black border-gray-200 text-black"/>
          <label  className="absolute duration-300 top-3  origin-0 text-gray-500">Enter 
          Second_description</label>
          </div>
        </div>
        </div>
      </div>
    );
  }
  return (
    <div className='pp'>
      
        <form onSubmit={addTripS}>
          {tripElements}
          <button id="button" type="submit" className="max-w-md w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-pink-500 hover:bg-pink-600 hover:shadow-lg focus:outline-none"> Create Trip </button>
        </form>
      
    </div>
  );
}
