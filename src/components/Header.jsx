import React from "react";
import logo from '../img/logo.jpeg'

export default function Header({ cityName }) {
  return (
    <header>
      <img src={logo} alt='Logo' className="logo" />
      <h1>Odszkodowania za przesył {cityName}</h1>
    </header>
  );
}