import React, { useEffect, useRef, useState } from 'react'
import logo from '../../assets/logo.svg'
import cart from '../../assets/cart.svg'
import { Link, NavLink } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef()

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

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/50 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className='kontainer'>
        <nav className='flex items-center justify-between h-[65px]'>
          <Link to={'/'}>
            <img src={logo} alt="logo image" />
          </Link>

          <div className='md:hidden'>
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>

          <ul className='hidden md:flex items-center justify-center gap-[32px] text-[15px] font-normal'>
            <li className='hover:text-gray-500'><NavLink to={'/'}>Home</NavLink></li>
            <li className='hover:text-gray-500'><NavLink to={'/catalog'}>Catalog</NavLink></li>
            <li className='hover:text-gray-500'><NavLink to={'/about'}>About</NavLink></li>
            <li className='hover:text-gray-500'><NavLink to={'/news'}>News</NavLink></li>
            <li className='hover:text-gray-500'><NavLink to={'/contact'}>Contact</NavLink></li>
          </ul>

          <div className='hidden md:flex items-center gap-3.5 text-[13px]'>
            <span className="bg-black text-white px-2 py-0.5 rounded cursor-pointer">EN</span>
            <span className="hover:bg-gray-100 cursor-pointer py-0.5 px-2 rounded">RU</span>
            <span className="hover:bg-gray-100 cursor-pointer py-0.5 px-2 rounded">DE</span>
            <NavLink to={'/cart'}>
              <img src={cart} alt="cart save icon" />
            </NavLink>
          </div>
        </nav>
      </div>

      {menuOpen && (
        <div ref={menuRef} className="md:hidden fixed top-[75px] left-0 w-full bg-white shadow-md z-50 px-6 py-4">
          <ul className="flex flex-col gap-4 text-[16px] font-medium">
            <li><NavLink onClick={() => setMenuOpen(false)} to={'/'}>Home</NavLink></li>
            <li><NavLink onClick={() => setMenuOpen(false)} to={'/catalog'}>Catalog</NavLink></li>
            <li><NavLink onClick={() => setMenuOpen(false)} to={'/about'}>About</NavLink></li>
            <li><NavLink onClick={() => setMenuOpen(false)} to={'/news'}>News</NavLink></li>
            <li><NavLink onClick={() => setMenuOpen(false)} to={'/contact'}>Contact</NavLink></li>
          </ul>

          <div className="flex items-center gap-3 mt-4 text-sm">
            <span className="bg-black text-white px-2 py-0.5 rounded cursor-pointer">EN</span>
            <span className="hover:bg-gray-100 cursor-pointer py-0.5 px-2 rounded">RU</span>
            <span className="hover:bg-gray-100 cursor-pointer py-0.5 px-2 rounded">DE</span>
            <NavLink to={'/cart'}>
              <img src={cart} alt="cart icon" className='w-[18px] h-[18px]' />
            </NavLink>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
