import { Shimmer } from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from '../Utils/useRestaurantMenu';
import ResCategories from "./ResCategories";

const RestaurantMenu = () =>{

    //const [resInfo, setResInfo] = useState(null);

    const {resId} = useParams();
    //creating custom hooks
    const resInfo = useRestaurantMenu(resId);

    // useEffect(() =>{
    //     fetchData();
    // },[]);

    // const fetchData = async () => {
    //     const data = await fetch(MENU_URL + resId);
    //     const json = await data.json();
    //     setResInfo(json.data);
    // };
    if( resInfo === null ) return  <Shimmer /> ;
    const {name} = resInfo?.cards[0]?.card?.card?.info;
    
    const itemCards  = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log("items cards", itemCards);
    console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.["@type"] === 
    "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory");

    console.log(categories);

    //const itemCardsTotl = resInfo?.carousel[0]?.dish.info.name;
    return (
        <div className="menu">
            <h1>{name}</h1>
            <h1>{resInfo?.cards[0]?.card?.card?.info?.cuisines.join(" ")}</h1>
            <h2>Menu</h2>

           { /** categories accordion*/}
           {categories.map((category) => {<ResCategories data={category?.card?.card?.categories}/>})}
        </div>
    )
}
export default RestaurantMenu;