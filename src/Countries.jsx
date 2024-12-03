import { useEffect, useState } from 'react';
import { Country } from './Country';

export const Countries = () => {
  let [countries, setCountries] = useState([]);
  let api = 'https://xcountries-backend.azurewebsites.net/all';
  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((err) => console.error('Error fetching data:', err));
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '1em',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      {countries.map((country) => (
        <Country
          name={country.name}
          flag={country.flag}
          abbr={country.abbr}
          key={country.abbr}
        />
      ))}
    </div>
  );
};
