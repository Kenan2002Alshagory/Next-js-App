/* eslint-disable @next/next/no-img-element */
"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';
import {handleSubmit} from "./userDelete"
import './allUsers.css'

const APIEndpoint = axios.create({
    baseURL: 'http://localhost:8000/api', // Adjust the URL as needed
});

export const getAllUsers = async () => {
    const response = await APIEndpoint.get('/allUser');
    return response.data;
};



const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const usersData = await getAllUsers();
                setUsers(usersData);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    

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
                Role
            </th>
            <th
                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Birth_date
            </th>
            <th
                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Balance
            </th>
            <th
                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Delete
            </th>
        </tr>
    </thead>
    <tbody>
                {users.map((user) => (
                    <>
                    <tr>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div className="flex items-center">
                    <div className="flex-shrink-0 w-10 h-10">
                        <img className="w-full h-full rounded-full"
                            src={`http://localhost:8000/${user.photo_path}`}
                            alt="" />
                    </div>
                        <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap">
                                {user.username}
                            </p>
                        </div>
                    </div>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">													{user.email}
</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">
                    {user.role}
                </p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">
                    {user.birth_date}
                </p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <span
                    className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                    <span aria-hidden
                        className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                <span className="relative">{user.wallet.balance}</span>
                </span>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div className="inline-flex mt-2 xs:mt-0">
                <form onSubmit={handleSubmit}>
                    <input type="number" id="id" className="hidden" defaultValue={user.id} required>
                    </input>
                    <button type="submit" className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded">delete</button> 
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

export default UserList;

