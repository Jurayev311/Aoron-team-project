import React, { useState } from 'react'
import clsx from 'clsx'

const categories = ['t-shirts', 'shorts', 'suits']
const sizes = ['44-52']
const colors = [
  { name: 'black', code: 'bg-black' },
  { name: 'white', code: 'bg-white border' },
  { name: 'gray', code: 'bg-gray-400' },
  { name: 'Blue', code: 'bg-blue-600' },
  { name: 'Yellow', code: 'bg-yellow-400' },
  { name: 'brown', code: 'bg-red-900' },
  { name: 'brown', code: 'bg-red-700' }, // intentionally duplicate for sample
]

const OurCollectionFilter = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    category: 'all',
    sizes: [],
    colors: []
  })

  const toggleColor = (color) => {
    setSelectedFilters(prev => {
      const exists = prev.colors.includes(color)
      return {
        ...prev,
        colors: exists
          ? prev.colors.filter(c => c !== color)
          : [...prev.colors, color]
      }
    })
  }

  const toggleSize = (size) => {
    setSelectedFilters(prev => ({
      ...prev,
      sizes: prev.sizes.includes(size)
        ? prev.sizes.filter(s => s !== size)
        : [...prev.sizes, size]
    }))
  }

  const clearFilters = () => {
    setSelectedFilters({
      category: 'all',
      sizes: [],
      colors: []
    })
  }

  return (
    <div>
      <div className='w-full py-10 bg-gray-100'>
        <div className='text-center mx-auto w-[35%]'>
          <h1 className='md:text-3xl text-2xl md:font-bold font-medium'>Our Collection</h1>
          <p className='md:text-[16px] text-[12px]  font-normal mt-5 text-gray-500'>Browse our collection of premium menswear, designed with quality and style in mind.</p>
        </div>
      </div>
      <aside className="w-full  space-y-8 p-4 max-w-[1240px]  mx-auto">
        {/* Categories */}
        <div>
          <h3 className="font-semibold text-[16px] mb-4">Categories</h3>
          <ul className="space-y-2 w-[25%]">
            <li>
              <button
                className={clsx(
                  'block w-full text-left px-4 py-2 rounded-md',
                  selectedFilters.category === 'all'
                    ? 'bg-black text-white'
                    : 'hover:underline'
                )}
                onClick={() =>
                  setSelectedFilters(prev => ({ ...prev, category: 'all' }))
                }
              >
                View All Products
              </button>
            </li>
            {categories.map(cat => (
              <li key={cat}>
                <button
                  className={clsx(
                    'block w-full  text-left px-4 py-2 capitalize  rounded-md',
                    selectedFilters.category === cat
                       ? 'bg-black text-white'
                    : 'hover:underline'
                  )}
                  onClick={() =>
                    setSelectedFilters(prev => ({ ...prev, category: cat }))
                  }
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Sizes */}
        <div>
          <h3 className="font-bold text-[16px] mb-4">Sizes</h3>
          <div className="flex gap-2 flex-wrap">
            {sizes.map(size => (
              <button
                key={size}
                className={clsx(
                  'border rounded-md px-3 py-1',
                  selectedFilters.sizes.includes(size)
                    ? 'bg-black text-white'
                    : 'text-black'
                )}
                onClick={() => toggleSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Colors */}
        <div className='w-[25%]'>
          <h3 className="font-semibold text-[16px] mb-4">Colors</h3>
          <div className="flex flex-wrap gap-2">
            {colors.map((color, index) => (
              <button
                key={index}
                onClick={() => toggleColor(color.name)}
                className={clsx(
                  'flex items-center gap-1 border rounded-full px-3 py-1 text-sm capitalize',
                  selectedFilters.colors.includes(color.name) && 'ring-2 ring-black'
                )}
              >
                <span
                  className={`w-3 h-3 rounded-full ${color.code}`}
                />
                {color.name}
              </button>
            ))}
          </div>
        </div>

        {/* Clear Filters */}
        <div>
          <button
            onClick={clearFilters}
            className="text-red-500 text-sm hover:underline"
          >
            Clear filters
          </button>
        </div>
      </aside>
    </div>
  )
}

export default OurCollectionFilter
