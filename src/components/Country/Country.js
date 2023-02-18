import React from 'react';
import './Country.css';

const Country = (props) => {
  const {capital, flags, name, region}= props.country;
    return (
        <div className="country">
        <h3>Name: {name.official}</h3>
        <img src={flags.png} alt={flags.alt} />
        <p>Capital: {capital}</p>
        <h4>Region: {region}</h4>

      </div>
    );
};

export default Country;