import { useEffect, useState } from "react";

const User = (props) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("inside timer");
    }, 1000);
    return () => {
      clearInterval(timer);
      console.log("clean up for use effect");
    };
  }, []);
  
  return (
    <div className="User-card">
      <h2>Name : {props.name}</h2>
      <h2>Location - Bengaluru</h2>
      <h2>Count Function: {count}</h2>
      <h3>Count 2: {count2}</h3>
    </div>
  );
};
export default User;
