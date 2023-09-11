import { useState } from 'react';
import './Country.css';
import CountryDetail from '../Countrydetail/CountryDetail';
const Country = ({country, handleVisitedCountry, handleVisitedFlags}) => {
    const {name, flags, population, area, region, cca3} = country;
    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        setVisited(!visited);
    }
    return (
        
        <div className={`countries ${visited && 'visited'}`}>
            <h3 style={{color: visited ? 'Purple' : 'black' }}>Country Name : {name.common} </h3>
            <img src={flags.png} alt="" />
            <p>Population : {population}</p>
            <p>Area {area}</p>
            <p>Region: {region}</p>
            <p><small>Code : {cca3}</small></p>
            <button onClick={() => handleVisitedCountry(country)}>Mark visited</button> 
            <br />
            <br />
            <button onClick={() => handleVisitedFlags(country.flags.png)}>Add Flags</button>
            <button onClick={handleVisited}> {visited ? 'Visited' : 'Going'} </button>
            {visited ? 'I have visited this country' : 'I want to visit..'}
           <hr />
           <CountryDetail>
                            country= {country}
                            handleVisitedCountry={handleVisitedCountry}
                            handleVisitedFlags={handleVisitedFlags}
           </CountryDetail>
        </div>
    );
};

export default Country;