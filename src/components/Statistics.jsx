import React from 'react';
import { HiComputerDesktop, HiOutlineComputerDesktop } from 'react-icons/hi2';
import { IoIosContact, IoIosContacts } from "react-icons/io";

const Statistics = () => {
  return (
    <div className="flex justify-between m-4 bg-white shadow-md  rounded-3xl">
      <div className="w-1/3 m-4 ml-8 border-r flex items-center gap-3">
        <div className="flex items-center justify-center text-green-400 bg-green-200 rounded-full w-fit ">
          <IoIosContacts className='text-[90px]' />
        </div>
        <div className="">
          <h3 className="text-base text-gray-500">Total Customers</h3>
          <p className="text-2xl font-bold">5,423</p>
          <span className="text-gray-700"> <span className=" text-green-400">16%</span> this month</span>
        </div>
      </div>


      <div className="w-1/3 m-4 ml-8 border-r flex items-center gap-3">
        <div className="flex items-center justify-center text-green-400 bg-green-200 rounded-full w-fit ">
          <IoIosContact className='text-[90px]' />
        </div>
        <div className="">
          <h3 className="text-base text-gray-500">Members</h3>
          <p className="text-2xl font-bold">43</p>
          <span className="text-gray-700"> <span className=" text-red-400">1%</span> this month</span>
        </div>
      </div>


      <div className="w-1/3 m-4 ml-8 border-r flex items-center gap-3">
        <div className="flex items-center justify-center text-green-400 bg-green-200 rounded-full w-fit p-4">
          < HiOutlineComputerDesktop  className='text-[60px]'/>
        </div>
        <div className="">
          <h3 className="text-base text-gray-500">Active Now</h3>
          <p className="text-2xl font-bold">423</p>
          <span className="text-green-500">+72 this month</span>
        </div>
      </div>

    </div>
  );
};

export default Statistics;
