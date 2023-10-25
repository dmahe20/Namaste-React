import React, { useCallback, useState } from "react";
import ReactDOM from 'react-dom/client';

const ThrotllingAndDebouncing = () => {

    const [searchText,setSearchText] = useState();

   
    const debounce = (func) =>{
        let timer;
        return function(...args){
            const context = this;
            if(timer) clearTimeout(timer);
           timer =  setTimeout(()=>{
            timer = null;
                func.apply(context,args)
            },500)
        }
    }
    const throttling =(func) =>{
        let timeout=false;
        return function(...args){
            if(!timeout) {
            timeout = setTimeout(() =>{
                func.apply(this,args)
                timeout = false;
            },1000)
        }
        }
    }
    const handleChangeDebouncing  = async (event) =>{
        const {value} = event.target;
        await fetch(`https://jsonplaceholder.typicode.com/users?q=${value}`)
        .then((response) => response.json())
        .then((json) => setSearchText(json.data))
    }

    const handleChangeThrottling = async (event) => {
        const {value} = event.target;
        await fetch(`https://jsonplaceholder.typicode.com/users?q=${value}`)
        .then((response) => response.json())
        .then((json) => setSearchText(json.data))      
    }

    const debounceOptimizedVersion = useCallback(debounce(handleChangeDebouncing),[]);
    const throttlingOptimizedversion = useCallback(throttling(handleChangeThrottling),[]);
    return(
    <div>
        <input type='text'
               placeholder="Enter debouncing text......."
               value={searchText}
               onChange={debounceOptimizedVersion}
        
        />
        <input type='text'
            placeholder="Enter throttling text..."
            value={searchText}
            onChange={throttlingOptimizedversion}
            />
    </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ThrotllingAndDebouncing />);
export default ThrotllingAndDebouncing;
