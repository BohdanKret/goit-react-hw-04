import { Formik, Form, Field } from "formik";
import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";
import { IoIosSearch } from "react-icons/io";

export default function SearchBar({ onSearch }) {
  return (
    <header className={css.header}>
      <div className={css.container}>
        <Formik
          initialValues={{
            topic: "",
          }}
          onSubmit={(values, actions) => {
            values.topic === "" && toast("Please fill in the search field!", {
              position: 'top-left',
              style: {},
            });
            onSearch(values.topic);
            actions.resetForm();
          }}
        >
          <Form className={css.form}>
            <Field
              type="text"
              name="topic"
              className={css.input}
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
            <button type="submit" className={css.searchButton}>
              <IoIosSearch className={css.icon} />
            </button>
          </Form>
        </Formik>
      </div>
      <Toaster position="top-left" />
    </header>
  );
}
