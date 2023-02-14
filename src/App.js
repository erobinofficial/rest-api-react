import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <LoadCountries></LoadCountries>
    </div>
  );
}

const LoadCountries = () => {
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
      {
        countries.map((country, index) => <DisplayCountries key={index} name={country.name} capital={country.capital}></DisplayCountries>)
      }
    </div>
  )
}

const DisplayCountries = (props) => {
  return(
    <div className="countries">
      <h3>Name: {props.name.official}</h3>
      <p>Capital: {props.capital}</p>
    </div>
  )
}

export default App;
