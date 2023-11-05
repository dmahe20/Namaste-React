import React,{useState,useEffect} from 'react';
import  ReactDOM  from 'react-dom/client';
import axios from 'axios';



const TableWithSearchBar = () =>{

    const [fetchData, setfetchData] = useState([]);
    const [records, setRecords] = useState([]);

    useEffect(() =>{
         axios.get('https://jsonplaceholder.typicode.com/users')
        .then(result => {
            setfetchData(result.data)
            setRecords(result.data)
        })
        .catch(err => console.log(err));
    },[])

    const filterData = (event) =>{
        setRecords(fetchData.filter(result => result.name.toLowerCase().includes(event.target.value)));
    }

    return (
        <div>
            <input 
                type='text'
                placeholder='Type to Search...'
                onChange={filterData}
            />

            <table className='table'>
                <thead>
                <tr className=''>
                    <th>Id</th>
                    <th>Name</th>
                    <th>UserName</th>
                    <th>Email</th>
                    <th>City</th>
                </tr>
                </thead>
                <tbody>
                    {records.map((data,index) => (
                        <tr key={index}>
                            <td>{data.id}</td>
                            <td>{data.name}</td>
                            <td>{data.username}</td>
                            <td>{data.email}</td>
                            <td>{data.address.city}</td>
                        </tr>
                    ))}
                </tbody>
                
            </table>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<TableWithSearchBar />);
export default TableWithSearchBar;


