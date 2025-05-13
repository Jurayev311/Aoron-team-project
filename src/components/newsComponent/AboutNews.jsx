import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getNewsItem, imageUrl } from '../aboutComponent/Api';

const AboutNews = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [newsItem, setNewsItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNewsItem = async () => {
            try {
                const data = await getNewsItem(id);
                if (data) {
                    setNewsItem(data);
                } else {
                    setError("News not found or no data available.");
                }
            } catch (error) {
                console.error("Error loading the news:", error);
                setError("An error occurred while fetching the data: " + error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchNewsItem();
    }, [id]);

    if (loading) {
        return (
            <div className="flex justify-center items-center py-8 sm:py-10 mt-16 sm:mt-20">
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
        return <div className="text-center py-8 sm:py-10 text-red-500 text-sm sm:text-base mt-16 sm:mt-20">{error}</div>;
    }

    return (
        <div className="bg-gray-100 w-full py-6 sm:py-8 lg:py-10 min-h-screen">
            <div className="kontainer px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20">
                <button
                    onClick={() => navigate(-1)}
                    className="mb-4 sm:mb-6 px-4 sm:px-6 py-2 sm:py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition text-sm sm:text-base"
                >
                    Back
                </button>
                <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-4 sm:p-6">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-4">{newsItem.title_en}</h2>
                    {newsItem.image && (
                        <img
                            src={`${imageUrl}/${newsItem?.image}`}
                            alt={newsItem.title_en}
                            className="w-full h-48 sm:h-64 lg:h-80 object-cover rounded-lg mb-4"
                        />
                    )}
                    <p className="text-sm sm:text-base text-gray-600 break-words">{newsItem.description_en}</p>
                </div>
            </div>
        </div>
    );
};

export default AboutNews;