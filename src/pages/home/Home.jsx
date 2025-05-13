import React from 'react'
import Hero from '../../components/homeComponent/hero/Hero'
import HomeFeatureProduct from '../../components/homeComponent/homeFeatureProduct/HomeFeatureProduct'
import HeroArrivals from '../../components/homeComponent/heroArrivals/HeroArrivals'

const Home = () => {
  return (
    <div className='pt-[75px] '>
      <Hero/>
      <HomeFeatureProduct/>
      <HeroArrivals/>
    </div>

  )
}

export default Home