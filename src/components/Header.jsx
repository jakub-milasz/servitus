import React from "react";

export default function Header({ cityName }) {
  return (
    <header>
      <h1>Odszkodowania za przesył {cityName}</h1>
    </header>
  );
}