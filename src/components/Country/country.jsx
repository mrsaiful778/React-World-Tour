import { useState } from 'react';
import './Country.css';
const Country = ({country, handleVisitedCountry}) => {
    
    const {name, flags, population, area, region, cca3} = country;

    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        setVisited(!visited);
        
    }

    console.log(handleVisitedCountry);
    return (
        
        <div className={`countries ${visited && 'visited'}`}>
            <h3 style={{color: visited ? 'Purple' : 'black' }}>Name : {name?.common} </h3>
            <img src={flags.png} alt="" />
            <p>Population : {population}</p>
            <p>Area {area}</p>
            <p>Region: {region}</p>
            <p><small>Code : {cca3}</small></p>
            <button>Mark visited</button>
            <br />
            <button onClick={handleVisited}> {visited ? 'Visited' : 'Going'} </button>
            {visited ? 'I have visited this country' : 'I want to visit..'}
           
        </div>
    );
};

export default Country;