import React from 'react'
import CardsMovie from '../components/CardsMovie'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div>
      <Navbar tab={0} />
      <CardsMovie />
    </div>
  )
}

export default Home