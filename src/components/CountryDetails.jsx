import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import countries from '../countries.json'
import { Link, Outlet } from 'react-router-dom';

export default function CountryDetails () {
    const { countryId } = useParams();
    const [detail, setDetail] = useState(null)

    useEffect(() => {
        const getData = async () => {
            for(let i = 0; i< countries.length; i++){
                let data = ''
                if(countries[i].alpha3Code === countryId) {
                    data = countries[i]
                    // console.log(data.capital)
                    setDetail(data)
                }
            }
        }
        getData();
      }, [countryId]);

    return (
        <>
            <div>
                {detail && (
                    <div>
                    <h3>Capital:{detail.capital}</h3>
                    <p>Area: {detail.area} m2</p>
                    <img src={`https://flagpedia.net/data/flags/icon/72x54/${detail.alpha2Code.toLowerCase()}.png`} />
                    <div>
                    {detail.borders.map(elem => {
                return <p key={elem}><Link to={`/list/${elem}`}>{elem}</Link></p>
            })}
                    </div> 
                    </div>                    
                )} 
                {!detail && <p>detail not found</p>}
           
            </div>
        </>
    )

}