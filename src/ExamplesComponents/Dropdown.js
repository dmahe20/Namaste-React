import { useState } from "react";

export default function Dropdown(){
    const countries=[
        {
            name:'India',
            states:[
                {
                    name:"Karnataka",
                    cities:["Bengaluru", "Mysuru", "Chikmangalore"]
                },
                {
                    name:"Madhya Pradesh",
                    cities:["Bhopal", "Indore", "Gwalior"]
                },
                {
                    name:"Uttar Pradesh",
                    cities:["Lucknow", "Kanpur", "Agra"]
                },
            ]
        },
        {
            name:'United States',
            states:[
                {
                    name:"Virgina",
                    cities:["V1, V2, v3"]
                },
            ],
        },

    ];

    const [Country, setCountry] = useState('--Country--');
    const [State, setState] = useState('--State--');
    const [City, setCity] = useState('--City--');
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);

    const changeCountry = (event) => {
        setCountry(event.target.value);
        setStates(countries.find(ctr => ctr.name === event.target.value).states);
    }

    const changeState =(event) =>{
        setState(event.target.value);
        setCities(states.find(state => state.name === event.target.value).cities);
    }

    const changeCity =(event) =>{
        setCity(event.target.value);
    }

    return(
        <div className='justify-content-center d-flex w-100 vh-100 bg-dark text-white'>
            <div className='w-50 mt-5'>
                <h3>Select Countries and Cities</h3>
                <select className='form-control' value={Country} onChange={changeCountry}>
                    <option>--Country--</option>
                    {countries.map(ctr =>(
                        <option value={ctr.name}>{ctr.name}</option>
                    ))}
                </select>
                <br />
                <select className='form-control' value={State} onChange={changeState}>
                    <option>--State--</option>
                    {states.map(state => (
                        <option value={state.name}>{state.name}</option>
                    ))}
                </select>
                <br />
                <select className='form-control' value={City} onChange={changeCity}>
                    <option>--City--</option>
                    {cities.map(city =>(
                        <option value={city}>{city}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}