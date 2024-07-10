import React from 'react';
import Pagination from './Pagination';

const customers = [
  { name: 'Jane Cooper', company: 'Microsoft', phone: '(225) 555-0118', email: 'jane@microsoft.com', country: 'United States', status: 'Inactive' },
  { name: 'Floyd Miles', company: 'Yahoo', phone: '(205) 555-0100', email: 'floyd@yahoo.com', country: 'Kiribati', status: 'Inactive' },
  { name: 'Marvin McKinney', company: 'Tesla', phone: '(252) 555-0126', email: 'marvin@tesla.com', country: 'Iran', status: 'Active' },
  { name: 'Jerome Bell', company: 'Google', phone: '(629) 555-0129', email: 'jerome@google.com', country: 'Reunion', status: 'Inactive' },
  { name: 'Kathryn Murphy', company: 'Microsoft', phone: '(406) 555-0120', email: 'kathryn@microsoft.com', country: 'Curacao', status: 'Active' },
  { name: 'Jacob Jones', company: 'Yahoo', phone: '(208) 555-0112', email: 'jacob@yahoo.com', country: 'Brazil', status: 'Inactive' },
  { name: 'Kristin Watson', company: 'Facebook', phone: '(704) 555-0127', email: 'kristin@facebook.com', country: 'Aland Islands', status: 'Active' },
];

const CustomerTable = () => {
  const totalEntries = 10;
  const entriesPerPage = 8;
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
            <th className="py-3 px-4 text-start">Customer Name</th>
            <th className="py-3 px-4 text-start">Company</th>
            <th className="py-3 px-4 text-start">Phone Number</th>
            <th className="py-3 px-4 text-start">Email</th>
            <th className="py-3 px-4 text-start">Country</th>
            <th className="py-3 px-4 text-start">Status</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={index} className="text-center">
              <td className="my-4 px-4 text-start" style={{ paddingBottom: "18px" }}>{customer.name}</td>
              <td className="my-4 px-4 text-start" style={{ paddingBottom: "18px" }}>{customer.company}</td>
              <td className="my-4 px-4 text-start" style={{ paddingBottom: "18px" }}>{customer.phone}</td>
              <td className="my-4 px-4 text-start" style={{ paddingBottom: "18px" }}>{customer.email}</td>
              <td className="my-4 px-4 text-start" style={{ paddingBottom: "18px" }}>{customer.country}</td>
              <td style={{ paddingBottom: "18px" }}>
                <div className={`py-2 px-4 text-center rounded ${customer.status === 'Active' ? 'text-green-500 bg-green-200 border-green-400 border-2 rounded-md' : 'text-red-500 bg-red-200 border-red-400 border-2 rounded-md'}`}>
                  {customer.status}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination totalEntries={totalEntries} entriesPerPage={entriesPerPage} paginate={paginate} />

    </div>
  );
};

export default CustomerTable;
