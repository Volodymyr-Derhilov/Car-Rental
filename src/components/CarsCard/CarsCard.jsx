import { Link } from "react-router-dom";
import css from "./CarsCard.module.css";

export default function CarsCard({ car }) {
  const location = car.address.split(",");

  console.log(car);
  return (
    <>
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
            {car.type} <span className={css.line}>|</span> {car.mileage}
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
