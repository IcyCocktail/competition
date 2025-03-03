import React from "react";

const branches = [
    { name: "الفرع الأول", prizes: [10000, 10000, 10000, 10000] },
    { name: "الفرع الثاني", prizes: [10000, 10000, 10000, 10000] },
    { name: "الفرع الثالث", prizes: [10000, 10000, 10000, 10000] },
    { name: "الفرع الرابع", prizes: [10000, 10000, 10000, 10000] },
    { name: "الفرع الخامس", prizes: [10000, 10000, 10000, 10000] }
  ];
  
  export default function Branches() {
    return (
      <div className="branches-container">

        {branches.map((branch, index) => (

          <div key={index} className="branch">

            <h2>{branch.name}</h2>

            <div className="prizes">

              {branch.prizes.map((prize, idx) => (

                <div key={idx} className="prize">

                  <span>{prize}</span>
                  <p>الأول</p>

                </div>

              ))}

            </div>

          </div>
          
        ))}

      </div>
    );
  }