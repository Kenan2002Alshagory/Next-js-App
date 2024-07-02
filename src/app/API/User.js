"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
let token = Cookies.get("access_token");

export const getUser = async () => {
    const response = await axios.get('http://localhost:8000/api/userInfo',{
        headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        },
    });
    return response.data;
    
};


export const changePassword = async (e) => {

    e.preventDefault();

    const data = {
        'password_sure' : e.target.Old_Password.value,
        'password' : e.target.New_Password.value,
    };
    try {
        const response = await axios.post('http://127.0.0.1:8000/api/updateInfo', data,{
            headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
            },
        });
        window.location.href = "http://localhost:3000/dashbord/user";
        console.log(response.data);
    } catch (error) {
      console.error(error); // Handle errors here
    }
};


export const changeWalletPassword = async (e) => {

    e.preventDefault();

    const data = {
        'password_sure' : e.target.Old_Password.value,
        'wallet_password' : e.target.wallet_password.value,
    };
    try {
        const response = await axios.post('http://127.0.0.1:8000/api/updateInfo', data,{
            headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
            },
        });
        window.location.href = "http://localhost:3000/dashbord/user";
        console.log(response.data);
    } catch (error) {
      console.error(error); // Handle errors here
    }
};


export const changeEmail = async (e) => {

    e.preventDefault();

    const data = {
        'password_sure' : e.target.Old_Password.value,
        'email' : e.target.email.value,
    };
    try {
        const response = await axios.post('http://127.0.0.1:8000/api/updateInfo', data,{
            headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
            },
        });
        window.location.href = "http://localhost:3000/dashbord/user";
        console.log(response.data);
    } catch (error) {
      console.error(error); // Handle errors here
    }
};


export const changePhoto = async (e) => {

    e.preventDefault();

    const formData = new FormData();
    formData.append('photo', e.target.photo.files[0]);
    formData.append('password_sure', e.target.Old_Password.value);
    try {
        const response = await axios.post('http://127.0.0.1:8000/api/updateInfo', formData,{
            headers: {
            'Authorization': `Bearer ${token}`,
            },
        });
        window.location.href = "http://localhost:3000/dashbord/user";
        console.log(response.data);
    } catch (error) {
      console.error(error); // Handle errors here
    }
};


export const changeName = async (e) => {

    e.preventDefault();

    const data = {
        'password_sure' : e.target.Old_Password.value,
        'username' : e.target.username.value,
    };
    try {
        const response = await axios.post('http://127.0.0.1:8000/api/updateInfo', data,{
            headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
            },
        });
        window.location.href = "http://localhost:3000/dashbord/user";
        console.log(response.data);
    } catch (error) {
      console.error(error); // Handle errors here
    }
};


