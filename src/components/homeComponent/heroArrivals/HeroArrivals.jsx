import React from 'react'
import { Link } from 'react-router-dom'
import Products from '../../products/Products'

const HeroArrivals = () => {
  return (
    <>
      <div className="kontainer mx-auto px-4 py-8">
        <div className="flex items-center justify-between">
          <h2 className="text-4xl font-light">New Arrivals</h2>
          <Link to={'/catalog'}>
            <button className="flex items-center gap-2 px-4 py-3 border border-gray-300 rounded-lg bg-white text-[#272727] hover:bg-gray-200 hover:gap-3 transition-all">
              <span>Explore Collection</span>
              <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#000">
                <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
              </svg>
            </button>
          </Link>
        </div>
        <Products />
      </div>
    </>
  )
}

export default HeroArrivals
