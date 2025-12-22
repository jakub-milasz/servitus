import React from "react";
import cityNames from "../pages/CityPage.jsx";

export default function Links() {
  console.log(cityNames);
  return (
    <div className="links">
      <h2>Przydatne linki</h2>
      <a href="/warszawa">Odszkodowania za przesył Warszawa</a><br />
      <a href="/krakow">Odszkodowania za przesył Kraków</a><br />
      <a href="/wroclaw">Odszkodowania za przesył Wrocław</a><br />
      <a href="/poznan">Odszkodowania za przesył Poznań</a><br />
      <a href="/katowice">Odszkodowania za przesył Katowice</a><br />
    </div>
  );
}