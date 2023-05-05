import React, { useEffect, useState } from "react";
import HeroCard from "./HeroCard";
import "./HeroList.css";

const HeroList = () => {
    const [heroes, setHeroes] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedHero, setSelectedHero] = useState(null);

    useEffect(() => {
        const getHeroes = async () => {
            const response = await fetch("https://api.opendota.com/api/heroStats");
            const data = await response.json();
            setHeroes(data);
        };
        getHeroes();
    }, []);

    const filteredHeroes = heroes.filter((hero) =>
        hero.localized_name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleHeroClick = (hero) => {
        setSelectedHero(hero);
    };

    return (
        <div className="hero-list-container">
            <div className="search-bar">
                <input type="text" placeholder="Search Heroes" onChange={(e) => setSearchTerm(e.target.value)}/>
            </div>
            <div className="hero-list">{filteredHeroes.map((hero) => (
                    <HeroCard key={hero.id} hero={hero} onHeroClick={() => handleHeroClick(hero)}/>
                ))}
            </div>
        </div>
    );
};

export default HeroList;
