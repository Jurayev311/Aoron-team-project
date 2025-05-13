import React from 'react'
import "./Hero.css"
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { GrFormNextLink } from 'react-icons/gr'

const Hero = () => {
  const { t } = useTranslation();

  return (
    <>
      <div id="hero">
        <div className="kontainer flex flex-col items-start gap-3 sm:gap-5 justify-center py-8 sm:py-16 md:py-24">
          <span className='text-xs sm:text-sm bg-[rgba(170,160,160,0.4)] backdrop-[filter:blur(4px)] text-white px-2 py-0.5 rounded'>
            {t('home.season', 'Spring/Summer 2025')}
          </span>
          <h2 className='text-3xl sm:text-5xl md:text-6xl lg:text-[65px] leading-tight font-semibold'>
            {t('home.premium', 'Premium Menswear')}
          </h2>
          <p className='text-base sm:text-lg md:text-xl lg:text-2xl'>
            {t('home.quality', 'Quality fabrics. Perfect fit. Timeless style.')}
          </p>
          <Link to={'/catalog'}>
            <button className='flex items-center gap-2 bg-white text-black px-4 py-3 transition-all cursor-pointer rounded hover:bg-[#e2e1e1] hover:gap-3 w-[200px] '>
              <span>{t('home.explore', 'Explore Collection')}</span> 
              <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="http://www.w3.org/2000/svg" width="18px" fill="#000"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Hero