import React from 'react';
import { FiShoppingBag } from 'react-icons/fi';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartIcon = () => {
  const { cart } = useCart();
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Link to="/cart" className="relative inline-block">
      <FiShoppingBag className="w-7 h-7 text-black" />
      {count > 0 && (
        <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
          {count}
        </span>
      )}
    </Link>
  );
};

export default CartIcon;
