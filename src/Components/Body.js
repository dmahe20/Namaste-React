import RestaurantCart,{withVegLabel} from "./RestaurantCart";
import { restaurantList } from "../Utils/mockData";
import { useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";
import useOnlineStatus from "../Utils/useOnlineStatus";
import { Link } from "react-router-dom";
 

const Body = () => {
  let listOfRestaurantsJS = [
    {
      data: {
        id: "74453",
        name: "Domino's Pizza",
        uuid: "87727dbd-7f2b-4857-9763-359624165845",
        city: "21",
        area: "Athwa",
        totalRatingsString: "1000+ ratings",
        cloudinaryImageId: "bz9zkh2aqywjhpankb07",
        cuisines: ["Pizzas"],
        costForTwo: 40000,
        costForTwoString: "₹400 FOR TWO",
        deliveryTime: 45,
        avgRating: 4.1,
      },
    },
    {
      data: {
        id: "74454",
        name: "Social",
        uuid: "87727dbd-7f2b-4857-9763-359624165845",
        city: "21",
        area: "Athwa",
        totalRatingsString: "1000+ ratings",
        cloudinaryImageId: "bz9zkh2aqywjhpankb07",
        cuisines: ["Burgers"],
        costForTwo: 40000,
        costForTwoString: "₹400 FOR TWO",
        deliveryTime: 50,
        avgRating: 3.8,
      },
    },
    {
      data: {
        id: "74456",
        name: "MacD",
        uuid: "87727dbd-7f2b-4857-9763-359624165845",
        city: "21",
        area: "Athwa",
        totalRatingsString: "1000+ ratings",
        cloudinaryImageId: "bz9zkh2aqywjhpankb07",
        cuisines: ["Burgers"],
        costForTwo: 40000,
        costForTwoString: "₹400 FOR TWO",
        deliveryTime: 50,
        avgRating: 4.6,
      },
    },
  ];

  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setsearchText] = useState("");

  const VegLabelCart = withVegLabel(RestaurantCart);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
    );
    const resp = await data.json();

    //optional chaining
    setListOfRestaurants(
      resp?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      resp?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // //conditional Rendering
  // if(listOfRestaurants.length === 0){
  //     return <Shimmer />
  // }

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) return <h1> You are offline!! Please check your internet </h1>;

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              //filter by restaurant card
              const filteredRes = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredRes);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            const filteredListOfRestaurants = listOfRestaurants.filter(
              (response) => response.info.avgRating > 4.0
            );
            setFilteredRestaurants(filteredListOfRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <Link
           key = {restaurant.info.id}
           to = {"./restaurant/" + restaurant.info.id}
          >
          {restaurant.info.veg ? ( <VegLabelCart resData={restaurant} /> ):
         (<RestaurantCart  resData={restaurant} />)}
         </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
