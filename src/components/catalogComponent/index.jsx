import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Spin, Empty } from 'antd';
import { useNavigate } from 'react-router-dom';

const ProductsCatalog = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]); // Now dynamic categories
  const [sizes, setSizes] = useState([]);
  const [colors, setColors] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);

  // Fetching products and categories
  const getProduct = async () => {
    setLoading(true);
    try {
      const res = await axios.get('https://testaoron.limsa.uz/api/product');
      const products = res?.data?.data?.products || [];

      setAllProducts(products);
      setFilteredProducts(products);

      const allCategories = [...new Set(products.map(p => p.category?.name_en))]; // Extract categories dynamically
      const allSizes = [...new Set(products.flatMap(p => p.sizes || []).map(size => size.size))];
      const allColors = [...new Set(products.flatMap(p => p.colors || []).map(color => color.color_en?.toLowerCase()))];

      setCategories(allCategories); // Set categories dynamically
      setSizes(allSizes);
      setColors(allColors);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  useEffect(() => {
    let result = [...allProducts];

    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category?.name_en === selectedCategory);
    }

    if (selectedSizes.length > 0) {
      result = result.filter(p => p.sizes?.some(size => selectedSizes.includes(size.size)));
    }

    if (selectedColors.length > 0) {
      result = result.filter(p => p.colors?.some(c => selectedColors.includes(c.color_en?.toLowerCase())));
    }

    setFilteredProducts(result);
  }, [selectedCategory, selectedSizes, selectedColors, allProducts]);

  const handleCategoryChange = (cat) => setSelectedCategory(cat);
  const handleSizeToggle = (size) => {
    setSelectedSizes(prev => prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]);
  };
  const handleColorToggle = (color) => {
    setSelectedColors(prev => prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color]);
  };
  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedSizes([]);
    setSelectedColors([]);
  };

  return (
    <div className='block'>
      <div className="w-full py-10 bg-gray-100">
        <div className="text-center mx-auto w-[90%] md:w-[35%]">
          <h1 className="md:text-3xl text-2xl md:font-bold font-medium">Our Collection</h1>
          <p className="md:text-[16px] text-[12px] font-normal mt-5 text-gray-500">
            Browse our collection of premium menswear, designed with quality and style in mind.
          </p>
        </div>
      </div>

      <div className='flex flex-col md:flex-row gap-10 px-4 md:px-0 mx-auto max-w-[1240px] py-10'>
        <div className="md:w-1/4 space-y-6">
          <div>
            <h2 className="font-semibold text-lg mb-2">Categories</h2>
            <div className="space-y-1">
              {/* Category buttons */}
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`block w-full px-4 py-2 rounded-md text-left ${selectedCategory === category ? 'bg-black text-white' : 'hover:bg-gray-100'}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-semibold text-lg mb-2">Sizes</h2>
            <div className="flex flex-wrap gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => handleSizeToggle(size)}
                  className={`border border-gray-400 px-3 py-1 rounded-md text-sm ${selectedSizes.includes(size) ? 'bg-black text-white' : ''}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-semibold text-lg mb-2">Colors</h2>
            <div className="flex flex-wrap gap-2">
              {colors.map((color) => (
                <button
                  key={color}
                  onClick={() => handleColorToggle(color)}
                  className={`flex items-center gap-2 px-3 py-1 border border-gray-400 rounded-md text-sm ${selectedColors.includes(color) ? 'ring-2 ring-black' : ''}`}
                >
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: color }}></span>
                  {color}
                </button>
              ))}
            </div>
          </div>

          <button onClick={clearFilters} className="text-red-500 text-sm underline mt-4">Clear filters</button>
        </div>

        <div className="md:w-3/4">
          {loading ? (
            <div className="flex items-center justify-center min-h-[400px]">
              <Spin size="large" />
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="flex items-center justify-center h-64 w-full">
              <Empty description="No products available" />
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((item) => (
                <div key={item.id} onClick={() => navigate(`/product/${item.id}`)} className="rounded-lg bg-white p-4 transition-shadow">
                  <div className="overflow-hidden rounded-md">
                    <img
                      src={`https://testaoron.limsa.uz/${item?.images}`}
                      alt={item?.title_en}
                      className="w-full h-[300px] object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="space-y-1">
                    <h3
                      title={item?.title_en}
                      className="text-md font-semibold line-clamp-1 h-[24px] cursor-default"
                    >
                      {item?.title_en}
                    </h3>

                    <p className="text-green-600 font-bold">${item?.price}</p>

                    <p className="text-gray-600 text-sm line-clamp-2 h-[38px]">
                      {item?.description_en}
                    </p>

                    <p className="text-gray-500 text-xs">
                      <span className="font-semibold">Colors:</span>{' '}
                      {item?.colors?.map(c => c.color_en).join(', ')}
                    </p>

                    <p className="text-gray-500 text-xs">
                      <span className="font-semibold">Sizes:</span>{' '}
                      {item?.sizes?.map(s => s.size).join(', ')}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsCatalog;
