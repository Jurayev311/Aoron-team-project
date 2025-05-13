import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getNews, imageUrl } from '../aboutComponent/Api';
import { useTranslation } from 'react-i18next';

const LatestNews = () => {
  const [newsItems, setNewsItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await getNews();
        if (data && data.length > 0) {
          setNewsItems(data);
        } else {
          setError("News not found or data not available.");
        }
      } catch (error) {
        console.error("Error loading news:", error);
        setError("An error occurred while retrieving the data: " + error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-8 sm:py-10">
        <div className="flex space-x-3">
          <div
            className="w-4 sm:w-5 h-4 sm:h-5 bg-gray-500 rounded-full animate-pulse-custom"
            style={{ animationDelay: '0s' }}
          ></div>
          <div
            className="w-4 sm:w-5 h-4 sm:h-5 bg-gray-500 rounded-full animate-pulse-custom"
            style={{ animationDelay: '0.2s' }}
          ></div>
          <div
            className="w-4 sm:w-5 h-4 sm:h-5 bg-gray-500 rounded-full animate-pulse-custom"
            style={{ animationDelay: '0.4s' }}
          ></div>
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="text-center py-8 sm:py-10 text-red-500 text-sm sm:text-base">{error}</div>;
  }

  const handleCardClick = (id) => {
    navigate(`/about-news/${id}`);
  };

  return (
    <div className="bg-gray-100 w-full py-6 sm:py-8 lg:py-10">
      <div className="kontainer px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-6 text-gray-800">{t('news.latest')}</h2>
        <p className="text-center text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
          {t('news.stayUpdated')}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {newsItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl shadow-md border border-gray-200 transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg cursor-pointer"
              onClick={() => handleCardClick(item.id)}
            >
              <div className="relative w-full h-40 sm:h-48 mb-4">
                {item.image && (
                  <img
                    src={`${imageUrl}/${item?.image}`}
                    alt={item.title_en}
                    className="w-full h-full object-cover rounded-t-2xl"
                  />
                )}
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 transition-colors duration-300 group-hover:text-blue-600">
                  {item.title_en}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 line-clamp-3">{item.description_en}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestNews;