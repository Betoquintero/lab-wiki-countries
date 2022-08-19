import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom';

export default function CountriesList2() {
  const [country, setCountry] = useState(null);

  useEffect(() => {
    const getCountry = async () => {
      try {
        const response = await axios.get('https://ih-countries-api.herokuapp.com/countries');
        setCountry(response.data);
        console.log(response.data)
      } catch (error) {
        console.error(error)
      }
    }
    getCountry();
  }, [])

  return (
    <div>
            <h2>List</h2>      
            {country && country.map(elem => {
                return <p key={elem.alpha3Code}><Link to={`/list2/${elem.alpha3Code}`}>{elem.name.common}</Link></p>
            })}

            {!country && <p>Loading</p>}
            <Outlet />   
    </div>
  )
}