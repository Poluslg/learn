import React, { useState } from 'react'

const countries = [
    { name: "India", value: "IN", cities: ["Delhi", "Mumbai"] },
    { name: "Pak", value: "PK", cities: ["Karachi", "Lahore"] },
    { name: "Bangladesh", value: "BD", cities: ["Dhaka", "Chittagong"] },
];

const Appthree = () => {
    const [country, setcountry] = useState({
        name: "",
        value: "",
        cities: [],
    })
    const display = () => {
        console.log(country.name, country.cities);
    };

    return (
        <div className='selected'>
            {/* 1st select */}
            <select
                value={country.value} onChange={(e) => {
                    const selectedCountry = countries.find(c => c.value === e.target.value);
                    setcountry(selectedCountry);
                    // console.log(selectedCountry)
                }}>
                <option>--Select--</option>
                {
                    countries.map((item, index) => {
                        return (<option key={index} value={item.value}>{item.name} </option>)
                    })
                }
            </select>
            {/* 2nd select */}
            <select
                value={country.cities.length > 0 ? country.cities[0] : ''}
                onChange={(e) => {
                    setcountry({ ...country, cities: [e.target.value] });
                }}
            >
                <option>--Select--</option>
                {
                    country.cities.map((item, index) => {
                        return <option key={index} value={item}>{item}</option>
                    })
                }
            </select>
            <button onClick={display}>submit</button>

        </div>
    )
}

export default Appthree
