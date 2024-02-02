import { useEffect, useState } from "react";

export default function Checkbox(){
    const userData = [
        {
            name:'Darshana'
        },
        {
            name:'Rahul'
        },
        {
            name:'Afroz'
        },
        {
            name:'Prince'
        },
    ];

    const [users,setUsers] = useState([]);

    useEffect(() => {
        //incase of api call axios.get()
        //setUsers(response.data)

        setUsers(userData);
    },[]);

    const handleChange = (event) =>{
        const {name,checked} = event.target;
        if(name==="allSelect"){
            let tempUser = users.map(user => {return {...user, isChecked : checked}});
            setUsers(tempUser);
        }else{
            let tempUser = users.map((user) => 
            user.name === name ? {...user, isChecked : checked} : user
            );
            setUsers(tempUser);
        }
    }

    return(
        <div className='container my-4' style={{width :400}}>
            <form className='form'>
                <h3>Select Users</h3>
                <div className='form-check'>
                    <input type="checkbox" 
                           className='form-check-input'
                           name="allSelect"
                           checked={users.filter(user => user?.isChecked !== true).length < 1}
                           onChange={handleChange}
                           />
                    <label className='form-check-label ms-2'>All Select</label>
                </div>
                {users.map((user) => (
                    <div className='form-check'>
                    <input type="checkbox" 
                           className='form-check-input' 
                           name={user.name}
                           checked={user?.isChecked || false}
                           onChange={handleChange} 
                           />
                    <label className='form-check-label ms-2'>{user.name}</label>
                </div>
                ))}
            </form>
        </div>
    )
}