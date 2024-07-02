import {addPlace} from '../../API/addPlace'
import './local.css'



export default function addplace() {
  return (
    <div className="div">
      
<div className="min-h-screen bg-gray-100 p-0 sm:p-12">
  <div className="mx-auto max-w-md px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl">
    <h1 className="text-2xl font-bold mb-8 text-gray-500">Form for create place</h1>
    <form onSubmit={addPlace} >
    <div className="flex relative z-0 w-full mb-5">
        <input
          type="file"
          name="photo"
          id="photo"
          required
          className="w-full mt-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        />
        <label  className="absolute duration-300 top-3  origin-0 text-gray-500">Enter Photo</label>
      </div>
      <div className="relative z-0 w-full mb-5">
        <input
          type="text"
          name="name"
          id="name"
          required
          className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none outline-none ring-0 border-black border-gray-200 text-black"
        />
        <label  className="absolute duration-300 top-3  origin-0 text-gray-500">Enter name</label>
      </div>

      <div className="relative z-0 w-full mb-5">
        <input
          type="text"
          name="location"
          id="location"
          required
          className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none outline-none ring-0 border-black border-gray-200 text-black"
        />
        <label className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Enter Location </label>
      </div>
      <div className="relative z-0 w-full mb-5">
        <h2 className="mb-3 top-3 -z-1 origin-0 text-gray-500">Chose Type</h2>
        <div className="relative z-0 w-full">
          <input type="radio" id="html" name="type" value="restaurant" />
          <label className="ml-5 text-gray-500">Restaurant</label>
        </div>
        <div className="relative z-0 w-full">
          <input type="radio" id="css" name="type" value="hotel" />
          <label className="ml-5 text-gray-500">Hotel</label><br></br>
        </div>
        <div className="relative z-0 w-full">
          <input type="radio" id="javascript" name="type" value="famous_place" />
          <label className="ml-5 text-gray-500">Famous_place</label><br></br>
        </div>
      </div>
      
      <div className="relative z-0 w-full mb-5">
        <input
          type="number"
          name="rating"
          id="rating"
          required
          className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none outline-none ring-0 border-black border-gray-200 text-black"
        />
        <label  className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Enter rating</label>
      </div>

      <div className="relative z-0 w-full mb-5">
        <input
          type="text"
          name="description"
          id="description"
          required
          className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none outline-none ring-0 border-black border-gray-200 text-black"
        />
        <label  className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Description</label>
      </div>

      <button
        id="button"
        type="submit"
        className="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-pink-500 hover:bg-pink-600 hover:shadow-lg focus:outline-none"
      >
        Add Place
      </button>
    </form>
  </div>
</div>
    </div>
    
  );
}
