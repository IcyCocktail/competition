import React from "react";

const branches = [
  { name: "الفرع الأول", prizes: [10000, 8000, 6000, 5000], ranks: ["الأول", "الثاني", "الثالث", "الرابع"] },
  { name: "الفرع الثاني", prizes: [8000, 6000, 5000, 4000], ranks: ["الأول", "الثاني", "الثالث", "الرابع"] },
  { name: "الفرع الثالث", prizes: [6000, 5000, 4000,3000], ranks: ["الأول", "الثاني", "الثالث", "الرابع"] },
  { name: "الفرع الرابع", prizes: [5000, 4000, 3000, 2500], ranks: ["الأول", "الثاني", "الثالث", "الرابع"] },
  { name: "الفرع الخامس", prizes: [3000, 2000, 1500, 1000], ranks: ["الأول", "الثاني", "الثالث", "الرابع"] },
];

export default function Branches() {
  return (

    <div className="branches-container">

      {branches.map((branch, index) => (

        <div key={index} className="branch">

          <h3>{branch.name}</h3>

          <div className="prizes">

            {branch.prizes.map((prize, idx) => (

              <div key={idx} className="prize">

                <span className="rank">{branch.ranks[idx]}</span> {/* Ranks */}
                <p className="amount">{prize} ريال</p> {/* Prize Amount */}

              </div>

            ))}

          </div>

        </div>

      ))}

    </div>
  );
}
