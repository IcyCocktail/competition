import React, { useEffect, useState } from "react";
import "@pqina/flip/dist/flip.min.css"; // Correct default import
import "./styles.css";

const Countdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: "00", hours: "00", minutes: "00", seconds: "00", expired: true };
    }

    return {
      days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0"),
      hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
      minutes: String(Math.floor((difference / (1000 * 60)) % 60)).padStart(2, "0"),
      seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
      expired: false,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    timeLeft.expired ? (
      <div className="clock-box expired">
        <h3>أُغلق الترشيح</h3>
        <div className="flip-clock">
          <div className="time-box">
            <Flip>{timeLeft.days}</Flip> {/* Apply flip effect here */}
            <p>الأيام</p>
          </div>
          <div className="time-box">
            <Flip>{timeLeft.hours}</Flip> {/* Apply flip effect here */}
            <p>الساعات</p>
          </div>
          <div className="time-box">
            <Flip>{timeLeft.minutes}</Flip> {/* Apply flip effect here */}
            <p>الدقائق</p>
          </div>
          <div className="time-box">
            <Flip>{timeLeft.seconds}</Flip> {/* Apply flip effect here */}
            <p>الثواني</p>
          </div>
        </div>
      </div>
    ) : (
      <div className="clock-box going">
        <h3>باقي على إغلاق الترشيح</h3>
        <div className="flip-clock">
          <div className="time-box">
            <Flip>{timeLeft.days}</Flip> {/* Apply flip effect here */}
            <p>الأيام</p>
          </div>
          <div className="time-box">
            <Flip>{timeLeft.hours}</Flip> {/* Apply flip effect here */}
            <p>الساعات</p>
          </div>
          <div className="time-box">
            <Flip>{timeLeft.minutes}</Flip> {/* Apply flip effect here */}
            <p>الدقائق</p>
          </div>
          <div className="time-box">
            <Flip>{timeLeft.seconds}</Flip> {/* Apply flip effect here */}
            <p>الثواني</p>
          </div>
        </div>
      </div>
    )
  );
};

export default Countdown;
