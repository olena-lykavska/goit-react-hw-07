import React from "react"; // Імпортуємо React
import { useDispatch, useSelector } from "react-redux"; // Імпортуємо хоки для роботи з Redux
import { deleteContact } from "../../redux/contactsOps"; // Імпортуємо операцію для видалення контакту
import { selectFilteredContacts } from "../../redux/contactsSlice"; // Імпортуємо селектор для вибору фільтрованих контактів
import ContactItem from "../ContactItem/ContactItem"; // Імпортуємо компонент для відображення окремого контакту
import css from "./ContactList.module.css"; // Імпортуємо CSS модулі для стилізації списку контактів

// Оголошуємо компонент ContactList
const ContactList = () => {
  const dispatch = useDispatch(); // Хук для доступу до dispatch в Redux
  const contacts = useSelector(selectFilteredContacts); // Отримуємо фільтровані контакти з Redux через селектор

  return (
    <ul className={css.list}> {/* Контейнер для списку контактів */}
      {/* Мапуємо список контактів і для кожного створюємо ContactItem */}
      {contacts.map((contact) => (
        <ContactItem
          key={contact.id} // Унікальний ключ для кожного елементу списку
          contact={contact} // Передаємо дані контакту в ContactItem
          onDelete={() => dispatch(deleteContact(contact.id))} // Передаємо функцію для видалення контакту
        />
      ))}
    </ul>
  );
};

// Експортуємо компонент ContactList для використання в інших частинах програми
export default ContactList;
