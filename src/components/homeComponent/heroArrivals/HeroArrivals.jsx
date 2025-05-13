import React from 'react'
import { Link } from 'react-router-dom'
import Products from '../../products/Products'
import { useTranslation } from 'react-i18next'

const HeroArrivals = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="kontainer mx-auto px-2 sm:px-4 py-6 sm:py-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
          <h2 className="text-2xl sm:text-4xl font-light">{t('home.newArrivals', 'New Arrivals')}</h2>
          <Link to={'/catalog'}>
            <button className="inline-flex items-center gap-2 px-4 py-2 sm:py-3 border border-gray-300 rounded-lg bg-white text-[#272727] hover:bg-gray-200 hover:gap-3 transition-all text-sm sm:text-base min-w-[170px] min-h-[44px] sm:min-w-[200px] sm:min-h-[48px]">
              <span>{t('home.explore', 'Explore Collection')}</span>
              {/* Right arrow icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </Link>
        </div>
        <div className="mt-6 sm:mt-10">
          <Products />
        </div>
      </div>
    </>
  )
}

export default HeroArrivals
