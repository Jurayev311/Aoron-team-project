import React, { useEffect, useState } from 'react';
import { getTeam, imageUrl } from './Api';

const AboutAoron = () => {
    const [teamMembers, setTeamMembers] = useState([]);
    const [loadingTeam, setLoadingTeam] = useState(true);
    const [errorTeam, setErrorTeam] = useState(null);

    useEffect(() => {
        const fetchTeamData = async () => {
            try {
                const data = await getTeam();
                if (data && data.length > 0) {
                    setTeamMembers(data);
                } else {
                    setErrorTeam("Team data not found or not available.");
                }
            } catch (error) {
                console.error("Error loading team data:", error);
                setErrorTeam("An error occurred while loading the data: " + error.message);
            } finally {
                setLoadingTeam(false);
            }
        };

        fetchTeamData();
    }, []);

    return (
        <>
            <div className="bg-[#FAFAFA] px-2">
                <div className="py-4 md:py-8"></div>
                <div className="max-w-4xl mx-auto p-4 sm:p-6 md:p-12 bg-white rounded-[20px] shadow-lg">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#171717] leading-9 mb-4">About AORON</h2>
                    <p className="text-base sm:text-lg leading-7 text-[#404004] font-normal mb-4">
                        AORON is a manufacturing brand offering stylish, quality and competitive apparel for B2B partnerships. We have been operating since 1991 and specialize in creating men's and women's clothing, focused on wholesale, retail chains and custom orders for brands and boutiques.
                    </p>
                    <p className="font-bold text-lg sm:text-xl text-[#181818] mb-4">
                        Today we develop two directions:
                        <ul className="font-normal text-sm sm:text-base text-[#262626] mt-2 list-disc ml-6">
                            <li>Prince - a classic line of men's suits, proven by time and quality;</li>
                            <li className="my-2">AORON - a modern brand with an expanded assortment: from casual wear to accessories and shoes.</li>
                        </ul>
                    </p>

                    <hr className="w-full text-gray-400" />

                    <h2 className="text-2xl sm:text-3xl leading-9 font-bold text-[#171717] mt-6 mb-4">Production facilities</h2>
                    <p className="text-[#404040] text-base sm:text-lg leading-7 mb-4">
                        Our company started with a team of 4 people and today employs over 100 people. In the summer of 2025, we are launching a new factory with the ability to scale production - up to 500 employees and 5000+ units per month.
                    </p>

                    <p className="font-bold text-lg sm:text-xl text-[#181818]">
                        We offer:
                        <ul className="font-normal text-sm sm:text-base text-[#262626] mt-2 list-disc ml-6 mb-4">
                            <li>Stable volumes and delivery terms</li>
                            <li className="py-1.5">Quality control at every stage</li>
                            <li>Flexibility to work under private label</li>
                            <li className="pt-1.5">Individual approach to B2B clients</li>
                        </ul>
                    </p>

                    <hr className="w-full text-gray-400" />

                    <h2 className="font-bold text-lg sm:text-xl text-[#181818] mt-6 mb-4">Why choose us</h2>
                    <ul className="font-normal text-sm sm:text-base text-[#262626] mt-2 list-disc ml-6 mb-4">
                        <li>More than 30 years of experience in the market of Uzbekistan</li>
                        <li className="py-1.5">Full cycle of production - from design to packaging</li>
                        <li>Ability to create collections for your brand</li>
                        <li className="py-1.5">Modern models inspired by global trends</li>
                        <li>Favorable conditions for distributors, marketplaces and stores</li>
                    </ul>

                    <hr className="w-full text-gray-400" />

                    <h2 className="font-bold text-lg sm:text-xl text-[#181818] mt-6 mb-4">New assortment 2025</h2>
                    <h2 className="font-normal text-base sm:text-xl text-[#181818] mb-2">Men's and women's T-shirts, shirts, shorts</h2>
                    <ul className="font-normal text-sm sm:text-base text-[#262626] mt-2 list-disc ml-6 mb-4">
                        <li>Men's and women's T-shirts, shirts, shorts</li>
                        <li className="py-1.5">Shoes, bags, belts, accessories</li>
                        <li>Custom tailoring</li>
                        <li className="pt-1.5">Collaborations and capsule collections to your specifications</li>
                    </ul>

                    <hr className="w-full text-gray-400" />

                    <h2 className="font-bold text-lg sm:text-xl text-[#181818] mt-6 mb-4">Ready for cooperation</h2>
                    <p className="font-normal text-base sm:text-xl text-[#181818]">
                        We are open to cooperation with:
                        <ul className="font-normal text-sm sm:text-base text-[#262626] mt-2 list-infection ml-6">
                            <li>wholesale buyers</li>
                            <li className="py-1.5">clothing stores</li>
                            <li>marketplaces</li>
                            <li className="py-1.5">international buyers</li>
                            <li>brands willing to produce collections under their name</li>
                        </ul>
                    </p>

                    <hr className="w-full mt-3 pb-3 text-gray-400" />

                    <p className="font-normal text-base sm:text-xl text-[#181818]">
                        📞 Contact us to get catalog, samples
                    </p>
                </div>
                <div className="py-4 md:py-8"></div>
            </div>
            <div className="bg-[#181818] text-center py-10 px-4 sm:px-8 md:px-64">
                <h1 className="text-[#F6F6F6] text-2xl sm:text-3xl mb-5">Our Mission</h1>
                <p className="text-[#FAFAFA] text-base sm:text-xl">
                    To create exceptional menswear that empowers men to look and feel their best, while maintaining a commitment to quality, sustainability, and ethical practices.
                </p>
            </div>
            <div className="max-w-5xl mx-auto py-10 px-4 sm:px-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">Our Values</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg text-center hover:bg-gray-100">
                        <div className="w-12 h-12 border-2 border-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                            <div className="w-8 h-8 border-2 border-gray-300 rounded-full"></div>
                        </div>
                        <h3 className="text-lg sm:text-xl font-semibold mb-2">Quality First</h3>
                        <p className="text-gray-600 text-sm sm:text-base">
                            We never compromise on quality. From fabrics to construction, every element is carefully chosen for excellence.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg text-center hover:bg-gray-100">
                        <div className="w-12 h-12 border-2 border-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                            <div className="w-8 h-8 border-2 border-gray-300 rounded-full"></div>
                        </div>
                        <h3 className="text-lg sm:text-xl font-semibold mb-2">Sustainability</h3>
                        <p className="text-gray-600 text-sm sm:text-base">
                            We're committed to reducing our environmental impact through responsible sourcing and sustainable practices.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg text-center hover:bg-gray-100">
                        <div className="w-12 h-12 border-2 border-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                            <div className="w-8 h-8 border-2 border-gray-300 rounded-full"></div>
                        </div>
                        <h3 className="text-lg sm:text-xl font-semibold mb-2">about.card3.title</h3>
                        <p className="text-gray-600 text-sm sm:text-base">
                            about.card3.subtitle
                        </p>
                    </div>
                </div>
            </div>
            {loadingTeam ? (
                <div className="flex justify-center items-center py-10">
                    <div className="flex space-x-3">
                        <div
                            className="w-5 h-5 bg-gray-500 rounded-full animate-pulse-custom"
                            style={{ animationDelay: '0s' }}
                        ></div>
                        <div
                            className="w-5 h-5 bg-gray-500 rounded-full animate-pulse-custom"
                            style={{ animationDelay: '0.2s' }}
                        ></div>
                        <div
                            className="w-5 h-5 bg-gray-500 rounded-full animate-pulse-custom"
                            style={{ animationDelay: '0.4s' }}
                        ></div>
                    </div>
                </div>
            ) : errorTeam ? (
                <div className="text-center py-10 text-red-500">{errorTeam}</div>
            ) : teamMembers.length > 0 ? (
                <div className="max-w-5xl mx-auto py-10 px-4 sm:px-6">
                    <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">Our Team</h2>
                    <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-10">
                        {teamMembers.map((member) => (
                            <div key={member.id} className="text-center">
                                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden mx-auto mb-4">
                                    {member.image ? (
                                        <img
                                            src={`${imageUrl}/${member?.image}`}
                                            alt={member.full_name}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                                            <svg
                                                className="w-12 h-12 sm:w-16 sm:h-16 text-gray-400"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                            </svg>
                                        </div>
                                    )}
                                </div>
                                <h3 className="text-lg sm:text-xl font-semibold">{member.full_name}</h3>
                                <p className="text-gray-600 text-sm sm:text-base">{member.position_en}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ) : null}
        </>
    );
};

export default AboutAoron;