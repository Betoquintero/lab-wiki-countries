import { Link, Outlet } from 'react-router-dom';
import countries from '../countries.json'


export default function CountriesList () {


    return (
        <div>
            <h2>List</h2>      
            {countries.map(elem => {
                return( 
                <>
                <p key={elem.alpha3Code}><Link to={`/list/${elem.alpha3Code}`}>{elem.name.common}</Link></p>
                <img src={`https://flagpedia.net/data/flags/icon/72x54/${elem.alpha2Code.toLowerCase()}.png`} />
                </>)
            })}
            <Outlet />           
        </div>
    )
}