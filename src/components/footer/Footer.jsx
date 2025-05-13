import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter, FaArrowRight  } from 'react-icons/fa';
import logo from '../../assets/footer-logo.svg';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-50 text-gray-700 py-12 px-4 sm:px-6 lg:px-8 mt-[20px]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <img src={logo} alt="Aoron Logo" className="mb-4" />
          <p className="text-sm">
            {t('footer.brandText', 'Premium quality menswear focused on exceptional materials and perfect fit.')}
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" aria-label="Instagram" className="text-black hover:text-[#000000da]">
              <FaInstagram className="text-xl" />
            </a>
            <a href="#" aria-label="Facebook" className="text-black hover:text-[#000000da]">
              <FaFacebook className="text-xl" />
            </a>
            <a href="#" aria-label="Twitter" className="text-black hover:text-[#000000da]">
              <FaTwitter className="text-xl" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">{t('footer.shop')}</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-[#000000da]">{t('footer.viewAll')}</a></li>
            <li><a href="#" className="hover:text-[#000000da]">{t('footer.tshirts')}</a></li>
            <li><a href="#" className="hover:text-[#000000da]">{t('footer.shorts')}</a></li>
            <li><a href="#" className="hover:text-[#000000da]">{t('footer.suits')}</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">{t('footer.company')}</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-[#000000da]">{t('footer.about')}</a></li>
            <li><a href="#" className="hover:text-[#000000da]">{t('footer.contact')}</a></li>
            <li><a href="#" className="hover:text-[#000000da]">{t('footer.privacy')}</a></li>
            <li><a href="#" className="hover:text-[#000000da]">{t('footer.delivery')}</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">{t('footer.subscribe')}</h3>
          <p className="text-sm mb-4">
            {t('footer.subscribeText')}
          </p>
          <form className="flex w-full">
            <input
              type="email"
              placeholder={t('footer.email', 'Email')}
              className="flex-grow min-w-0 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none"
              required
            />
            <button
              type="submit"
              className="px-4 py-2 bg-black text-white rounded-r-md hover:bg-[#000000da] flex-shrink-0"
            >
              <FaArrowRight />
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-200 text-start">
        <p className="text-sm text-gray-500">© 2025 AORON. {t('footer.rights')}</p>
      </div>
    </footer>
  );
};

export default Footer;