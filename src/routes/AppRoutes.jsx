import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/home/Home'
import Catalog from '../pages/catalog/Catalog'
import About from '../pages/about/About'
import News from '../pages/news/News'
import Contact from '../pages/contact/Contact'
import Cart from '../pages/cart/Cart'
import AboutNews from '../components/newsComponent/AboutNews'


const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='catalog' element={<Catalog />} />
          <Route path='about' element={<About />} />
          <Route path='news' element={<News />} />
          <Route path='contact' element={<Contact />} />
          <Route path='cart' element={<Cart />} />
          <Route path="about-news/:id" element={<AboutNews />} />
        </Route>
      </Routes>
    </>
  )
}

export default AppRoutes