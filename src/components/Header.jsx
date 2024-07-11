import React, { useState, useEffect } from 'react';
import { BiSearch } from 'react-icons/bi';
import useFetchData from '../context/useFetchData';
import { useDataContext } from '../context/DataContext';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  useFetchData(`https://dummyjson.com/products/search?q=${searchQuery}`);
  const { data, loading, error } = useDataContext();

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="flex justify-between items-center p-4 shadow-md">
      <div>
        <h2 className="text-xl font-bold">Hello Evano 👋</h2>
      </div>
      <div className="relative">
        <BiSearch className="absolute text-lg text-gray-500 top-3 left-2" />
        <input
          type="text"
          className="pl-7 py-2 rounded-full placeholder:pl-1"
          placeholder="Search"
          value={searchQuery}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default Header;
