import React from 'react'
import "./Hero.css"
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <>
      <div id="hero">
        <div className="kontainer flex flex-col items-start gap-5 justify-center">
          <span className='text-[15px] bg-[rgba(170,160,160,0.4)] backdrop-[filter:blur(4px)] text-white px-2 py-0.5 rounded'>Spring/Summer 2025</span>
          <h2 className='text-[65px]'>Premium Menswear</h2>
          <p className='text-[20px]'>Quality fabrics. Perfect fit. Timeless style.</p>
          <Link to={'/catalog'}>
            <button className='flex items-center gap-2 bg-white text-black px-4 py-3 transition-all cursor-pointer rounded hover:bg-[#e2e1e1] hover:gap-3 w-[200px] '>
              <span>Explore Collection</span> 
              <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#000"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Hero