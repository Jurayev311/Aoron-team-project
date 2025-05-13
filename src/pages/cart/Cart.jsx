import React, { useEffect } from 'react';
import { FiShoppingBag } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useCart } from '../../context/CartContext';

const Cart = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const { t } = useTranslation();
  const { cart, removeFromCart, updateQuantity } = useCart();

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="pt-[100px] flex flex-col items-center justify-center min-h-[60vh] text-center mb-[70px]">
        <h1 className="text-4xl font-light mb-[130px]">{t('cart.title', 'Your Cart')}</h1>
        <div className="bg-gray-100 rounded-full p-5 mb-6">
          <FiShoppingBag className="w-[35px] h-[35px] text-gray-500" />
        </div>
        <h2 className="text-[18px] font-semibold mb-3">{t('cart.empty', 'Your cart is empty')}</h2>
        <p className="text-gray-500 mb-6">
          {t('cart.emptyDesc', "Looks like you haven't added anything to your cart yet.")}
        </p>
        <Link to={'/catalog'}>
          <button className="bg-black text-white px-6 py-3 rounded hover:bg-[#2a2a2a] transition cursor-pointer">
            {t('cart.continue', 'Continue Shopping')}
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-[100px] kontainer flex flex-col lg:flex-row gap-8 min-h-[60vh] mb-[70px]">
      <div className="flex-1">
        <h1 className="text-4xl font-light mb-8">{t('cart.title', 'Your Cart')}</h1>
        <div className="bg-white rounded-xl shadow p-6 mb-6">
          {cart.map(item => (
            <div key={item.key} className="flex items-center border-b last:border-b-0 py-6">
              <img
                src={`https://testaoron.limsa.uz/${item.image}`}
                alt={item.title}
                className="w-28 h-32 object-contain rounded mr-6"
              />
              <div className="flex-1">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <div className="text-gray-500 text-sm mb-1">Sizes: {item.size}</div>
                <div className="text-gray-500 text-sm mb-2 flex items-center">
                  Colors:
                  <span
                    className="inline-block ml-2 w-4 h-4 rounded-full border"
                    style={{ backgroundColor: item.color }}
                  />
                </div>
                <div className="flex items-center mt-2">
                  <button
                    className="border px-2 py-1 rounded-l"
                    onClick={() => updateQuantity(item.key, Math.max(1, item.quantity - 1))}
                  >-</button>
                  <span className="border-t border-b px-4 py-1">{item.quantity}</span>
                  <button
                    className="border px-2 py-1 rounded-r"
                    onClick={() => updateQuantity(item.key, item.quantity + 1)}
                  >+</button>
                </div>
              </div>
              <div className="flex flex-col items-end ml-6">
                <button
                  className="text-gray-400 hover:text-red-500 text-xl mb-2"
                  onClick={() => removeFromCart(item.key)}
                  title="Remove"
                >×</button>
                <div className="text-lg font-bold text-black">${(item.price * item.quantity).toFixed(2)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full lg:w-[400px]">
        <div className="bg-gray-100 rounded-xl p-6 sticky top-32">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between font-bold text-lg mb-6">
            <span>Total</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <button className="w-full bg-black text-white py-3 rounded-lg text-lg hover:bg-[#1a1a1a] transition cursor-pointer mb-3">
            Checkout
          </button>
          <Link to="/catalog" className="block text-center text-gray-500 hover:underline mb-2">
            Continue Shopping
          </Link>
          <div className="flex items-center text-gray-400 text-xs mt-2">
            <span className="mr-2">⚠️</span>
            Delivery service is paid separately..
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
