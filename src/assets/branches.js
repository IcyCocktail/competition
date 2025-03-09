import React, { useEffect, useRef, useState } from "react";

const branches = [
  { name: "الفرع الأول", prizes: [10000, 8000, 6000, 5000], ranks: ["الأول", "الثاني", "الثالث", "الرابع"] },
  { name: "الفرع الثاني", prizes: [8000, 6000, 5000, 4000], ranks: ["الأول", "الثاني", "الثالث", "الرابع"] },
  { name: "الفرع الثالث", prizes: [6000, 5000, 4000, 3000], ranks: ["الأول", "الثاني", "الثالث", "الرابع"] },
  { name: "الفرع الرابع", prizes: [5000, 4000, 3000, 2500], ranks: ["الأول", "الثاني", "الثالث", "الرابع"] },
  { name: "الفرع الخامس", prizes: [3000, 2000, 1500, 1000], ranks: ["الأول", "الثاني", "الثالث", "الرابع"] },
];

export default function Branches() {
  const [activeIndex, setActiveIndex] = useState(0);
  const branchesRef = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null, // Uses viewport as root
      rootMargin: "0px",
      threshold: 0.6, // Trigger when 60% of the branch is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveIndex(branchesRef.current.indexOf(entry.target));
        }
      });
    }, observerOptions);

    // Observe each branch
    branchesRef.current.forEach((branch) => observer.observe(branch));

    return () => {
      branchesRef.current.forEach((branch) => observer.unobserve(branch));
    };
  }, []);

  return (
    <div className="comp-prize">
      <div className="branches-container">
        {branches.map((branch, index) => (
          <div key={index} className="branch" ref={(el) => (branchesRef.current[index] = el)}>
            <h3>{branch.name}</h3>
            <div className="prizes">
              {branch.prizes.map((prize, idx) => (
                <div key={idx} className="prize">
                  <span className="rank">{branch.ranks[idx]}</span>
                  <p className="amount">{prize} ريال</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Dots Indicator */}
      <div className="dots">
        {branches.map((_, index) => (
          <span key={index} className={`dot ${index === activeIndex ? "active" : ""}`} />
        ))}
      </div>
    </div>
  );
}
