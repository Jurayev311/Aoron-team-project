import React, { useEffect, useState } from 'react'
import logo from '../../assets/logo.svg'
import cart from '../../assets/cart.svg'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/50 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className='kontainer'>
        <nav className='flex items-center justify-between h-[75px]'>
          <Link to={'/'}>
            <img src={logo} alt="logo image" />
          </Link>

          <ul className='flex items-center justify-center gap-[32px] text-[15px] font-normal'>
            <li className='hover:text-gray-500'><NavLink to={'/'}>Home</NavLink></li>
            <li className='hover:text-gray-500'><NavLink to={'/catalog'}>Catalog</NavLink></li>
            <li className='hover:text-gray-500'><NavLink to={'/about'}>About</NavLink></li>
            <li className='hover:text-gray-500'><NavLink to={'/news'}>News</NavLink></li>
            <li className='hover:text-gray-500'><NavLink to={'/contact'}>Contact</NavLink></li>
          </ul>

          <div className='flex items-center gap-3.5 text-[13px]'>
            <span className="bg-black text-white px-2 py-0.5 rounded">EN</span>
            <span className="hover:bg-gray-100 cursor-pointer py-0.5 px-2 rounded">RU</span>
            <span className="hover:bg-gray-100 cursor-pointer py-0.5 px-2 rounded">DE</span>
            <NavLink to={'/cart'}><img src={cart} alt="cart save icon" /></NavLink>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
