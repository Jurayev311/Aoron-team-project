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
        <div className="kontainer flex flex-col items-start gap-5 justify-center">
          <span className='text-[15px] bg-[rgba(170,160,160,0.4)] backdrop-[filter:blur(4px)] text-white px-2 py-0.5 rounded'>
            {t('home.season', 'Spring/Summer 2025')}
          </span>
          <h2 className='text-[65px]'>{t('home.premium', 'Premium Menswear')}</h2>
          <p className='text-[20px]'>{t('home.quality', 'Quality fabrics. Perfect fit. Timeless style.')}</p>
          <Link to={'/catalog'}>
            <button style={{paddingLeft:"16px", paddingRight:"20px"}} className='hero__btn flex relative items-center gap-2 bg-white text-black  py-3 transition-all cursor-pointer rounded hover:bg-[#e2e1e1]   '>
              <p>{t('home.explore', 'Explore Collection')}</p> 
              <GrFormNextLink  className='w-[20px] h-[20px] relative hero__btn__icon'/>
              {/* <svg   xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="http://www.w3.org/2000/svg" width="18px" fill="#000"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg> */}
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Hero