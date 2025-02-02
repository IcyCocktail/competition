import React from "react";

const DateCard = ({ day, month, year, event }) => {
    return (
        <div className="date">
            <div className="d">
                <h4>
                    {day}
                </h4>
                <p>
                    {month} - {year}
                </p>
            </div>
            <p>
                {event}
            </p>
        </div>
    )
}

export default DateCard;