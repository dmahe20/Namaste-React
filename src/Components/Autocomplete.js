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
 

   const searchCountries = (text) =>{
    if(!text){
        setCountryMatch([]);
    }else{
        let matches = countries.filter((country)=>{
            const regex = new RegExp(`${text}`,"gi");
            return country.name.match(regex);
     })
     console.log("countrymatch",countryMatch);
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


//2nd sol

import React, { useEffect, useState, useRef } from "react";

import "./App.css";

const Auto = () => {
  const [display, setDisplay] = useState(false);
  const [options, setOptions] = useState([]);
  const [search, setSearch] = useState("");
  const wrapperRef = useRef(null);

  useEffect(() => {
    console.log(1);
    const pokemon = [];
    const promises = new Array(20)
      .fill()
      .map((v, i) => fetch(`https://pokeapi.co/api/v2/pokemon-form/${i + 1}`));
    Promise.all(promises).then((pokemonArr) => {
      return pokemonArr.map((value) =>
        value
          .json()
          .then(({ name, sprites: { front_default: sprite } }) =>
            pokemon.push({ name, sprite })
          )
         
      );
    });
    setOptions(pokemon);
  }, []);

  useEffect(() => {
    console.log(2);
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

  const updatePokeDex = (poke) => {
    setSearch(poke);
    setDisplay(false);
  };

  return (
   
    <div ref={wrapperRef} className="flex-container flex-column pos-rel">
       {console.log(3)}
      <input
        id="auto"
        onClick={() => setDisplay(!display)}
        placeholder="Type to search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      
      {display && (
        <div className="autoContainer">
          {options
            .filter(({ name }) => name.indexOf(search.toLowerCase()) > -1)
            .map((value, i) => {
              return (
                <div
                  onClick={() => updatePokeDex(value.name)}
                  className="option"
                  key={i}
                  tabIndex="0"
                >
                  <span>{value.name}</span>
                  <img src={value.sprite} alt="pokemon" />
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <h1>Custom AutoComplete React</h1>

      <div className="auto-container">
        <Auto />
      </div>
    </div>
  );
}

export default App;
