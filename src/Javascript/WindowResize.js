import React,{useState, useEffect} from "react";
import  ReactDOM  from "react-dom/client";

const WindowResize =() =>{
    const [windowDimension,setWindowDimension] = useState(
       {
        winWidth : window.innerWidth,
        winHeight : window.innerHeight
       } 
    );

    const detectSize = () =>{
        setWindowDimension({
            winWidth : window.innerWidth,
            winHeight : window.innerHeight
        })
    }

    useEffect(() =>{
        console.log("inside useEffect");
        window.addEventListener('resize',detectSize);
        return () => {
            window.removeEventListener('resize',detectSize);
        }
    },[])

    return(
    
        <div>
        <div>
            { console.log("inside return")}
            Screen Resize
            <p>Width : {windowDimension.winWidth}</p>
            <p>Height : {windowDimension.winHeight}</p>
        </div>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<WindowResize />);
export default WindowResize;