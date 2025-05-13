import React, { useEffect } from 'react';
import { FiShoppingBag } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Cart = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="pt-[100px] flex flex-col items-center justify-center min-h-[60vh] text-center mb-[70px]">
      <h1 className="text-4xl font-light mb-[130px]">Your Cart</h1>

      <div className="bg-gray-100 rounded-full p-5 mb-6">
        <FiShoppingBag className="w-[35px] h-[35px] text-gray-500" />
      </div>

      <h2 className="text-[18px] font-semibold mb-3">Your cart is empty</h2>
      <p className="text-gray-500 mb-6">
        Looks like you haven't added anything to your cart yet.
      </p>

      <Link to={'/catalog'}>
        <button className="bg-black text-white px-6 py-3 rounded hover:bg-[#2a2a2a] transition cursor-pointer">
          Continue Shopping
        </button>
      </Link>
    </div>
  );
};

export default Cart;
