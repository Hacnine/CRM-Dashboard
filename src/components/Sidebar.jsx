import React from 'react';
import { FiHome, FiUser, FiDollarSign, FiPieChart, FiHelpCircle } from 'react-icons/fi';
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { MdDashboard } from 'react-icons/md';

const Sidebar = () => {
    return (
        <div className="w-64 h-screen bg-white shadow-md relative">
            <div className="p-4 flex items-center gap-2">
                <MdDashboard className=' text-2xl'/>
                <h1 className="text-xl font-bold">Dashboard</h1>
            </div>
            <ul className="mt-6 px-2">
                <li className="flex items-center justify-between p-4 text-gray-600  hover:bg-blue-600 hover:text-gray-100 rounded-md my-1">
                    <div className='flex items-center'>
                        <FiHome className="mr-4" />
                        <span>Dashboard</span>
                    </div>
                    <IoIosArrowForward />
                </li>
                <li className="flex items-center justify-between p-4 text-gray-100 bg-blue-600 rounded-md  hover:bg-blue-600 hover:text-gray-100  my-1">
                    <div className='flex items-center'><FiUser className="mr-4" />
                        <span>Customers</span></div>
                    <IoIosArrowForward />

                </li>

                <li className="flex items-center justify-between p-4 text-gray-600  hover:bg-blue-600 hover:text-gray-100 rounded-md my-1">
                    <div className='flex items-center'>
                        <FiDollarSign className="mr-4" />
                        <span>Income</span>
                    </div>
                    <IoIosArrowForward />
                </li>

                <li className="flex items-center justify-between p-4 text-gray-600  hover:bg-blue-600 hover:text-gray-100 rounded-md my-1">

                    <div className='flex items-center'>
                        <FiPieChart className="mr-4" />
                        <span>Promote</span>
                    </div>
                    <IoIosArrowForward />
                </li>

                <li className="   flex items-center justify-between p-4 text-gray-600  hover:bg-blue-600 hover:text-gray-100 rounded-md my-1">
                    <div className='flex items-center'>
                        <FiHelpCircle className="mr-4" />
                        <span>Help</span>
                    </div>
                    <IoIosArrowForward />
                </li>

            </ul>

            <div className=" fixed bottom-0 flex items-center justify-between w-64 p-4 text-gray-600  hover:bg-blue-600 hover:text-gray-100 rounded-md my-1 border-t ">
                <div className='flex items-center gap-3'>
                    <img src="/light.jpg" className="size-10 rounded-full" alt="" />
                    <div>
                    <div className="font-semibold">Evono</div>
                    <span className=' text-sm'>Project Manager</span>
                    </div>
                </div>
                <IoIosArrowDown />
            </div>
        </div>
    );
};

export default Sidebar;
