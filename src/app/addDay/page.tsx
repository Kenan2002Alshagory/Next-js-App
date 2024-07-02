/* eslint-disable @next/next/no-img-element */
'use client'
import   AllPlaces   from '../API/allPlaces';
import { addDay } from '../API/addDay';
export default function addday() {
  return (
    <div>
      <div className="bg-gray-100 p-0 sm:p-12">
      <div className="mx-auto max-w-md px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl">
      <form onSubmit={addDay}>
        <div>
          <div className="flex relative z-0 w-full mb-5">
          <AllPlaces name={`place_id1`}></AllPlaces>
          </div>
          <div className="flex relative z-0 w-full mb-5">
          <input type="text" id={`description1`} name={`description1`} className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none outline-none ring-0 border-black border-gray-200 text-black"/>
          <label  className="absolute duration-300 top-3  origin-0 text-gray-500">Enter First_description</label>
          </div>
          <div className="flex relative z-0 w-full mb-5">
          <AllPlaces name={`place_id2`}></AllPlaces>
          </div>
          <div className="flex relative z-0 w-full mb-5">
          <input type="text" id={`description2`} name={`description2`} className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none outline-none ring-0 border-black border-gray-200 text-black"/>
          <label  className="absolute duration-300 top-3  origin-0 text-gray-500">Enter 
          Second_description</label>
          </div>
        </div>
        
        <button id="button" type="submit" className="max-w-md w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-pink-500 hover:bg-pink-600 hover:shadow-lg focus:outline-none"> Add day to Trip </button>
      </form>
        </div>
      </div>
    </div>
  )
}
