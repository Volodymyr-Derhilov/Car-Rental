import { Link } from "react-router-dom";
import css from "./Home.module.css";

export default function Home() {
  return (
    <section className={css.main}>
      <div className={css.banner}>
        <h1 className={css.action}> Find your perfect rental car</h1>
        <p className={css.slogan}>
          Reliable and budget-friendly rentals for any journey
        </p>
        <button className={css.button}>
          <Link to="/catalog" className={css.button__link}>
            View Catalog
          </Link>
        </button>
      </div>
    </section>
  );
}
