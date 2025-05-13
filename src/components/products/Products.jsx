import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Spin, Empty } from 'antd';
import { Link } from 'react-router-dom';

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
        <div className="p-4 md:p-6 lg:p-8">
          {data?.length === 0 ? (
            <div className="flex items-center justify-center h-64">
              <Empty description="No products available" />
            </div>
          ) : (
            <div className="kontainer grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="rounded-md p-4 bg-white transition text-start overflow-hidden flex flex-col"
                >
                  <div className="overflow-hidden">
                    <Link to={`/product/${item.id}`}>
                      <img
                        src={`https://testaoron.limsa.uz/${item?.images}`}
                        alt={item?.title_en}
                        className="w-full h-[300px] md:h-[350px] lg:h-[424px] object-contain mb-3 hover:scale-[180%] duration-75 cursor-pointer"
                      />
                    </Link>
                  </div>
                  <div className="flex justify-between">
                    <h3 className="text-md font-semibold truncate">{item?.title_en}</h3>
                    <p className="text-green-600 font-bold">${item?.price}</p>
                  </div>
                  <p className="text-gray-600 text-sm mt-1 line-clamp-2 flex-grow">
                    {item?.description_en}
                  </p>
                  <div className="flex mt-1">
                    {item?.colors?.map((c, index) => (
                      <div
                        key={index}
                        style={{
                          backgroundColor: c.color_en,
                          width: '12px',
                          height: '12px',
                          borderRadius: '50%',
                          marginRight: '5px',
                        }}
                      />
                    ))}
                  </div>
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
