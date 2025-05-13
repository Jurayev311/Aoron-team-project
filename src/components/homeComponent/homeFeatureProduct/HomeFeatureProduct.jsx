import React from 'react'
import Product from '../../products/Products'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const HomeFeatureProduct = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="pt-[100px] pb-[50px]">
        <div className="kontainer mx-auto px-4">
          <h1 className="text-center text-4xl font-light">{t('home.featured', 'Featured Products')}</h1>
          <p className="text-center text-lg max-w-[800px] mx-auto mt-5 text-[#777]">
            {t('home.featuredDesc', 'Discover our carefully selected collection of premium menswear, crafted with the finest materials and attention to detail.')}
          </p>

          <Product />

          <div className="flex justify-center mt-8">
            <Link to="/catalog">
              <button className="flex items-center gap-2 w-[200px] px-4 py-3 border border-gray-300 rounded-lg bg-white text-[#272727] hover:bg-gray-200 hover:gap-3 transition-all">
                <span>{t('home.explore', 'Explore Collection')}</span>
                <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="http://www.w3.org/2000/svg" width="18px" fill="#000">
                  <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
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
