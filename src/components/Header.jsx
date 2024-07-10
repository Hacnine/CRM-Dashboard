import React from 'react';
import { BiSearch } from 'react-icons/bi';

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4  shadow-md">
      <div>
        <h2 className="text-xl font-bold">Hello Evano 👋</h2>
      </div>
      <div className=' relative'>
        <BiSearch className='absolute text-lg text-gray-500 top-3 left-2' />
        <input
          type="text"
          className="px-6 py-2 rounded-full placeholder:pl-1"
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default Header;
