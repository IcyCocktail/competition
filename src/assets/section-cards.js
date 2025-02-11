import React, { useState } from "react";

const SecCard = ({ sec, details }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div 
            className={`card ${isFlipped ? "flipped" : ""}`} 
            onClick={handleFlip} // Click to flip
        >
            <div className="card-inner">
                <div className="card-front">
                    <p className="card-head">{sec}</p>
                </div>
                <div className="card-back">
                    <p className="card-desc">{details}</p>
                </div>
            </div>
        </div>
    );
};

export default SecCard;
