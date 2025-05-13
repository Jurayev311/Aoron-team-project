import React from 'react'
import { Link } from 'react-router-dom'
import Products from '../../products/Products'

const HeroArrivals = () => {
  return (
    <>
        <div className="kontainer">
            <div className='flex  items-center  justify-between'>
                <h2 className='text-[40px] font-[300]'>New Arriwals</h2>
                <Link to={'/catalog'}>
                    <button style={{borderRadius:"10px", borderWidth:"1px", borderStyle:"solid", borderColor:"#888"}} className='flex items-center border rounded-2  gap-2 bg-white text-black px-4 py-3 transition-all cursor-pointer  hover:bg-[#e2e1e1] hover:gap-3 w-[200px] '>
                    <span>Explore Collection</span> 
                    <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#000"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>
                    </button>
                </Link>

            </div>    
                <Products/>
        </div>   
    </>
  )
}

export default HeroArrivals