import { useParams } from "react-router-dom";
import css from "./CarDetailsPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectCars, selectIsLoading } from "../../redux/cars/selectors";
import { useEffect } from "react";
import { fetchCars } from "../../redux/cars/operations";
import RentCarForm from "../../components/RentCarForm/RentCarForm";
import CarDescription from "../../components/CarDescription/CarDescription";

export default function CarDetailsPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const car = useSelector(selectCars).find((item) => item.id === id);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  console.log(car);

  return car ? (
    <section className={css.details__section}>
      <div className={css.left}>
        <img src={car.img} alt={car.description} className={css.img} />
        <RentCarForm />
      </div>
      <div className={css.right}>
        <CarDescription car={car} />
      </div>
    </section>
  ) : (
    <p>Loading car...</p>
  );
}
