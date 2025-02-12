import React, { useState, useEffect } from "react";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";

const Countdown = () => {
  const [targetTime, setTargetTime] = useState(new Date("2025-04-10T23:59:59").getTime());
  const [isOver, setIsOver] = useState(false);

  useEffect(() => {
    // Reset when targetTime changes
    setIsOver(new Date().getTime() >= targetTime);

    const interval = setInterval(() => {
      if (new Date().getTime() >= targetTime) {
        setIsOver(true);
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetTime]); // Now it updates if targetTime changes

  return (
    <div className="countdown">
      <h3 style={{ color: isOver ? "var(--berry)" : "var(--forest)" }}>
        {isOver ? "انتهى وقت الترشيح!" : "باقي على إغلاق الترشيح:"}
      </h3>
      <FlipClockCountdown
        to={targetTime}
        className="flip-clock"
        labels={["الأيام", "الساعات", "الدقائق", "الثواني"]}
        labelStyle={{ fontSize: "20px", color: "var(--forest)", fontFamily: "medium", textShadow: "2px 2px rgba(0, 0, 0, 0.2)" }}
        digitBlockStyle={{ backgroundColor: "var(--forest)", color: "white", fontFamily: "medium", boxShadow: "3px 3px rgba(0, 0, 0, 0.2)"}}
        dividerStyle={{ color: "var(--darkness)" }}
        showSeparators
      />
    </div>
  );
};

export default Countdown;
