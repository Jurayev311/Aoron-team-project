import React, { useEffect, useRef, useState } from 'react'
import logo from '../../assets/logo.svg'
import cart from '../../assets/cart.svg'
import { Link, NavLink } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'
import i18n from '../../i18n'; 
import { useTranslation } from 'react-i18next'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef()
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false)
      }
    }

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [menuOpen])

  const handleLanguageChange = (lang, closeMenu = false) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('i18nextLng', lang); 
    document.body.classList.remove('bg-uz', 'bg-ru', 'bg-en'); 
    if (lang === 'uz') {
      document.body.classList.add('bg-uz');
    } else if (lang === 'ru') {
      document.body.classList.add('bg-ru'); 
    } else if (lang === 'en') {
      document.body.classList.add('bg-en'); 
    }
    if (closeMenu) setMenuOpen(false);
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem('i18nextLng') || 'uz';
    handleLanguageChange(savedLanguage); 
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/50 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className='kontainer'>
        <nav className='flex items-center justify-between h-[65px]'>
          <Link to={'/'}>
            <h2 className='text-2xl font-extrabold'>Suit <span className='text-gray-500 font-medium'>Shop</span></h2>
          </Link>

          <div className='md:hidden'>
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>

          <ul className='hidden md:flex items-center justify-center gap-[32px] text-[15px] font-normal'>
            <li className='hover:text-gray-500'><NavLink to={'/'}>{t('home.home', 'Home')}</NavLink></li>
            <li className='hover:text-gray-500'><NavLink to={'/catalog'}>{t('footer.shop', 'Catalog')}</NavLink></li>
            <li className='hover:text-gray-500'><NavLink to={'/about'}>{t('footer.about', 'About')}</NavLink></li>
            <li className='hover:text-gray-500'><NavLink to={'/news'}>{t('news.latest', 'News')}</NavLink></li>
            <li className='hover:text-gray-500'><NavLink to={'/contact'}>{t('footer.contact', 'Contact')}</NavLink></li>
          </ul>

          <div className='hidden md:flex items-center gap-3.5 text-[13px]'>
            <span 
              className={`px-2 py-0.5 rounded cursor-pointer ${i18n.language === 'en' ? 'bg-black text-white' : 'hover:bg-gray-100'}`} 
              onClick={() => handleLanguageChange('en')}
            >
              EN
            </span>
            <span 
              className={`px-2 py-0.5 rounded cursor-pointer ${i18n.language === 'ru' ? 'bg-black text-white' : 'hover:bg-gray-100'}`} 
              onClick={() => handleLanguageChange('ru')}
            >
              RU
            </span>
            <span 
              className={`px-2 py-0.5 rounded cursor-pointer ${i18n.language === 'uz' ? 'bg-black text-white' : 'hover:bg-gray-100'}`} 
              onClick={() => handleLanguageChange('uz')}
            >
              UZ
            </span>
            <NavLink to={'/cart'}>
              <img src={cart} alt="cart icon" />
            </NavLink>
          </div>
        </nav>
      </div>

      {menuOpen && (
        <div ref={menuRef} className="md:hidden fixed left-0 w-full bg-white shadow-md z-50 px-6 py-4">
          <ul className="flex flex-col gap-4 text-[16px] font-medium">
            <li><NavLink onClick={() => setMenuOpen(false)} to={'/'}>{t('home.home', 'Home')}</NavLink></li>
            <li><NavLink onClick={() => setMenuOpen(false)} to={'/catalog'}>{t('footer.shop', 'Catalog')}</NavLink></li>
            <li><NavLink onClick={() => setMenuOpen(false)} to={'/about'}>{t('footer.about', 'About')}</NavLink></li>
            <li><NavLink onClick={() => setMenuOpen(false)} to={'/news'}>{t('news.latest', 'News')}</NavLink></li>
            <li><NavLink onClick={() => setMenuOpen(false)} to={'/contact'}>{t('footer.contact', 'Contact')}</NavLink></li>
          </ul>

          <div className="flex items-center gap-3 mt-4 text-sm">
            <span 
              className={`px-2 py-0.5 rounded cursor-pointer ${i18n.language === 'en' ? 'bg-black text-white' : 'hover:bg-gray-100'}`} 
              onClick={() => handleLanguageChange('en', true)}
            >
              EN
            </span>
            <span 
              className={`px-2 py-0.5 rounded cursor-pointer ${i18n.language === 'ru' ? 'bg-black text-white' : 'hover:bg-gray-100'}`} 
              onClick={() => handleLanguageChange('ru', true)}
            >
              RU
            </span>
            <span 
              className={`px-2 py-0.5 rounded cursor-pointer ${i18n.language === 'uz' ? 'bg-black text-white' : 'hover:bg-gray-100'}`} 
              onClick={() => handleLanguageChange('uz', true)}
            >
              UZ
            </span>
            <NavLink to={'/cart'}>
              <img src={cart} alt="cart icon" className='w-[18px] h-[18px]' />
            </NavLink>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header;
