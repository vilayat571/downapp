import React from 'react'
import Header from './components/Header'
import LeftTable from './components/LeftTable'
import RightTable from './components/RightTable'

function App() {
  return (
    <div>
      <Header />
      <div className='main'>
        <div className='table'>
          <LeftTable />
          <RightTable />
        </div>
      </div>
    </div>
  )
}

export default App

