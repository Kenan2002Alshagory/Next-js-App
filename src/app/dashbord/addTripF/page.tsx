import {addTripF} from '../../API/addTripF'
import './local.css'



export default function addtripf() {
  return (
    <div className="div">
      
<div className="min-h-screen bg-gray-100 p-0 sm:p-12">
  <div className="mx-auto max-w-md px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl pp">
    <h1 className="text-2xl font-bold mb-8 text-gray-500">Form for create trip</h1>
    <form onSubmit={addTripF} >
    <div className="flex relative z-0 w-full mb-5">
        <input
          type="file"
          name="trip_image"
          id="trip_image"
          required
          className="w-full mt-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        />
        <label  className="absolute duration-300 top-3  origin-0 text-gray-500">Enter trip_image</label>
      </div>
      <div className="relative z-0 w-full mb-5">
        <input
          type="text"
          name="trip_name"
          id="trip_name"
          required
          className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none outline-none ring-0 border-black border-gray-200 text-black"
        />
        <label  className="absolute duration-300 top-3  origin-0 text-gray-500">Enter trip_name</label>
      </div>

      <div className="relative z-0 w-full mb-5">
        <input
          type="text"
          name="trip_type"
          id="trip_type"
          required
          className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none outline-none ring-0 border-black border-gray-200 text-black"
        />
        <label className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Enter trip_type</label>
      </div>
    
      <div className="relative z-0 w-full mb-5">
        <input
          type="date"
          name="start_date"
          id="start_date"
          required
          className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none outline-none ring-0 border-black border-gray-200 text-black"
        />
        <label  className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Enter start_date</label>
      </div>

      <div className="relative z-0 w-full mb-5">
        <input
          type="date"
          name="end_date"
          id="end_date"
          required
          className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none outline-none ring-0 border-black border-gray-200 text-black"
        />
        <label  className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Enter end_date</label>
      </div>

      <div className="relative z-0 w-full mb-5">
        <input
          type="text"
          name="from"
          id="from"
          required
          className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none outline-none ring-0 border-black border-gray-200 text-black"
        />
        <label  className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Enter from</label>
      </div>

      <div className="relative z-0 w-full mb-5">
        <input
          type="text"
          name="destination"
          id="destination"
          required
          className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none outline-none ring-0 border-black border-gray-200 text-black"
        />
        <label  className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Enter destination</label>
      </div>

      <div className="relative z-0 w-full mb-5">
        <input
          type="number"
          name="duration"
          id="duration"
          required
          className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none outline-none ring-0 border-black border-gray-200 text-black"
        />
        <label  className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Enter duration</label>
      </div>

      <div className="relative z-0 w-full mb-5">
        <input
          type="text"
          name="guide_name"
          id="guide_name"
          required
          className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none outline-none ring-0 border-black border-gray-200 text-black"
        />
        <label  className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Enter guide_name</label>
      </div>

      <div className="relative z-0 w-full mb-5">
        <input
          type="number"
          name="travelers_num"
          id="travelers_num"
          required
          className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none outline-none ring-0 border-black border-gray-200 text-black"
        />
        <label  className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Enter travelers_num</label>
      </div>

      <div className="relative z-0 w-full mb-5">
        <input
          type="number"
          name="trip_price"
          id="trip_price"
          required
          className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none outline-none ring-0 border-black border-gray-200 text-black"
        />
        <label  className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Enter trip_price</label>
      </div>

      <div className="relative z-0 w-full mb-5">
        <input
          type="text"
          name="trip_description"
          id="trip_description"
          required
          className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none outline-none ring-0 border-black border-gray-200 text-black"
        />
        <label  className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Enter trip_description</label>
      </div>

      <button
        id="button"
        type="submit"
        className="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-pink-500 hover:bg-pink-600 hover:shadow-lg focus:outline-none"
      >
        Continuation
      </button>
    </form>
  </div>
</div>
    </div>
    
  );
}
