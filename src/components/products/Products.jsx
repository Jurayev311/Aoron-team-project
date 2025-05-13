import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Spin, Empty } from 'antd';

const Products = () => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);

  const getProduct = async () => {
    try {
      setLoad(true);
      const res = await axios.get('https://testaoron.limsa.uz/api/product');
      setData(res?.data?.data?.products || []);
    } catch (error) {
      console.log(error);
    } finally {
      setLoad(false);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      {load ? (
        <div className="flex items-center justify-center min-h-screen">
          <Spin size="large" />
        </div>
      ) : (
        <div className="p-6">
          {data?.length === 0 ? (
            <div className="flex items-center justify-center h-64">
              <Empty description="No products available" />
            </div>
          ) : (
            <div className="kontainer grid grid-cols-2 md:grid-cols-4 gap-6">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="rounded-md p-4 bg-white transition text-start overflow-hidden"
                >
                  <div className='overflow-hidden'>
                    <img
                    src={`https://testaoron.limsa.uz/${item?.images}`}
                    alt={item?.title_en}
                    className="w-full h-[424px] object-contain mb-3 hover:scale-[180%] duration-75 cursor-pointer"
                  />
                  </div>
                  <div className='flex justify-between'>
                    <h3 className="text-md font-semibold">{item?.title_en}</h3>
                  <p className="text-green-600 font-bold">${item?.price}</p>
                  </div>
                  <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                    {item?.description_en}
                  </p>
                  <p className="text-gray-500 text-sm mt-1">
                    Colors: {item?.colors?.map((c) => c.color_en).join(', ')}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Products;
