import React from 'react'
import Header from './Header'
import List from './List'

const Home = () => {
  return (
    <div className="h-100 d-flex flex-column overflow-hidden">
      <div id="header">
        <Header />
      </div>
      <div className="flex-grow-1 d-flex flex-column bg-theme overflow-auto">
        <List />
      </div>
    </div>
  )
}

export default Home