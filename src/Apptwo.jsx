import React, { useState } from 'react';

const countries = [
  { name: "India", value: "IN", cities: ["Delhi", "Mumbai"] },
  { name: "Pak", value: "PK", cities: ["Karachi", "Lahore"] },
  { name: "Bangladesh", value: "BD", cities: ["Dhaka", "Chittagong"] },
];

const Apptwo = () => {
  const [country, setcountry] = useState({
    name: "",
    value: "",
    cities: []
  });

  return (
    <div>
      <select value={country.value} onChange={(e) => {
        // console.log(e.target.value);
        const selectedCountry = countries.find(c => c.value === e.target.value);
        setcountry(selectedCountry);
      }}>
        {countries.map((item, index) => {
            
          return (<option key={index} value={item.value}>{item.name}</option>);
        })}
      </select>

      <select value={country.cities[0]} onChange={(e) => {
        // console.log(e.target.value);
        setcountry({...country, cities: [e.target.value]});
      }}>
        {country.cities.map((item, index) => {
          return <option key={index} value={item}>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default Apptwo;
