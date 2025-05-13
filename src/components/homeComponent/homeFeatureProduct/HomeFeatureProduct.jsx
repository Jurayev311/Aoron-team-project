import React from 'react'
import product from '../../../assets/home-product/image.png'
import Product from '../../products/Products'
import { Link } from 'react-router-dom'

const HomeFeatureProduct = () => {
  return (
    <>
        <div className='home__feature__product pt-[100px] pb-[50px]'>
            <div className="kontainer">
                <h1 className="home_product_title text-center text-[40px] font-[300] ">Featured Products</h1>
                <p className='home_product_description text-center text-[18px] max-w-[800px] mx-auto mt-[20px] text-[#777] '>Discover our carefully selected collection of premium menswear, crafted with the finest materials and attention to detail.</p>
            <Product/>
            <div className="flex  justify-center">
                <Link to={'/catalog'}>
                    <button style={{borderRadius:"10px", borderWidth:"1px", borderStyle:"solid", borderColor:"#888"}} className='flex items-center border rounded-2  gap-2 bg-white text-black px-4 py-3 transition-all cursor-pointer  hover:bg-[#e2e1e1] hover:gap-3 w-[200px] '>
                    <span>Explore Collection</span> 
                    <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#000"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>
                    </button>
                </Link>
            </div>
            
            </div>
        </div>
    </>
  )
}

export default HomeFeatureProduct