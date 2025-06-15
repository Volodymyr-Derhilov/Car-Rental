import css from "./CarsList.module.css";
import CarsCard from "../CarsCard/CarsCard";

export default function CarsList({ cars }) {
  return (
    <ul className={css.cars__list}>
      {cars.map((item) => (
        <li key={crypto.randomUUID()} className={css.list__item}>
          <CarsCard car={item} />
        </li>
      ))}
    </ul>
  );
}
