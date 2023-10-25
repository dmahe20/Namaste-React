import { CDN_URL, LOGO_URL } from "../Utils/constants";

export const RestaurantCart = (props) => {
    const {resData} = props;

    const {
        cloudinaryImageId,
        name, 
        cuisines, 
        avgRating, 
        costForTwo, 
        deliveryTime
    } = resData?.info;

    return (
        <div className="res-cart">
            <img className="social-logo"
                alt="social-logo"
                src={
                      CDN_URL+
                      cloudinaryImageId
                    }
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(',')}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo / 100} Rupees For Two</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    )
};

//Higher order component
// input Restaurant cart ==> enhances with veg label and return new component restaurant card with veg label


export const withVegLabel = (RestaurantCart) =>{
    return (props) =>{
        return(
            <div>
            <label className="label-veg">Veg</label>
            <RestaurantCart {...props}/>
            </div>
        )
    }
}

export default RestaurantCart;