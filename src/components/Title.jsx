import React from "react";
import logo from '../img/logo.jpeg'

export default function Title({ cityName }) {
  return (
    <>
      <div className='title'>
        <h1>Odszkodowania za przesył <br />{cityName}</h1>
        <img src={logo} alt='Logo' className="logo" />
      </div>
    </>
  );
}