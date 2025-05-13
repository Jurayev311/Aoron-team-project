import React, { useEffect } from 'react'
import AboutAoron from '../../components/aboutComponent/AboutOur'

const About = () => {
  useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
    
  return (
    <div className='pt-[78px]'><AboutAoron /></div>
  )
}

export default About