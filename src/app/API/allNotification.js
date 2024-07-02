/* eslint-disable @next/next/no-img-element */
"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { clsx } from 'clsx';
let token = Cookies.get("access_token");



const APIEndpoint = axios.create({
    baseURL: 'http://localhost:8000/api', // Adjust the URL as needed
});

export const getAllNotifications = async () => {
    const response = await APIEndpoint.get('/notificatios',{
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        });
    return response.data;
};



const NotificationList = () => {
    const [notifications, setNotification] = useState([]);

    useEffect(() => {
        const fetchNotifications = async () => {
            try {
                const notificationsData = await getAllNotifications();
                setNotification(notificationsData);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchNotifications();
    }, []);

    const walletsLength = notifications.length;

    if(walletsLength == 0){
      return (  
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h2 className="bg-white text-gray-900 text-3xl text-center title-font font-medium mb-5">
              There are no notifications 
            </h2>
          </div>
            );
    }

    return (

<div className="container mx-auto py-10 h-screen">
	<div className=" pl-4  h-full flex flex-col">
                    <div className="bg-white text-sm text-gray-500 font-bold px-5 py-2 shadow border-b border-gray-300">
                        All Notification
                    </div>
                    <div className="overflow-auto shadow bg-white" id="journal-scroll">
                    {notifications.map((notification) => (<>
                    <table className="w-full">
                        <tbody className="">
                            <tr className="relative transform scale-100 text-xs py-1 border-b-2 border-blue-100 cursor-default ">
                                <td className="pl-5 pr-3 whitespace-no-wrap">
                                    <div className="text-gray-400">{notification.created_at}</div>
                                </td>
                                <td className="px-2 py-2 whitespace-no-wrap">
                                    <div className="leading-5 text-gray-500 font-medium">{notification.user.username}</div>
                                    <div className="leading-5 text-gray-500 font-medium">{notification.title}</div>
                                    <div className="leading-5 text-gray-800">{notification.body}</div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    </>
                    ))}
                    </div>
                </div>
        </div>
    );
};

export default NotificationList;

