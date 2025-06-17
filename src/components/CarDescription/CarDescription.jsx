import css from "./CarDescription.module.css";
import { CiLocationOn } from "react-icons/ci";
import { CiCircleCheck } from "react-icons/ci";
import { BsCalendarWeek } from "react-icons/bs";
import { FaCar } from "react-icons/fa";
import { BsFuelPump } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";

export default function CarDescription({ car }) {
  const location = car.address.split(",");
  console.log(car.accessories);

  return (
    <>
      <div className={css.name__desc}>
        <div className={css.line__one}>
          <p className={css.name}>
            {car.brand} {car.model}
            {", "}
            {car.year}
          </p>
          <span className={css.id}>Id {car.mileage}</span>
        </div>

        <div className={css.line__two}>
          <div className={css.location}>
            <CiLocationOn className={css.place} />
            <p className={css.area}>
              {location[1]}
              {","}
              {location[2]}{" "}
            </p>
          </div>

          <p className={css.area}>
            Mileage: {car.mileage.toLocaleString("en-US").replace(/,/g, " ")} km
          </p>
        </div>

        <span className={css.price}>${car.rentalPrice}</span>
        <p className={css.explanation}>
          The Buick Enclave is a stylish and spacious SUV known for its
          comfortable ride and luxurious features.
        </p>
      </div>

      <div className={css.characteristics}>
        <p className={css.conditions}>Rental Conditions: </p>
        <ul className={css.conditions_list}>
          <li className={css.conditions_list__item}>
            <CiCircleCheck />
            Minimum age: 25
          </li>
          <li className={css.conditions_list__item}>
            <CiCircleCheck />
            Security deposite required
          </li>
          <li className={css.conditions_list__item}>
            <CiCircleCheck />
            Valid driver’s license
          </li>
        </ul>

        <p className={css.conditions}>Car Specifications: </p>
        <ul className={css.conditions_list}>
          <li className={css.conditions_list__item}>
            <BsCalendarWeek />
            Year: {car.year}
          </li>
          <li className={css.conditions_list__item}>
            <FaCar />
            Type: {car.type}
          </li>
          <li className={css.conditions_list__item}>
            <BsFuelPump />
            Fuel Consumption: {car.fuelConsumption}
          </li>
          <li className={css.conditions_list__item}>
            <CiSettings />
            Engine Size: {car.engineSize}
          </li>
        </ul>

        <p className={css.conditions}>Accessories and functionalities:</p>
        <ul className={css.conditions_list}>
          {[...car.accessories, ...car.functionalities].map((item) => {
            return (
              <li
                key={crypto.randomUUID()}
                className={css.conditions_list__item}
              >
                <CiCircleCheck />
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
