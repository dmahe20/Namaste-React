import React, { useState, useEffect, useCallback } from "react";
import  ReactDOM  from "react-dom/client";

const DebouncingSecond = () =>{

    const [search,setSearch] = useState([]);


    const debounce = (func) =>{
        let timer;
        return function(...args){
            const context = this;
            if(timer) clearTimeout(timer);
            timer = setTimeout(() => {
                timer = null;
                func.apply(context,args);
            },500);
        }
    }

    const handleChange = async (event) =>{
        const {value} = event.target;
        await fetch(`https://jsonplaceholder.typicode.com/users?q=${value}`)
        .then((response) => response.json())
        .then((json) => setSearch(json.data));
    }

    //useCallback will provide a memoized callback 
    const optimizedVersion =  useCallback(debounce(handleChange), []);

    return(
        <div>
            <input type='text'
                   placeholder="Enter Something....."
                   value={search}
                   onChange={optimizedVersion}
            />
            {search?.length > 0 && 
            <div>
                {search.map((id, index) => <div key={index}>
                    <span>{id.name}</span>
                </div>)}
            </div>
            }
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<DebouncingSecond />);
export default DebouncingSecond;