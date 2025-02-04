import React, { useState, useEffect } from "react";
import './styles.css';

const Countdown = ({ targetDate }) => {
    const calculateTimeLeft = () => {
        const difference = new Date(targetDate) - new Date();
        if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

        return {
            days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0"),
            hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
            minutes: String(Math.floor((difference / (1000 * 60)) % 60)).padStart(2, "0"),
            seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
        };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer); // Cleanup on unmount
    }, [targetDate]);

    return (
        <div className="countdown">

            {Object.entries(timeLeft).map(([label, value]) => (

                <div className="time-box" key={label}>
                    <div className="flip-card">
                        <div className="top">{value}</div>
                        <div className="bottom">{value}</div>
                    </div>
                    <span>{label.toUpperCase()}</span>
                </div>

            ))}
        </div>
    );
};

export default Countdown;