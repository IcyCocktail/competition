import React, { useState, useEffect } from "react";

const SecCard = ({ sec, details }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    // Detect if the device is touch-enabled
    useEffect(() => {
        setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
    }, []);

    // Flip only on click (for desktops)
    const handleClick = () => {
        if (!isTouchDevice) {
            setIsFlipped(!isFlipped);
        }
    };

    return (
        <div className={`card ${isFlipped ? "flipped" : ""}`} onClick={handleClick}>
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
