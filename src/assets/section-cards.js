import React from "react";

const SecCard = ({ sec, details }) => {

    return (

        <div className="card">
            <div className="card-inner">
                <div className="card-front">
                    <p className="card-head">{sec}</p>
                </div>
                <div className="card-back">
                    <p className="card-desc">{details}</p>
                </div>
            </div>
        </div>

    )
}

export default SecCard;