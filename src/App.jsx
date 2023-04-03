import React, { useState } from "react";

const countries = [
  { name: "India", value: "IN", cities: ["Delhi", "Mumbai"] },
  { name: "Pak", value: "PK", cities: ["Karachi", "Lahor"] },
  { name: "Bangladesh", value: "BD", cities: ["Dakha", "Chittagong"] },
];

const App = () => {
  const [country, setCountry] = useState([]);
  const [city, setCity] = useState("");

  const setCountryData = (value) => {
    let selectedCounry = countries.find((e) => e.value === value);
    setCountry(selectedCounry);
    setCity(null);
    document.getElementById("Citiesselect").value = "";
  };

  const setCityData = (value) => {
    setCity(value);
  };

  const display = () => {
    console.log(country.name, city);
  };

  return (
    <div className="center">
      <select onChange={($event) => setCountryData($event.target.value)}>
        <option>--Select--</option>
        {countries.map((item, index) => {
          return (
            <option key={index} value={item.value}>
              {item.name}
            </option>
          );
        })}
      </select>
      <select
        id="Citiesselect"
        onClick={($event) => setCityData($event.target.value)}
      >
        <option value={""}>--Select--</option>
        {country && country.cities ? (
          country.cities.map((item, index) => {
            return (
              <option key={index} value={item}>
                {item}
              </option>
            );
          })
        ) : (
          <></>
        )}
      </select>
      <button onClick={display}>submit</button>
    </div>
  );
};

export default App;
