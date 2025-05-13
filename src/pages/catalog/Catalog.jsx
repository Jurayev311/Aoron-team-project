import React, { useEffect } from 'react'
import ProductsCatalog from '../../components/catalogComponent'

const Catalog = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='pt-[100px]'>
      <ProductsCatalog/>
    </div>
  )
}

export default Catalog