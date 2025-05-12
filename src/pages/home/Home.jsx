import React from 'react'
import Hero from '../../components/homeComponent/hero/Hero'
import HomeFeatureProduct from '../../components/homeComponent/homeFeatureProduct/HomeFeatureProduct'

const Home = () => {
  return (
    <div className='pt-[75px]'>
      <Hero />
      <HomeFeatureProduct />
    </div>
  )
}

export default Home