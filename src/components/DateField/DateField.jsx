import { useField } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./DateField.module.css";

export default function DateField({ name, placeholder }) {
  const [field, meta, helpers] = useField(name);
  const { setValue } = helpers;

  return (
    <DatePicker
      selected={field.value}
      onChange={(date) => setValue(date)}
      placeholderText={placeholder}
      className={`${styles.input} ${
        meta.touched && meta.error ? styles.error : ""
      }`}
      dateFormat="dd.MM.yyyy"
    />
  );
}
