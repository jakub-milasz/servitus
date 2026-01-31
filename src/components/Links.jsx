import React from "react";
import logo2 from "../img/logo2.png";

export default function Links({ cityNames }) {
  const entries = Object.entries(cityNames);
  const chunkSize = 5;
  const end = entries.length % chunkSize;

  const columns = [];
  let counter = 1;
  for (let i = 0; i < entries.length - end; i += chunkSize) {
    if (counter <= end) {
      columns.push(entries.slice(i, i + chunkSize + 1));
    } else {
      columns.push(entries.slice(i, i + chunkSize));
    }
    counter++;
  }

  return (
    <>
      <div className="links">
        {columns.slice(0, columns.length / 2).map((column, colIndex) => (
          <div key={colIndex} className="column">
            {column.map(([cityKey, cityName]) => (
              <a key={cityKey} href={`/${cityKey}`} className="city-link">
                {cityName}
              </a>
            ))}
          </div>
        ))}
        <img src={logo2} alt="Logo" className="logo" />
          {columns.slice(columns.length / 2, columns.length).map((column, colIndex) => (
          <div key={colIndex} className="column">
            {column.map(([cityKey, cityName]) => (
              <a key={cityKey} href={`/${cityKey}`} className="city-link">
                {cityName}
              </a>
            ))}
          </div>
        ))}
        </div>
    </>
  );
}
