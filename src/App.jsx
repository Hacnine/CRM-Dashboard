import { useState } from 'react'
import './index.css'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Statistics from './components/Statistics'
import CustomerTable from './components/CustomerTable'

function App() {
  const [count, setCount] = useState(0)

  return (
<div className="flex">
      <Sidebar />
      <div className="flex-1 bg-gray-100">
        <Header />
        <Statistics />
        {/* <CustomerTable /> */}
      </div>
    </div>

  )
}

export default App
