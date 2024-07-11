import React, { useState } from 'react';
import Pagination from './Pagination';
import { useDataContext } from '../context/DataContext';
import useFetchData from '../context/useFetchData';

const CustomerTable = () => {

  const [skip, setSkip] = useState(10)
  const [limit, setLimit] = useState(10)

  const [dynamicAmount, setDynamicAmount] = useState(10)

  useFetchData(`https://dummyjson.com/products?limit=${limit}&skip=${skip}&select=title,price,rating,brand,weight`);
  const { data, loading, error } = useDataContext();
  console.log('skip', skip)
  console.log('limit', limit)

  const totalEntries = 100;
  const entriesPerPage = 10;
  const paginate = (pageNumber) => {
    console.log(`Fetching data for page ${pageNumber}`);
  };
  return (
    <div className="bg-white shadow-md p-4 px-14 w-[96%] ml-5 rounded-3xl">
      <div>
        <h3 className="text-lg font-bold mb-2">All Customers</h3>
        <p className="text-green-400 mb-4">Active Members</p>
      </div>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-3 px-4 text-start">Product Name</th>
            <th className="py-3 px-4 text-start">Price</th>
            <th className="py-3 px-4 text-start">Brand</th>
            <th className="py-3 px-4 text-start">Rating</th>
            <th className="py-3 px-4 text-start">Weight</th>
          </tr>
        </thead>
        <tbody>
          {data && data.length > 0 ? (
            data.map((product, index) => (
              <tr key={index} className="text-center">
                <td className="my-4 px-4 text-start" style={{ paddingBottom: "18px" }}>{product.title}</td>
                <td className="my-4 px-4 text-start" style={{ paddingBottom: "18px" }}>{product.price}</td>
                <td className="my-4 px-4 text-start" style={{ paddingBottom: "18px" }}>{product.brand}</td>
                <td className="my-4 px-4 text-center" style={{ paddingBottom: "18px" }}>{product.rating}</td>
                <td className="my-4 px-4 text-center" style={{ paddingBottom: "18px" }}>{product.weight}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="py-4 px-4 text-center">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
      <Pagination totalEntries={totalEntries} entriesPerPage={entriesPerPage} paginate={paginate} setSkip={setSkip} skip={skip} limit={limit} setLimit={setLimit} dynamicAmount={dynamicAmount} setDynamicAmount={setDynamicAmount}/>

    </div>
  );
};

export default CustomerTable;
