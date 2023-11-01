import { useEffect, useState } from "react";
import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";

const Pagination = () => {
  const [data, setData] = useState(null);
  const [searchText, setsearchText] = useState("");
  const [filteredFirstname, setfilteredFirstname] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Current page number
  const [itemsPerPage, setItemsPerPage] = useState(10); // Number of items to display per page


  useEffect(() => {
    fetchData();
  }, [setData]);

  // const fetchData = async () =>{
  //     const data =await fetch('https://jsonplaceholder.typicode.com/posts');
  //     const json = await data.json();
  //     console.log("json data", json);
  // }

  const fetchData = async () => {
    await axios
      .get("https://jsonplaceholder.org/users")
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  };
   const indexOfLastItem = currentPage * itemsPerPage;
   console.log("indexOfLastItem",indexOfLastItem);
   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
   console.log("indexOfFirstItem",indexOfFirstItem);
   const currentData = data? data.slice(indexOfFirstItem, indexOfLastItem):[];
 

   const pageNumbers = data
   ? Array.from({ length: Math.ceil(data.length / itemsPerPage) }, (_, i) => i + 1)
   : [];
  if (data === null) {
    return <div>Loading...</div>;
  }

  const handleClickForSearch = async (e) => {
    console.log("search button clicked");
    e.preventDefault();
    try {
// If searchText is empty, just reset the data
if (!searchText) {
    fetchData();
    return;
  }
      // Filter the data based on the searchText
      const filteredRes = data.filter((item) =>
        item.firstname.toLowerCase().includes(searchText.toLowerCase())
      );

      // Update the filtered data state
      setfilteredFirstname(filteredRes);
    } catch (err) {
      console.log(err);
    }
  };

  const handleClickForReset = async (e) => {
    console.log("reset button clicked");
    e.preventDefault();
    fetchData();
    setsearchText(""); // Clear the search text input, if needed
    setfilteredFirstname([]);
  };
  
  return (
    <div className="pagination">
      <h1>Search, filter, sort using pagination</h1>
      <form>
        <input
          type="text"
          value={searchText}
          placeholder="Search name ...."
          onChange={(e) => setsearchText(e.target.value)}
        />
        <button className="search-btn" onClick={handleClickForSearch}>
          Search
        </button>
        <button className="reset-btn" onClick={handleClickForReset}>
          Reset
        </button>
      </form>
      <table className="table-main">
        <thead>
          <tr>
            <th scope="col">No.</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Address</th>
          </tr>
        </thead>
        <tbody>
          {searchText ? filteredFirstname.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.firstname}</td>
                  <td>{item.lastname}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.address.street}</td>
                </tr>
              ))
            : currentData.map((item, index) => (
                <tr key={item.id}>
                  <td>{(currentPage - 1) * 10 + index + 1}</td>
                  <td>{item.firstname}</td>
                  <td>{item.lastname}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.address.street}</td>
                </tr>
              ))}
        </tbody>
      </table>
      <div className="pagination-buttons">
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => setCurrentPage(number)}
            className={number === currentPage ? "active" : ""}
          >
            {number}
          </button>
        ))}
        <button
    onClick={() => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1); // Previous page
      }
    }}
  >
    Previous
  </button>
  <button
    onClick={() => {
      if (currentPage < pageNumbers.length) {
        setCurrentPage(currentPage + 1); // Next page
      }
    }}
  >
    Next
  </button>
        </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Pagination />);
export default Pagination;
