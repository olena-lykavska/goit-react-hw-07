// Імпортуємо необхідні бібліотеки та стилі
import React from "react"; // Імпортуємо React для JSX
import css from "./ContactItem.module.css"; // Імпортуємо CSS модулі для стилізації елементу списку

// Оголошуємо компонент ContactItem
const ContactItem = ({ contact, onDelete }) => { 
  return (
    <li className={css.item}> {/* Створюємо елемент списку з класом 'item' для стилізації */}
      
      {/* Контейнер для інформації про контакт */}
      <div className={css.contactInfo}>
        {/* Відображаємо ім'я та номер телефону контакту */}
        <span className={css.contactName}>{contact.name}</span>: {/* Ім'я контакту */}
        <span className={css.contactNumber}>{contact.number}</span> {/* Номер телефону */}
      </div>

      {/* Кнопка для видалення контакту */}
      <button onClick={onDelete} className={css.deleteButton}>Delete</button> 
      {/* Кнопка викликає функцію onDelete при натисканні */}
    </li>
  );
};

// Експортуємо компонент ContactItem для використання в інших частинах програми
export default ContactItem;
