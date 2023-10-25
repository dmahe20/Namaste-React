import React from "react";
import User from "./User";
import UserClass from "./UserClass";


class AboutUs extends React.Component{
    constructor(props){
        super(props);
        console.log("Parent constructor");
        this.state = {
            userInfo :{
                name :' dummy',
                location :'dummy location',
            },
        };
    }

    async componentDidMount(){
        //api call is done in component did mount
        console.log("parent component did mount");

        const data = await fetch("https://api.github.com/users/akshaymarch7");
        const json = await data.json();
        console.log("json data", json);
        this.setState({
            userInfo: json
        })
    }

    componentDidUpdate(){
        console.log("update");
    }

    componentWillUnmount(){
        console.log("unmount");
    }

    render(){
        console.log("parent render");
        const {name, location,avatar_url} = this.state.userInfo;
        return (
            <div>
                <h1>About us</h1>
                <UserClass 
                name={name} 
                location={location} 
                avatar_url={avatar_url}/>
            </div>
        )
    }
}
// const AboutUs = () =>{
//     return (
//         <div>
//             <h1>About us</h1>
//             <User name ={"Darshana Functional"}/>
//             <UserClass name={"Darshana Class"} location={"Bhopal Class"}/>
//         </div>
//     )
// }

export default AboutUs;