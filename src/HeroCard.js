import React, { useState } from "react";
import "./HeroCard.css";

const HeroCard = ({ hero }) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpansion = () => {
        setExpanded(!expanded);
    };

    return (
        <div className={`hero-card ${expanded ? "expanded" : ""}`} onClick={toggleExpansion}>
            <img src={`https://api.opendota.com${hero.img}`} alt={hero.localized_name} />
            <div className="hero-info">
                <h2>{hero.localized_name}</h2>
                <p>{hero.attack_type}</p>
                <p>{hero.roles.join(", ")}</p>
                {expanded && (
                    <div className="hero-details">
                        <p>Base Health: {hero.base_health}</p>
                        <p>Base Health Regeneration: {hero.base_health_regen}</p>
                        <p>Base Mana: {hero.base_mana}</p>
                        <p>Base Mana Regeneration: {hero.base_mana_regen}</p>
                        <p>Base Armor: {hero.base_armor}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default HeroCard;
