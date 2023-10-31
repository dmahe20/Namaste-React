import React, { useState, useEffect, useRef } from 'react';
import  ReactDOM  from "react-dom/client";
import axios from 'axios';

const Autocomplete = () =>{
    const [display, setDisplay] = useState(false);
    const [countries, setCountries] = useState([]);
    const [countryMatch, setCountryMatch] = useState([]);
    const wrapperRef = useRef(null);


    useEffect(()=>{
       const loadCountries = async ()=>{
        const response = await axios.get('https://restcountries.com/v2/all');
        setCountries(response.data);
       };
       loadCountries();
    },[]);

    useEffect(() => {
        window.addEventListener("mousedown", handleClickOutside);
        return () => {
          window.removeEventListener("mousedown", handleClickOutside);
        };
      });
      const handleClickOutside = (event) => {
        const { current: wrap } = wrapperRef;
        if (wrap && !wrap.contains(event.target)) {
          setDisplay(false);
        }
      };
    // const fetchData = async () =>{
    //     const response = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${i + 1}`);
    //     const data = await response.json();
    //     console.log(data);
    //     setoptions(data);
    // }
 
    console.log(countries);

   const searchCountries = (text) =>{
    if(!text){
        setCountryMatch([]);
    }else{
        let matches = countries.filter((country)=>{
            const regex = new RegExp(`${text}`,"gi");
            return country.name.match(regex);
     })
     setCountryMatch(matches);
    }
   };

    return(
        <div ref={wrapperRef} className="flex-container flex-column pos-rel">
            <h1>Custom Autocomplete React</h1>
            <input id='auto'
                   type='text'
                   placeholder= 'Type to Search...'
                   onClick={() => setDisplay(true)}
                   onBlur={() => setDisplay(false)}
                   onChange={(e) => searchCountries(e.target.value)}
                   />
                   {display &&
                   (
                    <div>
                    {countryMatch && countryMatch.map((item,index)=>(
                    <div key={index}>
                       <li> Name : {item.name}</li> 
                        <li>Capital :{item.capital}</li>
                    </div>
                   ))
                   }
                    </div>
                 )}
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Autocomplete />);
export default Autocomplete;