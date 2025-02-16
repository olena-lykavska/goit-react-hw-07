import React from "react"; 
import { Formik, Form, Field, ErrorMessage } from "formik";  // Імпортуємо компоненти Formik для роботи з формою та валідацією
import { nanoid } from "nanoid";  // Імпортуємо nanoid для генерації унікальних ідентифікаторів
import * as Yup from "yup";  // Імпортуємо Yup для створення схем валідації
import css from "./ContactForm.module.css";  // Імпортуємо стилі для форми
import { useDispatch, useSelector } from "react-redux";  // Імпортуємо хук useDispatch для відправки екшенів та useSelector для отримання стану
import { addContact } from "../../redux/contactsOps";  // Імпортуємо екшен для додавання контакту
import { selectLoading } from "../../redux/contactsSlice";  // Імпортуємо селектор для перевірки статусу завантаження

const ContactForm = () => {
  const dispatch = useDispatch();  // Отримуємо доступ до dispatch для відправки екшенів
  const loading = useSelector(selectLoading);  // Отримуємо значення стану loading зі store

  // Створюємо схему валідації для форми за допомогою Yup
  const validationSchema = Yup.object({
    name: Yup.string()  // Поле "name" повинно бути рядком
      .min(3, "Name is too short")  // Мінімальна довжина - 3 символи
      .max(50, "Name is too long")  // Максимальна довжина - 50 символів
      .required("Required"),  // Поле є обов'язковим

    number: Yup.string()  // Поле "number" повинно бути рядком
      .matches(/^\d+$/, "Only numbers")  // Тільки цифри
      .min(3, "Phone number is too short")  // Мінімальна довжина - 3 символи
      .max(15, "Phone number is too long")  // Максимальна довжина - 15 символів
      .required("Required"),  // Поле є обов'язковим
  });

  return (
    <Formik
      initialValues={{ name: "", number: "" }}  // Початкові значення для форми
      validationSchema={validationSchema}  // Призначаємо схему валідації
      onSubmit={(values, { resetForm }) => {
        // Обробник події на відправку форми
        const contact = { id: nanoid(), ...values };  // Створюємо новий контакт з унікальним id
        dispatch(addContact(contact));  // Відправляємо екшен додавання контакту
        resetForm();  // Очищаємо форму після успішної відправки
      }}
    >
      <Form className={css.form}>  {/* Основна форма */}
        {/* Група для поля "name" */}
        <div className={css.formGroup}>
          <label htmlFor="name">Name:</label>  {/* Мітка для поля "name" */}
          <Field
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            className={css.input}  // Стилі для поля введення
          />
          <ErrorMessage className={css.error} name="name" component="div" />  {/* Виводимо повідомлення про помилку, якщо є */}
        </div>

        {/* Група для поля "number" */}
        <div className={css.formGroup}>
          <label htmlFor="number">Number:</label>  {/* Мітка для поля "number" */}
          <Field
            id="number"
            name="number"
            type="text"
            autoComplete="tel"
            className={css.input}  // Стилі для поля введення
          />
          <ErrorMessage className={css.error} name="number" component="div" />  {/* Виводимо повідомлення про помилку, якщо є */}
        </div>

        {/* Кнопка для відправки форми */}
        <button type="submit" className={css.button} disabled={loading}>
          {!loading ? "Add Contact" : null} {/* Показуємо текст кнопки тільки коли не йде завантаження */}
        </button>

        {/* Показуємо лоадер, якщо йде завантаження */}
        {loading && <div className={css.loader}></div>}
      </Form>
    </Formik>
  );
};

export default ContactForm;  // Експортуємо компонент для використання в інших частинах додатку
