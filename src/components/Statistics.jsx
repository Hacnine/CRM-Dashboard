import React from 'react';

const Statistics = () => {
  return (
    <div className="flex justify-between p-4">
      <div className="w-1/3 bg-white shadow-md p-4 rounded-md">
        <h3 className="text-lg">Total Customers</h3>
        <p className="text-2xl font-bold">5,423</p>
        <span className="text-green-500">+72 this month</span>
      </div>
      <div className="w-1/3 bg-white shadow-md p-4 rounded-md">
        <h3 className="text-lg">Members</h3>
        <p className="text-2xl font-bold">1,893</p>
        <span className="text-green-500">+12 this month</span>
      </div>
      <div className="w-1/3 bg-white shadow-md p-4 rounded-md">
        <h3 className="text-lg">Active Now</h3>
        <p className="text-2xl font-bold">189</p>
        <span className="text-green-500">+12 this month</span>
      </div>
    </div>
  );
};

export default Statistics;
