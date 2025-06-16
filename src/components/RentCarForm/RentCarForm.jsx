import { Field, Form, Formik } from "formik";
import css from "./RentCarForm.module.css";
import DateField from "../DateField/DateField";

export default function RentCarForm() {
  return (
    <div className={css.form__container}>
      <p className={css.text}>Book your car now</p>
      <p className={css.slogan}>
        Stay connected! We are always ready to help you.
      </p>

      <Formik
        initialValues={{
          name: "",
          email: "",
          bookingDate: "",
          comment: ""
        }}
        onSubmit={(values, { resetForm }) => {
          console.log("Form submitted:", values);
          resetForm();
        }}
      >
        <Form className={css.form}>
          <Field
            name="name"
            type="text"
            placeholder="Name*"
            className={css.input}
            required
          />
          <Field
            name="email"
            type="email"
            placeholder="Email*"
            className={css.input}
            required
          />
          <DateField name="bookingDate" placeholder="Booking date" />
          <Field
            name="comment"
            as="textarea"
            placeholder="Comment"
            className={`${css.input} ${css.textarea}`}
          />
          <button type="submit" className={css.button}>
            Send
          </button>
        </Form>
      </Formik>
    </div>
  );
}
