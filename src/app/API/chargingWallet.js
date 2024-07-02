/* eslint-disable @next/next/no-img-element */
"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import './allUsers.css'
let token = Cookies.get("access_token");


const APIEndpoint = axios.create({
    baseURL: 'http://localhost:8000/api', // Adjust the URL as needed
});

export const getAllWallet = async () => {
    const response = await APIEndpoint.get('/ViewChargingOrders', {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data['orders'];
};


export const Accept = async (e) => {

  e.preventDefault();

  const data = {
    // Add your data properties here
    'id' : e.target.id.value,

  };
  try {
    const response = await axios.delete('http://127.0.0.1:8000/api/accept/'+data['id'], {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    console.log('konan')

    window.location.href = "http://localhost:3000/dashbord/chargingWallet" ;
  } catch (error) {
    console.error(error); 
  }

};


export const Reject = async (e) => {

  e.preventDefault();

  const data = {
    // Add your data properties here
    'id' : e.target.id.value,

  };
  try {
    const response = await axios.delete('http://127.0.0.1:8000/api/reject/'+data['id'], {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    console.log('konan')

    window.location.href = "http://localhost:3000/dashbord/chargingWallet" ;
  } catch (error) {
    console.error(error); 
  }

};



const ChargingWallet = () => {
    const [Wallets, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const usersData = await getAllWallet();
                setUsers(usersData);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    const walletsLength = Wallets.length;

    if(walletsLength == 0){
      return (  
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h2 className="bg-white text-gray-900 text-3xl text-center title-font font-medium mb-5">
              There are no orders for charging
            </h2>
          </div>
            );
    }

    return (


    
<div className='p'>
<div className="bg-white p-8 rounded-md w-full">
<div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto pp">
<div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
<table className="min-w-full leading-normal">
    <thead>
        <tr>
            <th
                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                UserName
            </th>
            <th
                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Email
            </th>
            <th
                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Amount
            </th>
            <th
                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Accept
            </th>
            <th
                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Reject
            </th>
        </tr>
    </thead>
    <tbody>
                {Wallets.map((Wallet) => (
                    <>
                    <tr>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div className="flex items-center">
                    <div className="flex-shrink-0 w-10 h-10">
                        <img className="w-full h-full rounded-full"
                            src={`http://localhost:8000/${Wallet.user.photo_path}`}
                            alt="" />
                    </div>
                        <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap">
                                {Wallet.user.username}
                            </p>
                        </div>
                    </div>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">
                    {Wallet.user.email}
                </p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">
                    {Wallet.amount}
                </p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div className="inline-flex mt-2 xs:mt-0">
                <form onSubmit={Accept}>
                    <input type="number" id="id" className="hidden" defaultValue={Wallet.id} required>
                    </input>
                    <button type="submit" className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded">Accept</button> 
                </form>           
                </div>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div className="inline-flex mt-2 xs:mt-0">
                <form onSubmit={Reject}>
                    <input type="number" id="id" className="hidden" defaultValue={Wallet.id} required>
                    </input>
                    <button type="submit" className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded">Reject</button> 
                </form>           
                </div>
            </td>
        </tr>
                    </>
                ))}
            
    </tbody>
</table>
</div>
</div>
</div>
</div>
    );
};

export default ChargingWallet;

