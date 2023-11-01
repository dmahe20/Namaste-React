import React, { useState, useEffect, useCallback } from "react";
import  ReactDOM  from "react-dom/client";
import axios from "axios";

import React, { useState, useEffect } from "react";
import axios from "axios";

const Debounce = () => {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const delayTimer = setTimeout(() => {
      if (searchText) {
        fetchData();
      }
    }, 500);

    return () => clearTimeout(delayTimer);
  }, [searchText]);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users?q=${searchText}`);
      setData(response.data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1>Debounce</h1>
      <form>
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </form>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Debounce />);
export default Debounce;
