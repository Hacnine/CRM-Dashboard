import { useState } from 'react'
import './index.css'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Statistics from './components/Statistics'
import CustomerTable from './components/CustomerTable'
import { DataProvider } from './context/DataContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <DataProvider>
      <div className="flex relative">
        <Sidebar />
        <div className="flex-1 bg-gray-100">
          <Header />
          <Statistics />
          <CustomerTable />
        </div>
      </div>
    </DataProvider>
  )
}

export default App
