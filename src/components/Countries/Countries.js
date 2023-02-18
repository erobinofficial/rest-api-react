import React from "react";
import './Countries.css';
import { useEffect, useState } from 'react';
import Country from "../Country/Country";
import './Countries.css';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
      fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data));
    },[])
  
    return (
      <div>
        <h1>All Countries Data Here</h1>
        <h2>Countries we have: {countries.length}</h2>
        <div className="countries-container">
        {
          countries.map((country, index) => <Country key={index} country={country}></Country>)
        }
        </div>
      </div>
    )
};

export default Countries;
 