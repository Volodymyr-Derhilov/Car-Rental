import css from "./CarsList.module.css";
import CarsCard from "../CarsCard/CarsCard";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../redux/filters/filtersSlice";
import { selectTotalPages } from "../../redux/cars/selectors";
import { selectFilters } from "../../redux/filters/selectors";

export default function CarsList({ cars, onClick }) {
  const dispatch = useDispatch();
  const totalPages = useSelector(selectTotalPages);
  const { page } = useSelector(selectFilters);

  return (
    <>
      <ul className={css.cars__list}>
        {cars.map((item) => (
          <li key={item.id} className={css.list__item}>
            <CarsCard car={item} />
          </li>
        ))}
      </ul>
      {page < totalPages && (
        <button type="button" className={css.load__btn} onClick={onClick}>
          Load more
        </button>
      )}
    </>
  );
}
