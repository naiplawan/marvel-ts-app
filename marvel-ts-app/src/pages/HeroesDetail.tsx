import { useState, useEffect } from "react";
import { useRoute, useLocation } from "wouter";
import { useHeroes } from "../hooks/useHeroes";
import { useTitle } from "../hooks/useTitle";

const HeroesDetail = () => {
    const [, params] = useRoute('/heroes/:heroesName')
    const heroesName = decodeURI(params!.heroesName)
    const { getHeroesByName } = useHeroes()
    const [heroData, setHeroData] = useState({
        img: "",
        link: "",
        biography: ""
    });
    const [isLoading, setIsLoading] = useState(true);
    const [, setLocation] = useLocation()
    useTitle(`Heroes | ${heroesName}`)

    useEffect(() => {
        const { img, link, biography } = getHeroesByName(heroesName);
        setTimeout(() => {
            setHeroData({ img, link, biography });
            setIsLoading(false);
        }, 500);
    }, [getHeroesByName, heroesName]);

    return (
        <div className="flex flex-col items-center p-8 min-h-screen bg-gray-800 text-white ">
            <div className=" flex flex-col md:flex-col md:gap-4 md:w-[calc(80%+1rem)] lg:w-[calc(70%+1rem)] items-center p-10 border-dashed border-2 rounded-xl">
                <div className="flex flex-col items-center w-full">
                    {isLoading ? (
                        <div className="animate-pulse flex flex-col items-center w-full">
                            <div className="h-40 w-40 md:h-60 md:w-60 rounded-full bg-gray-700"></div>
                            <div className="h-8 w-48 md:h-12 md:w-72 rounded-full bg-gray-700 my-3"></div>
                        </div>
                    ) : (
                        <>
                            <a href={heroData.link} target="_blank">
                                <p className="font-mono font-bold-text-2xl lg:text-3xl text-center hover:text-gray-300">
                                    {heroesName}
                                </p>
                            </a>
                            <img src={heroData.img} className="lg:h-40 md:h-28 object-cover my-3" alt={heroesName} />
                        </>
                    )}
                </div>

                <p className="font-mono md:text-base lg:text-lg p-3 lg:p-0">
                    {isLoading ? (
                        <div className="h-4 w-full bg-gray-700 rounded-full my-3"></div>
                    ) : (
                        heroData.biography
                    )}
                </p>
                <button onClick={() => setLocation('/heroes')} className="text-black bg-white rounded-lg p-3">Go back</button>
            </div>
        </div>
    )
}

export default HeroesDetail