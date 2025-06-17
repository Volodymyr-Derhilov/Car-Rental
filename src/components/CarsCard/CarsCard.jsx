import { Link } from "react-router-dom";
import css from "./CarsCard.module.css";
import { CiHeart } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";

export default function CarsCard({ car }) {
  const location = car.address.split(",");
  return (
    <>
      <button type="button" className={css.favourite}>
        <CiHeart className={css.button__icon} />
      </button>
      <img src={car.img} alt={car.description} className={css.img} />
      <div className={css.description}>
        <div className={css.name__price}>
          <p className={css.name}>
            {car.brand} <span className={css.span}>{car.model}</span>,{" "}
            {car.year}
          </p>
          <p className={css.price}>${car.rentalPrice}</p>
        </div>

        <div className={css.location}>
          <p className={css.place}>
            {location[1]} <span className={css.line}>|</span> {location[2]}{" "}
            <span className={css.line}>|</span> {car.rentalCompany}{" "}
            <span className={css.line}>|</span>
            <br />
            {car.type} <span className={css.line}>|</span>{" "}
            {car.mileage.toLocaleString("en-US").replace(/,/g, " ")} km
          </p>
        </div>

        <button type="button" className={css.button}>
          <Link to={`/catalog/${car.id}`} className={css.link}>
            Read more
          </Link>
        </button>
      </div>
    </>
  );
}
