import React, {useState} from "react";
import { Restaurante, RestaurantInfo, RestaurantPhoto, Title, Address  } from "./styled";
import ReactStars from "react-rating-stars-component";
import restaurante from "../../assets/restaurante-fake.png"
import styled from "styled-components";
import Skeleton from "../Skeleton";

const RestaurantCard = ({restaurant, onClick}) => {

    const [imageLoaded, setImageLoaded] = useState(false);
    return(
        <Restaurante onClick={onClick}>
            <RestaurantInfo>
                <Title>{restaurant.name}</Title>
                <ReactStars count={5} isHalf value={restaurant.rating} edit={false} activeColor="#e7711c" />
                <Address>{restaurant.vicinity || restaurant.formatted_address}</Address>
            </RestaurantInfo>
            <RestaurantPhoto
            imageLoaded={imageLoaded}
            src={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante}
            onLoad={() => setImageLoaded(true)} 
            alt="Foto do Restaurante"/>

            {!imageLoaded && <Skeleton width="100px"  height="100px"/>}
        </Restaurante>
    );
};
export default RestaurantCard;