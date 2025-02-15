import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import css from "./ContactForm.module.css";  // Використовуємо "css"
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contactsOps";
import { selectLoading } from "../../redux/contactsSlice";

const ContactForm = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  const validationSchema = Yup.object({
    name: Yup.string().min(3).max(50).required("Required"),
    number: Yup.string()
      .matches(/^\d+$/, "Only numbers")
      .min(3, "Phone number is too short")
      .max(15, "Phone number is too long")
      .required("Required"),
  });

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        const contact = { id: nanoid(), ...values };
        dispatch(addContact(contact));
        resetForm();
      }}
    >
      <Form className={css.form}>
        <div className={css.formGroup}>
          <label htmlFor="name">Name:</label>
          <Field
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            className={css.input}
          />
          <ErrorMessage className={css.error} name="name" component="div" />
        </div>
        <div className={css.formGroup}>
          <label htmlFor="number">Number:</label>
          <Field
            id="number"
            name="number"
            type="text"
            autoComplete="tel"
            className={css.input}
          />
          <ErrorMessage className={css.error} name="number" component="div" />
        </div>
        <button type="submit" className={css.button} disabled={loading}>
          {loading ? "Adding..." : "Add Contact"}
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
