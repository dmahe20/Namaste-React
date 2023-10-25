import React from "react";

class UserClass extends React.Component {

    constructor(props){
        super(props);
        console.log("props",props);
        this.state={
            count :0,
            count2 : 1
        };
        console.log(this.props.name + "constructor");
    }

    componentDidMount(){
        //api call is done in component did mount
        console.log(this.props.name + "component did mount");
    }

    render(){
        console.log(this.props.name  + "render");
        const {name, location, avatar_url} = this.props;
        const {count2} = this.state;
        return(
            <div className="User-card">

                <img src={avatar_url} />
                <h2>Name : {name}</h2>
                <h2>Location - {location}</h2>
                <h2>Count Class: {this.state.count}</h2>
                <button onClick={() => {
                    this.setState({
                        count : this.state.count + 1})
                    }}>Add count</button>
                <h3>Count2 : {count2}</h3>
            </div>
        );
    }
}
export default UserClass;