const User = () => {

    const [users, setUser] = useState([]);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const UserData = await getUser();
                setUser(UserData);
            } catch (error) {
                console.error('Error fetching User:', error);
            }
        };

        fetchUser();
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

    const [isModalOpen4, setIsModalOpen4] = useState(false);

    const toggleModal4 = () => {
        setIsModalOpen4(!isModalOpen4);
    };



    return (
    <div className='flex items-center justify-center h-[90vh] mt-[5vh]'>
    {users.map((user) => (
    <>
    <div className="h-full flex flex-col rounded-b-3xl bg-gray-100 dark:bg-gray-700 shadow-xl">
    <div className="bg-green-300 shadow-lg pb-3 rounded-b-3xl">
        <div
            className="flex  rounded-b-3xl bg-gray-100 dark:bg-gray-700 space-y-5 flex-col items-center py-7">
            <img className="h-28 w-28 rounded-full"src={`http://localhost:8000/${user.photo_path}`} alt="User" />
        <br></br>
            <span className="text-h1">{user.username}</span>
        </div>
        <br></br>
        <br></br>       
        <div className="grid px-7 py-2  items-center justify-around grid-cols-3 gap-4 divide-x divide-solid ">
            <div className="col-span-1 flex flex-col items-center ">
                <span className="text-2xl font-bold dark:text-gray-500">Wallet balance</span>
                <span className="text-lg font-medium 0">{user.wallet.balance}</span>
            </div>
            <div className="col-span-1 px-3 flex flex-col items-center ">
                <span className="text-2xl font-bold dark:text-gray-500">
                    Email</span>
                <span className="text-lg font-medium">{user.email}</span>
            </div>
            <div className="col-span-1 px-3 flex flex-col items-center ">
                <span className="text-2xl font-bold dark:text-gray-500">
                    Birth_date</span>
                <span className="text-lg font-medium">{user.birth_date}</span>
            </div>
        </div>

    </div>
    <br></br>
    <div className="block rounded-2xl divide-y divide-dashed hover:divide-solid  justify-evenly bg-gray-50 dark:bg-gray-300 m-3 mt-10 grid-cols-3">
        <div className="col-span-1  p-3">
            <div className="flex flex-col items-center ">
                <button className="tr-300" onClick={toggleModal}>
                        <span className="text-lg font-medium" >Edit password</span>
                </button>
            </div>
        </div>
        <div className="col-span-1  p-3">
            <div className="flex flex-col items-center ">
                <button className="tr-300" onClick={toggleModal1}>
                        <span className="text-lg font-medium">Edit wallet password</span>
                </button>
            </div>
        </div>
        <div className="col-span-1  p-3">
            <div className="flex flex-col items-center ">
                <button className="tr-300" onClick={toggleModal2}>
                        <span className="text-lg font-medium">Edit email</span>
                </button>
            </div>
        </div>
        <div className="col-span-1  p-3">
            <div className="flex flex-col items-center ">
                    <button className="tr-300" onClick={toggleModal4}>
                        <span className="text-lg font-medium">Edit name</span>
                    </button>
            </div>
        </div>
        <div className="col-span-1  p-3">
            <div className="flex flex-col items-center" onClick={toggleModal3}>
                <button className="tr-300">
                        <span className="text-lg font-medium">Edit photo</span>
                </button>
            </div>
        </div>
    </div>
    </div>
    </>
))}
        {isModalOpen && (
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
            <div className="bg-white p-4 rounded-lg shadow-lg">
            <form onSubmit={changePassword}>
                <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Enter Old Password</label>
                <input type="text" id="Old_Password" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500  text-black" placeholder="Enter your old password" required>
                </input>
                </div>
                <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Enter New Password</label>
                <input type="password" id="New_Password" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500  text-black"  placeholder="Enter your new password" required>
                </input>
                </div>
                <button  type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Change Password</button>
            </form>
            <br></br>
            <button  onClick={toggleModal} className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Close</button>
            </div>
            </div>
        )}
        {isModalOpen1 && (
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
            <div className="bg-white p-4 rounded-lg shadow-lg">
            <form onSubmit={changeWalletPassword}>
                <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Enter Old Password</label>
                <input type="text" id="Old_Password" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500  text-black" placeholder="Enter your old password" required>
                </input>
                </div>
                <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Enter New Wallet_password</label>
                <input type="password" id="wallet_password" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500  text-black"  placeholder="Enter your new wallet password" required>
                </input>
                </div>
                <button  type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Change Wallet_password</button>
            </form>
            <br></br>
            <button  onClick={toggleModal1} className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Close</button>
            </div>
            </div>
        )}
        {isModalOpen2 && (
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
            <div className="bg-white p-4 rounded-lg shadow-lg">
            <form onSubmit={changeEmail}>
                <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Enter Old Password</label>
                <input type="text" id="Old_Password" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500  text-black" placeholder="Enter your old password" required>
                </input>
                </div>
                <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Enter New Email</label>
                <input type="email" id="email" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500  text-black"  placeholder="Enter your new email" required>
                </input>
                </div>
                <button  type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Change Email</button>
            </form>
            <br></br>
            <button  onClick={toggleModal2} className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Close</button>
            </div>
            </div>
        )}
        {isModalOpen3 && (
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
            <div className="bg-white p-4 rounded-lg shadow-lg">
            <form onSubmit={changePhoto}>
                <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Enter Old Password</label>
                <input type="text" id="Old_Password" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500  text-black" placeholder="Enter your old password" required>
                </input>
                </div>
                <div className="mb-4">
                <input
                type="file"
                name="photo"
                id="photo"
                required
                className="w-full mt-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                />
                <label  className="absolute duration-300 top-3  origin-0 text-gray-500">Enter Photo</label>
                </div>
                <button  type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Change Photo</button>
            </form>
            <br></br>
            <button  onClick={toggleModal3} className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Close</button>
            </div>
            </div>
        )}
        {isModalOpen4 && (
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
            <div className="bg-white p-4 rounded-lg shadow-lg">
            <form onSubmit={changeName}>
                <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Enter Old Password</label>
                <input type="text" id="Old_Password" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500  text-black" placeholder="Enter your old password" required>
                </input>
                </div>
                <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Enter New Username</label>
                <input type="text" id="username" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500  text-black"  placeholder="Enter your new userName" required>
                </input>
                </div>
                <button  type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Change Username</button>
            </form>
            <br></br>
            <button  onClick={toggleModal4} className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Close</button>
            </div>
            </div>
        )}

</div>
    );
};

export default User;