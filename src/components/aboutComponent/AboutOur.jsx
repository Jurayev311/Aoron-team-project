import React, { useEffect, useState } from 'react';
import { getTeam, imageUrl } from './Api';
import { useTranslation } from 'react-i18next';

const AboutAoron = () => {
    const { t } = useTranslation();

    return (
        <>
            <div className="bg-[#FAFAFA] px-2">
                <div className="py-4 md:py-8"></div>
                <div className="max-w-4xl mx-auto p-4 sm:p-6 md:p-12 bg-white rounded-[20px] shadow-lg">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#171717] leading-9 mb-4">{t('about.title')}</h2>
                    <p className="text-base sm:text-lg leading-7 text-[#404004] font-normal mb-4">
                        {t('about.desc')}
                    </p>
                    <p className="font-bold text-lg sm:text-xl text-[#181818] mb-4">
                        {t('about.directionsTitle')}
                        <ul className="font-normal text-sm sm:text-base text-[#262626] mt-2 list-disc ml-6">
                            <li>{t('about.directions.0')}</li>
                            <li className="my-2">{t('about.directions.1')}</li>
                        </ul>
                    </p>

                    <hr className="w-full text-gray-400" />

                    <h2 className="text-2xl sm:text-3xl leading-9 font-bold text-[#171717] mt-6 mb-4">{t('about.productionTitle')}</h2>
                    <p className="text-[#404040] text-base sm:text-lg leading-7 mb-4">
                        {t('about.productionDesc')}
                    </p>

                    <p className="font-bold text-lg sm:text-xl text-[#181818]">
                        {t('about.offerTitle')}
                        <ul className="font-normal text-sm sm:text-base text-[#262626] mt-2 list-disc ml-6 mb-4">
                            <li>{t('about.offer.0')}</li>
                            <li className="py-1.5">{t('about.offer.1')}</li>
                            <li>{t('about.offer.2')}</li>
                            <li className="pt-1.5">{t('about.offer.3')}</li>
                        </ul>
                    </p>

                    <hr className="w-full text-gray-400" />

                    <h2 className="font-bold text-lg sm:text-xl text-[#181818] mt-6 mb-4">{t('about.whyTitle')}</h2>
                    <ul className="font-normal text-sm sm:text-base text-[#262626] mt-2 list-disc ml-6 mb-4">
                        <li>{t('about.why.0')}</li>
                        <li className="py-1.5">{t('about.why.1')}</li>
                        <li>{t('about.why.2')}</li>
                        <li className="py-1.5">{t('about.why.3')}</li>
                        <li>{t('about.why.4')}</li>
                    </ul>

                    <hr className="w-full text-gray-400" />

                    <h2 className="font-bold text-lg sm:text-xl text-[#181818] mt-6 mb-4">{t('about.assortmentTitle')}</h2>
                    <h2 className="font-normal text-base sm:text-xl text-[#181818] mb-2">{t('about.assortmentSubtitle')}</h2>
                    <ul className="font-normal text-sm sm:text-base text-[#262626] mt-2 list-disc ml-6 mb-4">
                        <li>{t('about.assortment.0')}</li>
                        <li className="py-1.5">{t('about.assortment.1')}</li>
                        <li>{t('about.assortment.2')}</li>
                        <li className="pt-1.5">{t('about.assortment.3')}</li>
                    </ul>

                    <hr className="w-full text-gray-400" />

                    <h2 className="font-bold text-lg sm:text-xl text-[#181818] mt-6 mb-4">{t('about.readyTitle')}</h2>
                    <p className="font-normal text-base sm:text-xl text-[#181818]">
                        {t('about.readyDesc')}
                        <ul className="font-normal text-sm sm:text-base text-[#262626] mt-2 list-infection ml-6">
                            <li>{t('about.ready.0')}</li>
                            <li className="py-1.5">{t('about.ready.1')}</li>
                            <li>{t('about.ready.2')}</li>
                            <li className="py-1.5">{t('about.ready.3')}</li>
                            <li>{t('about.ready.4')}</li>
                        </ul>
                    </p>

                    <hr className="w-full mt-3 pb-3 text-gray-400" />

                    <p className="font-normal text-base sm:text-xl text-[#181818]">
                        {t('about.contact')}
                    </p>
                </div>
                <div className="py-4 md:py-8"></div>
            </div>
            <div className="bg-[#181818] text-center py-10 px-4 sm:px-8 md:px-64">
                <h1 className="text-[#F6F6F6] text-2xl sm:text-3xl mb-5">{t('about.missionTitle')}</h1>
                <p className="text-[#FAFAFA] text-base sm:text-xl">
                    {t('about.missionDesc')}
                </p>
            </div>
            <div className="max-w-5xl mx-auto py-10 px-4 sm:px-6 mb-[50px]">
                <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">{t('about.valuesTitle')}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg text-center hover:bg-gray-100">
                        <div className="w-12 h-12 border-2 border-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                            <div className="w-8 h-8 border-2 border-gray-300 rounded-full"></div>
                        </div>
                        <h3 className="text-lg sm:text-xl font-semibold mb-2">{t('about.card1.title')}</h3>
                        <p className="text-gray-600 text-sm sm:text-base">
                            {t('about.card1.subtitle')}
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg text-center hover:bg-gray-100">
                        <div className="w-12 h-12 border-2 border-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                            <div className="w-8 h-8 border-2 border-gray-300 rounded-full"></div>
                        </div>
                        <h3 className="text-lg sm:text-xl font-semibold mb-2">{t('about.card2.title')}</h3>
                        <p className="text-gray-600 text-sm sm:text-base">
                            {t('about.card2.subtitle')}
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg text-center hover:bg-gray-100">
                        <div className="w-12 h-12 border-2 border-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                            <div className="w-8 h-8 border-2 border-gray-300 rounded-full"></div>
                        </div>
                        <h3 className="text-lg sm:text-xl font-semibold mb-2">{t('about.card3.title')}</h3>
                        <p className="text-gray-600 text-sm sm:text-base">
                            {t('about.card3.subtitle')}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutAoron;