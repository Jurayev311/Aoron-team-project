import React from 'react'
import Product from '../../products/Products'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const HomeFeatureProduct = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="pt-8 sm:pt-[100px] pb-6 sm:pb-[50px]">
        <div className="kontainer mx-auto px-2 sm:px-4">
          <h1 className="text-center text-2xl sm:text-4xl font-light">{t('home.featured', 'Featured Products')}</h1>
          <p className="text-center text-base sm:text-lg max-w-[800px] mx-auto mt-3 sm:mt-5 text-[#777]">
            {t('home.featuredDesc', 'Discover our carefully selected collection of premium menswear, crafted with the finest materials and attention to detail.')}
          </p>

          <Product />

          <div className="flex justify-center mt-6 sm:mt-8">
            <Link to="/catalog">
              <button className="inline-flex items-center gap-2 w-full sm:w-auto px-4 py-2 sm:py-3 border border-gray-300 rounded-lg bg-white text-[#272727] hover:bg-gray-200 hover:gap-3 transition-all text-sm sm:text-base min-w-[170px] min-h-[44px] sm:min-w-[200px] sm:min-h-[48px]">
                <span>{t('home.explore', 'Explore Collection')}</span>
                {/* Right arrow icon */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeFeatureProduct
