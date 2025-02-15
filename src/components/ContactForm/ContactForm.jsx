// Імпортуємо необхідні бібліотеки та компоненти
import React from "react"; // Імпортуємо React для JSX
import { Formik, Form, Field, ErrorMessage } from "formik"; // Імпортуємо компоненти для роботи з формами через Formik
import { nanoid } from "nanoid"; // Імпортуємо nanoid для створення унікальних ID
import * as Yup from "yup"; // Імпортуємо Yup для валідації форми
import css from "./ContactForm.module.css"; // Імпортуємо CSS модулі для стилізації форми
import { useDispatch, useSelector } from "react-redux"; // Імпортуємо хоки для роботи з Redux
import { addContact } from "../../redux/contactsOps"; // Імпортуємо дію для додавання контакту в Redux
import { selectLoading } from "../../redux/contactsSlice"; // Імпортуємо селектор для отримання статусу завантаження

// Оголошуємо компонент ContactForm
const ContactForm = () => {
  const dispatch = useDispatch(); // Використовуємо хук для доступу до dispatch
  const loading = useSelector(selectLoading); // Використовуємо хук для отримання статусу завантаження з Redux

  // Оголошуємо схему валідації за допомогою Yup
  const validationSchema = Yup.object({
    name: Yup.string().min(3).max(50).required("Required"), // Валідація для поля 'name' (мінімум 3 символи, максимум 50)
    number: Yup.string()
      .matches(/^\d+$/, "Only numbers") // Валідація для номера телефону (тільки цифри)
      .min(3, "Phone number is too short") // Мінімальна довжина номера телефону
      .max(15, "Phone number is too long") // Максимальна довжина номера телефону
      .required("Required"), // Обов'язкове поле
  });

  return (
    // Компонент Formik для створення форми з валідацією та обробкою подій
    <Formik
      initialValues={{ name: "", number: "" }} // Початкові значення для полів форми
      validationSchema={validationSchema} // Задаємо схему валідації
      onSubmit={(values, { resetForm }) => { // Обробник при відправці форми
        const contact = { id: nanoid(), ...values }; // Створюємо новий об'єкт контакту з унікальним ID
        dispatch(addContact(contact)); // Додаємо контакт в Redux
        resetForm(); // Очищаємо форму після відправки
      }}
    >
      <Form className={css.form}> {/* Основна форма */}
        {/* Поле для вводу імені контакту */}
        <div className={css.formGroup}>
          <label htmlFor="name">Name:</label>
          <Field
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            className={css.input}
          />
          <ErrorMessage className={css.error} name="name" component="div" /> {/* Показуємо помилку для поля 'name' */}
        </div>
        {/* Поле для вводу номеру телефону */}
        <div className={css.formGroup}>
          <label htmlFor="number">Number:</label>
          <Field
            id="number"
            name="number"
            type="text"
            autoComplete="tel"
            className={css.input}
          />
          <ErrorMessage className={css.error} name="number" component="div" /> {/* Показуємо помилку для поля 'number' */}
        </div>
        {/* Кнопка відправки форми */}
        <button type="submit" className={css.button} disabled={loading}>
          {loading ? "Adding..." : "Add Contact"} {/* Якщо йде завантаження, показуємо "Adding...", інакше "Add Contact" */}
        </button>
      </Form>
    </Formik>
  );
};

// Експортуємо компонент ContactForm для використання в інших частинах додатку
export default ContactForm;
