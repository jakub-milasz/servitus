import React from "react";
import cityNames from "../pages/CityPage.jsx";
import logo2 from '../img/logo2.jpeg'

export default function Links() {
  console.log(cityNames);
  return (
    <div className="links">
      <img src={logo2} alt='Logo' className="logo" />
      <h2>Przydatne linki</h2>
      <a href="/warszawa">Odszkodowania za przesył Warszawa</a><br />
      <a href="/krakow">Odszkodowania za przesył Kraków</a><br />
      <a href="/wroclaw">Odszkodowania za przesył Wrocław</a><br />
      <a href="/poznan">Odszkodowania za przesył Poznań</a><br />
      <a href="/katowice">Odszkodowania za przesył Katowice</a><br />
    </div>
  );
}