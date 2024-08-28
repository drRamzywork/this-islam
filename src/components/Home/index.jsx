import React from 'react'
import Hero from './Hero'
import Quran from './Quran'
import Arkan from './Arkan'
import Prophet from '../Prophet'
import Questions from './Questions'

const Home = ({ homeData, }) => {

  return (
    <>
      <Hero />
      <Quran />
      <Arkan />
      <Prophet />
      <Questions />
    </>
  )
}

export default Home