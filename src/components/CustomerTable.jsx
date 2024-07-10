import React from 'react';

const customers = [
  { name: 'Jane Cooper', company: 'Microsoft', phone: '(225) 555-0118', email: 'jane@microsoft.com', country: 'United States', status: 'Inactive' },
  { name: 'Floyd Miles', company: 'Yahoo', phone: '(205) 555-0100', email: 'floyd@yahoo.com', country: 'Kiribati', status: 'Inactive' },
  { name: 'Ronald Richards', company: 'Adobe', phone: '(302) 555-0107', email: 'ronald@adobe.com', country: 'Israel', status: 'Active' },
  { name: 'Marvin McKinney', company: 'Tesla', phone: '(252) 555-0126', email: 'marvin@tesla.com', country: 'Iran', status: 'Active' },
  { name: 'Jerome Bell', company: 'Google', phone: '(629) 555-0129', email: 'jerome@google.com', country: 'Reunion', status: 'Inactive' },
  { name: 'Kathryn Murphy', company: 'Microsoft', phone: '(406) 555-0120', email: 'kathryn@microsoft.com', country: 'Curacao', status: 'Active' },
  { name: 'Jacob Jones', company: 'Yahoo', phone: '(208) 555-0112', email: 'jacob@yahoo.com', country: 'Brazil', status: 'Inactive' },
  { name: 'Kristin Watson', company: 'Facebook', phone: '(704) 555-0127', email: 'kristin@facebook.com', country: 'Aland Islands', status: 'Active' },
];

const CustomerTable = () => {
  return (
    <div className="bg-white shadow-md rounded-md p-4">
      <h3 className="text-lg font-bold mb-4">All Customers</h3>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Customer Name</th>
            <th className="py-2">Company</th>
            <th className="py-2">Phone Number</th>
            <th className="py-2">Email</th>
            <th className="py-2">Country</th>
            <th className="py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={index} className="text-center">
              <td className="py-2">{customer.name}</td>
              <td className="py-2">{customer.company}</td>
              <td className="py-2">{customer.phone}</td>
              <td className="py-2">{customer.email}</td>
              <td className="py-2">{customer.country}</td>
              <td className={`py-2 ${customer.status === 'Active' ? 'text-green-500' : 'text-red-500'}`}>{customer.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerTable;
