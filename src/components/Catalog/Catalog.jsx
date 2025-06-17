import { useDispatch, useSelector } from "react-redux";
import css from "./Catalog.module.css";
import { useEffect } from "react";
import { fetchBrands } from "../../redux/filters/operations";
import { selectBrands, selectPrices } from "../../redux/filters/selectors";
import { Field, Form, Formik } from "formik";
import {
  resetFilters,
  setFilters,
  setPage
} from "../../redux/filters/filtersSlice";
import { fetchCars } from "../../redux/cars/operations";
import CarsList from "../CarsList/CarsList";
import { selectCars, selectIsLoading } from "../../redux/cars/selectors";
import { resetCars } from "../../redux/cars/carsSlice";

export default function Catalog() {
  const dispatch = useDispatch();
  const brands = useSelector(selectBrands);
  const prices = useSelector(selectPrices);
  const cars = useSelector(selectCars);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(resetFilters());
    dispatch(resetCars());
    dispatch(fetchBrands());
    dispatch(fetchCars());
  }, [dispatch]);

  const onClick = () => {
    const scrollY = window.scrollY;

    dispatch(setPage());
    dispatch(fetchCars({ append: true })).then(() => {
      window.scrollTo({ top: scrollY, behavior: "auto" });
    });
  };

  return (
    <section className={css.catalog}>
      <Formik
        initialValues={{
          brand: "",
          rentalPrice: "",
          minMileage: "",
          maxMileage: ""
        }}
        onSubmit={(values) => {
          dispatch(setFilters(values));
          dispatch(fetchCars());
        }}
      >
        <Form className={css.filterForm}>
          <label className={css.label}>
            <span className={css.span}>Car brand</span>
            <Field as="select" name="brand" className={css.field}>
              <option value="">Choose a brand</option>
              {brands.map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </Field>
          </label>

          <label className={css.label}>
            <span className={css.span}>Price / 1 hour</span>
            <Field as="select" name="rentalPrice" className={css.field}>
              <option value="">Choose a price</option>
              {prices.map((price) => (
                <option key={price} value={price}>
                  {price}
                </option>
              ))}
            </Field>
          </label>

          <label className={css.label}>
            <span className={css.span}>Car mileage / km</span>
            <div style={{ display: "flex", gap: "8px" }}>
              <Field
                type="number"
                name="minMileage"
                placeholder="From"
                min="0"
                className={css.field}
              />
              <Field
                type="number"
                name="maxMileage"
                placeholder="To"
                min="0"
                className={css.field}
              />
            </div>
          </label>
          <button type="submit" className={css.button}>
            Search
          </button>
        </Form>
      </Formik>

      {isLoading ? (
        <p>Loading cars...</p>
      ) : cars.length > 0 ? (
        <CarsList cars={cars} onClick={onClick} />
      ) : (
        <p>No cars found</p>
      )}
    </section>
  );
}
